# 🔥 KinkySexy

> E-commerce premium de sextoys et lingerie · Livraison discrète France & Europe
> Stack : **Next.js 14 · PostgreSQL · Prisma · NextAuth · Redis · MinIO · MeiliSearch · Tiptap · Gemini**

Site basé sur la stack `kinkysexy` (battle-tested sur Coolify), adaptée pour la vente d'articles érotiques.

## Démarrage

```bash
cp .env.example .env
docker compose up --build
```

- http://localhost:3000        — site public
- http://localhost:3000/admin  — back-office
- http://localhost:9001        — MinIO console
- http://localhost:8025        — Mailpit

Admin par défaut : `arnaud@gredai.com` / défini dans `.env`

## Domaines prod
- `kinky.pixeeplay.com`       — site public
- `api.kinky.pixeeplay.com`   — API publique (consommée par sun.pixeeplay.com)

## Docs
- [PLAN_V2.md](./PLAN_V2.md) — plan d'implémentation
- [STATUS.md](./STATUS.md)   — état actuel
