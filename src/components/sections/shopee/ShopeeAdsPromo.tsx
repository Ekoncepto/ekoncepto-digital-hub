/**
 * Promo especial 01/09 — Gestão de Shopee Ads.
 *
 * Exclusiva da LP /shopee (tráfego vindo do banner dentro da Shopee):
 * gestão de anúncios a partir de R$ 1.500/mês (de R$ 2.500), sem carência
 * e sem período mínimo de contrato — só para quem fechar no dia 01/09.
 *
 * Posicionamento: SEM faixa fixa no topo (rouba a dobra do hero,
 * principalmente no mobile, onde está a maioria do tráfego da Shopee).
 * A oferta aparece como seção dedicada logo após o hero (<ShopeePromoSection />)
 * e vira um lembrete fino com countdown no contato (<ShopeePromoReminder />).
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
  // null = ainda montando (SSR-safe). Promo visível só após checagem no
  // cliente.
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

function CountdownPill({
  left,
}: {
  left: { d: number; h: number; m: number; s: number };
}) {
  return (
    <span className="inline-flex items-center gap-1.5 bg-black/25 rounded-full px-4 py-1.5 font-mono text-base sm:text-lg font-bold tabular-nums">
      <Timer className="w-4 h-4 shrink-0" aria-hidden />
      {left.d > 0 ? `${left.d}d ` : ''}
      {pad(left.h)}:{pad(left.m)}:{pad(left.s)}
    </span>
  );
}

/**
 * Seção da promo no fluxo da página (entre Serviços e Fundadores).
 * Mobile-first: coluna empilhada, texto escalando por breakpoint.
 */
export function ShopeePromoSection() {
  const { visible, left } = usePromoCountdown(SHOPEE_ADS_PROMO_END);
  if (!visible || !left) return null;

  return (
    <section
      id="promo"
      className="relative overflow-hidden bg-gradient-to-br from-[#EE4D2D] via-[#EE4D2D] to-[#F69E15] text-white py-14 md:py-20"
    >
      {/* brilho decorativo */}
      <div
        className="pointer-events-none absolute -top-24 -right-24 w-72 h-72 rounded-full bg-white/10 blur-2xl"
        aria-hidden
      />
      <div className="container max-w-3xl mx-auto px-4 text-center relative">
        <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-1.5 mb-5 text-sm font-semibold tracking-wide">
          <Flame className="w-4 h-4" aria-hidden />
          OFERTA ESPECIAL 01/09 — SÓ HOJE
        </div>

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-3 leading-tight">
          Gestão de Shopee Ads com <br className="hidden sm:block" />
          condição de lançamento
        </h2>
        <p className="text-white/90 text-base md:text-lg mb-6">
          Nossa equipe assume seus anúncios na Shopee: estrutura de campanhas,
          otimização diária e relatório de resultado.
        </p>

        <p className="mb-6">
          <span className="block sm:inline-block text-white/70 line-through text-xl font-semibold mb-1 sm:mb-0 sm:mr-3">
            R$ 2.500
          </span>
          <span className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            R$ 1.500
          </span>
          <span className="text-white/85 font-medium text-lg">/mês</span>
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 mb-8">
          <CountdownPill left={left} />
          <span className="inline-flex items-center gap-1.5 text-sm text-white/90 font-medium">
            <ShieldCheck className="w-4 h-4 shrink-0" aria-hidden />
            Sem carência · Sem fidelidade · Cancele quando quiser
          </span>
        </div>

        <a
          href={whatsappLink(PROMO_SOURCE)}
          className="inline-flex items-center justify-center gap-2 w-full sm:w-auto bg-white text-[#EE4D2D] font-bold text-lg px-10 py-4 rounded-xl transition-all duration-300 transform hover:scale-[1.03] shadow-2xl"
        >
          <MessageCircle className="w-5 h-5" aria-hidden />
          Quero saber mais
        </a>
        <p className="text-xs text-white/70 mt-4">
          Válida somente em 01/09/2026 · Vagas limitadas
        </p>
      </div>
    </section>
  );
}

/**
 * Lembrete fino da promo dentro da seção de contato — UMA linha discreta
 * acima do CTA principal, com countdown (sem card grande: o preço completo
 * já foi apresentado na seção dedicada após o hero).
 */
export function ShopeePromoReminder() {
  const { visible, left } = usePromoCountdown(SHOPEE_ADS_PROMO_END);
  if (!visible || !left) return null;

  return (
    <div className="mb-6">
      <a
        href={whatsappLink(PROMO_SOURCE)}
        className="inline-flex flex-wrap items-center justify-center gap-x-3 gap-y-1 bg-white/10 border border-white/25 rounded-full px-5 py-2 text-sm sm:text-base font-medium text-white/95 hover:bg-white/20 transition-colors"
      >
        <span className="inline-flex items-center gap-1.5 font-semibold">
          <Flame className="w-4 h-4 text-[#F69E15]" aria-hidden />
          Promo 01/09 ativa: Gestão de Shopee Ads por R$ 1.500/mês
        </span>
        <span className="inline-flex items-center gap-1 font-mono font-bold tabular-nums">
          <Timer className="w-3.5 h-3.5" aria-hidden />
          {left.d > 0 ? `${left.d}d ` : ''}
          {pad(left.h)}:{pad(left.m)}:{pad(left.s)}
        </span>
      </a>
    </div>
  );
}
