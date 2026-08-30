/**
 * Promo especial 01/09 — Gestão de Shopee Ads.
 *
 * Exclusiva da LP /shopee (tráfego vindo do banner dentro da Shopee):
 * gestão de anúncios a partir de R$ 1.500/mês (de R$ 2.500), sem carência
 * e sem período mínimo de contrato — só para quem fechar no dia 01/09.
 *
 * Dois usos (ambos nesta LP apenas):
 *  - <ShopeePromoBar />  → barra fixa no topo com countdown
 *  - <ShopeePromoCard /> → bloco de reforço dentro do ContactShopee
 *
 * AUTO-EXPIRA: depois de SHOPEE_ADS_PROMO_END ambos somem sozinhos.
 * Para uma próxima promo, basta trocar a data (e os textos) aqui.
 */
import { useEffect, useState } from 'react';
import { Flame, MessageCircle, ShieldCheck, Timer } from 'lucide-react';
import { whatsappLink } from '@/config/site';

/** Fim da promo: 01/09/2026 23:59:59 (horário de Brasília). */
export const SHOPEE_ADS_PROMO_END = new Date('2026-09-01T23:59:59-03:00');

/** Source dedicado — identifica leads da promo na planilha (funil). */
const PROMO_SOURCE = 'shopee-promo-ads';

function usePromoCountdown(end: Date) {
  const [now, setNow] = useState<Date | null>(null);
  useEffect(() => {
    setNow(new Date());
    const t = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(t);
  }, []);
  // null = ainda montando (SSR-safe). Promo visível só quando já expirou
  // a checagem no cliente.
  if (!now) return { visible: false, left: null as null | { d: number; h: number; m: number; s: number } };
  const ms = end.getTime() - now.getTime();
  if (ms <= 0) return { visible: false, left: null };
  const totalSec = Math.floor(ms / 1000);
  return {
    visible: true,
    left: {
      d: Math.floor(totalSec / 86400),
      h: Math.floor((totalSec % 86400) / 3600),
      m: Math.floor((totalSec % 3600) / 60),
      s: totalSec % 60,
    },
  };
}

const pad = (n: number) => String(n).padStart(2, '0');

/** Barra fixa no topo da LP — some sozinha após o fim da promo. */
export function ShopeePromoBar() {
  const { visible, left } = usePromoCountdown(SHOPEE_ADS_PROMO_END);
  if (!visible || !left) return null;

  return (
    <div className="sticky top-0 z-50 bg-gradient-to-r from-[#EE4D2D] to-[#F69E15] text-white shadow-lg">
      <div className="container max-w-6xl mx-auto px-4 py-2.5 flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-center">
        <span className="inline-flex items-center gap-1.5 font-bold text-sm sm:text-base">
          <Flame className="w-4 h-4 shrink-0" aria-hidden />
          PROMO 01/09: Gestão de Shopee Ads
        </span>
        <span className="text-sm sm:text-base font-semibold">
          <span className="line-through opacity-75 mr-1.5">R$ 2.500</span>
          por <span className="font-extrabold">R$ 1.500/mês</span>
        </span>
        <span className="hidden md:inline text-xs text-white/85 font-medium">
          sem carência · sem fidelidade
        </span>
        <span className="inline-flex items-center gap-1.5 bg-black/25 rounded-full px-3 py-0.5 font-mono text-sm font-bold tabular-nums">
          <Timer className="w-3.5 h-3.5" aria-hidden />
          {left.d > 0 ? `${left.d}d ` : ''}
          {pad(left.h)}:{pad(left.m)}:{pad(left.s)}
        </span>
        <a
          href={whatsappLink(PROMO_SOURCE)}
          className="inline-flex items-center gap-1 bg-white text-[#EE4D2D] font-bold text-sm px-4 py-1.5 rounded-full hover:bg-white/90 transition-colors"
        >
          <MessageCircle className="w-4 h-4" aria-hidden />
          Quero a promo
        </a>
      </div>
    </div>
  );
}

/** Bloco de reforço da promo dentro da seção de contato. */
export function ShopeePromoCard() {
  const { visible } = usePromoCountdown(SHOPEE_ADS_PROMO_END);
  if (!visible) return null;

  return (
    <div className="bg-white rounded-2xl p-6 md:p-8 mb-10 max-w-2xl mx-auto text-[#EE4D2D] shadow-2xl ring-4 ring-white/30">
      <div className="flex items-center justify-center gap-2 mb-3">
        <Flame className="w-5 h-5" aria-hidden />
        <p className="font-extrabold uppercase tracking-wide text-sm">
          Oferta especial 01/09 — só pra quem chegar hoje
        </p>
      </div>

      <p className="text-center text-slate-700 text-base mb-4">
        Gestão de <strong>Shopee Ads</strong> profissional:
      </p>

      <p className="text-center mb-5">
        <span className="text-slate-400 line-through text-2xl font-semibold mr-2">
          R$ 2.500
        </span>
        <span className="text-4xl md:text-5xl font-extrabold">R$ 1.500</span>
        <span className="text-slate-600 font-medium">/mês</span>
      </p>

      <div className="flex items-center justify-center gap-2 mb-6 text-sm text-slate-600">
        <ShieldCheck className="w-4 h-4 text-[#EE4D2D]" aria-hidden />
        <span>Sem carência · Sem período mínimo de contrato · Cancele quando quiser</span>
      </div>

      <a
        href={whatsappLink(PROMO_SOURCE)}
        className="flex items-center justify-center gap-2 w-full bg-[#EE4D2D] hover:bg-[#c93a18] text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-[1.02] shadow-xl"
      >
        <MessageCircle className="w-5 h-5" aria-hidden />
        Quero fechar a promo de R$ 1.500/mês
      </a>
      <p className="text-center text-xs text-slate-400 mt-3">
        Válida somente em 01/09/2026 · Vagas limitadas
      </p>
    </div>
  );
}
