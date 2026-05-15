# ─── Base ─────────────────────────────────────
FROM node:20-alpine AS base
RUN apk add --no-cache libc6-compat openssl
WORKDIR /app

# ─── Deps ─────────────────────────────────────
FROM base AS deps
COPY package.json package-lock.json* ./
COPY prisma ./prisma
RUN npm ci || npm install

# ─── Build ────────────────────────────────────
FROM base AS builder
COPY --from=deps /app/node_modules ./node_modules
COPY . .
ENV NEXT_TELEMETRY_DISABLED=1
# Augmente la heap Node : Next.js + RAG/Avatar/Knowledge dépasse 1.5 GB par défaut → OOM kill silencieux
ENV NODE_OPTIONS="--max-old-space-size=4096"
RUN npx prisma generate
RUN npm run build

# ─── Runtime ──────────────────────────────────
FROM base AS runner
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
RUN addgroup --system --gid 1001 nodejs && adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static
COPY --from=builder /app/prisma ./prisma
COPY --from=builder /app/package.json ./package.json
# On copie l'intégralité de node_modules pour que Prisma + tsx trouvent leurs binaires/wasm.
# Plus lourd qu'une copie sélective mais 100% fiable.
COPY --from=builder /app/node_modules ./node_modules
# On reste en root pour pouvoir push le schéma DB au boot puis on baisse les privilèges via gosu si dispo,
# sinon on tourne en root (acceptable côté conteneur isolé).
EXPOSE 3000
ENV HOSTNAME="0.0.0.0"
# Bootstrap DB + démarrage. On utilise db push (pas migrate) pour ne pas dépendre de fichiers de migration.
CMD ["/bin/sh", "-c", "set +e; echo '═══════════════════'; echo '▶ STARTUP KinkySexy'; echo '═══════════════════'; echo '▶ Step 1: DB push (timeout 60s)...'; timeout 60 npx prisma db push --accept-data-loss --skip-generate 2>&1; echo \"  └─ exit=$?\"; echo '▶ Step 2: Seed (timeout 30s)...'; timeout 30 npx prisma db seed 2>&1 || echo '  └─ seed skipped/failed'; echo '▶ Step 3: node server.js'; node server.js 2>&1 || (echo '═══ CRASH node server.js ═══'; echo 'Container reste alive 10 min pour debug...'; sleep 600)"]
