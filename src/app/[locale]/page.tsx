import { Link } from '@/i18n/routing';
import { setRequestLocale } from 'next-intl/server';
import { Sparkles, Truck, Shield, Heart, MessageCircle } from 'lucide-react';
import { prisma } from '@/lib/prisma';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

const CATEGORIES = [
  { slug: 'vibromasseurs',   emoji: '💎', name: 'Vibromasseurs' },
  { slug: 'stimulateurs',    emoji: '🌸', name: 'Stimulateurs' },
  { slug: 'couples',         emoji: '💑', name: 'Pour couples' },
  { slug: 'lingerie',        emoji: '👙', name: 'Lingerie' },
  { slug: 'bdsm',            emoji: '⛓️',  name: 'BDSM' },
  { slug: 'bien-etre',       emoji: '🌿', name: 'Bien-être intime' }
];

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  let products: any[] = [];
  try {
    products = await prisma.product.findMany({
      where: { published: true },
      orderBy: [{ order: 'asc' }, { createdAt: 'desc' }],
      take: 4
    });
  } catch { products = []; }

  return (
    <main className="min-h-screen" style={{ background: '#0a0a0d', color: '#f5f5f7' }}>
      <section
        className="relative overflow-hidden"
        style={{
          background:
            'radial-gradient(ellipse at 30% 0%,rgba(124,58,237,0.18) 0%,transparent 55%),radial-gradient(ellipse at 75% 20%,rgba(255,45,138,0.15) 0%,transparent 50%)'
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-20 md:py-32">
          <span
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium"
            style={{ background: 'rgba(255,45,138,0.10)', color: '#ff58a3', border: '1px solid rgba(255,45,138,0.30)' }}
          >
            <Sparkles className="w-3.5 h-3.5" /> SÉLECTION 18+ · LIVRAISON DISCRÈTE
          </span>
          <h1
            className="text-5xl md:text-7xl font-bold leading-[1.05] mt-6 mb-6"
            style={{ fontFamily: 'Fraunces, Georgia, serif' }}
          >
            <span
              style={{
                backgroundImage: 'linear-gradient(135deg,#ff2d8a 0%,#7c3aed 100%)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                color: 'transparent'
              }}
            >
              Le plaisir,
            </span>
            <br />sans compromis.
          </h1>
          <p className="text-lg md:text-xl max-w-xl mb-8" style={{ color: 'rgba(245,245,247,0.6)' }}>
            Sextoys, lingerie et accessoires choisis avec soin. Emballage neutre, paiement
            sécurisé, livraison rapide en France et Europe.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href={'/boutique' as any}
              className="px-6 py-3 rounded-full font-medium text-white"
              style={{ background: 'linear-gradient(135deg,#ff2d8a 0%,#7c3aed 100%)' }}
            >
              Découvrir la boutique →
            </Link>
            <Link
              href={'/contact' as any}
              className="px-6 py-3 rounded-full"
              style={{ border: '1px solid rgba(255,255,255,0.15)', color: '#f5f5f7' }}
            >
              Nous contacter
            </Link>
          </div>
        </div>
      </section>

      <section style={{ borderTop: '1px solid rgba(255,255,255,0.10)', borderBottom: '1px solid rgba(255,255,255,0.10)', background: 'rgba(255,255,255,0.02)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { icon: Truck, t: 'Livraison discrète', d: 'Emballage neutre, sans mention' },
            { icon: Shield, t: 'Paiement sécurisé', d: 'Stripe, PayPal, Apple Pay' },
            { icon: Heart, t: 'Stock européen', d: 'Expédié 2-5 jours France' },
            { icon: MessageCircle, t: 'Support 7j/7', d: "Sans tabou, à l'écoute" }
          ].map(({ icon: Icon, t, d }) => (
            <div key={t} className="flex gap-3">
              <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0" style={{ background: 'rgba(255,45,138,0.10)' }}>
                <Icon className="w-5 h-5" style={{ color: '#ff2d8a' }} />
              </div>
              <div>
                <p className="font-medium text-sm">{t}</p>
                <p className="text-xs mt-1" style={{ color: 'rgba(245,245,247,0.6)' }}>{d}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-20">
        <h2 className="text-3xl md:text-4xl font-bold mb-10" style={{ fontFamily: 'Fraunces, Georgia, serif' }}>
          Explorer par <span style={{ color: '#ff2d8a' }}>catégorie</span>
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {CATEGORIES.map((c) => (
            <Link key={c.slug} href={`/boutique?category=${c.slug}` as any} className="rounded-2xl p-6 text-center" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.10)' }}>
              <div className="text-4xl mb-3">{c.emoji}</div>
              <p className="font-medium text-sm">{c.name}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-20">
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold" style={{ fontFamily: 'Fraunces, Georgia, serif' }}>Les plus désirés</h2>
            <p className="mt-2" style={{ color: 'rgba(245,245,247,0.6)' }}>Sélection éditoriale</p>
          </div>
          <Link href={'/boutique' as any} className="text-sm hidden md:inline" style={{ color: '#ff2d8a' }}>Voir tout →</Link>
        </div>
        {products.length === 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="rounded-2xl overflow-hidden" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.10)' }}>
                <div className="aspect-square animate-pulse" style={{ background: 'linear-gradient(135deg, rgba(255,45,138,0.13), rgba(124,58,237,0.13))' }} />
                <div className="p-4 space-y-2">
                  <p className="text-xs uppercase tracking-wider" style={{ color: 'rgba(245,245,247,0.5)' }}>Bientôt</p>
                  <p className="text-sm font-medium">Catalogue en cours d'import…</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {products.map((p: any) => (
              <Link key={p.id} href={`/boutique/${p.slug}` as any} className="rounded-2xl overflow-hidden" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.10)' }}>
                <div className="aspect-square" style={{ background: 'rgba(255,255,255,0.05)' }}>
                  {p.image && <img src={p.image} alt={p.name} className="w-full h-full object-cover" />}
                </div>
                <div className="p-4">
                  <p className="text-sm font-medium">{p.name}</p>
                  <p className="mt-2 font-bold" style={{ color: '#ff2d8a' }}>
                    {((p.priceCents ?? 0) / 100).toLocaleString('fr-FR', { style: 'currency', currency: p.currency || 'EUR' })}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>

      <footer className="py-10 text-center text-xs" style={{ borderTop: '1px solid rgba(255,255,255,0.10)', color: 'rgba(245,245,247,0.4)' }}>
        <p>© 2026 KinkySexy — vente strictement réservée aux adultes (18+)</p>
        <div className="mt-3 flex gap-4 justify-center">
          <Link href={'/mentions-legales' as any}>Mentions légales</Link>
          <Link href={'/rgpd' as any}>RGPD</Link>
          <Link href={'/contact' as any}>Contact</Link>
        </div>
      </footer>
    </main>
  );
}
