/**
 * Componente único de Landing Page de Google Ads.
 *
 * Mantém a ESSÊNCIA da home da E-Koncepto (dor → prova → método →
 * transparência → objeções → climax), adaptando levemente pro canal.
 *
 * Estrutura (7 seções, como a home):
 *  1. Hero — dor específica + autoridade insider + stats + CTA
 *  2. Cases — prova real (3 linhas: headline + valor + tempo) + CTA pico
 *  3. Methodology — "Visibilidade + Conversão = Vendas" (adaptado)
 *  4. Process — 4 passos (transparência)
 *  5. FAQ — objeções de tráfego frio (4-6 perguntas)
 *  6. Founders — autoridade (rostos reais)
 *  7. Contact — climax com CTA primeiro, benefícios depois
 */
import { motion } from 'framer-motion';
import {
  ArrowRight, MessageCircle, TrendingUp, Target, Zap, Check,
  Eye, MousePointerClick, ClipboardList, BarChart3, Users,
} from 'lucide-react';
import { whatsappLink, socialProof } from '@/config/site';
import { founders } from '@/config/founders';
import { Footer } from '@/components/sections/Footer';
import type { AdsLPConfig } from '@/config/ads-lp';

interface AdsLPProps {
  config: AdsLPConfig;
}

export default function AdsLP({ config }: AdsLPProps) {
  const src = (section: string) => `${config.sourcePrefix}-${section}`;
  // ML amarelo precisa de texto escuro; demais usam branco
  const darkText = config.primaryHex === '#FFE600';
  const onColor = darkText ? '#131921' : '#ffffff';
  const onColorMuted = darkText ? '#2d2d2d' : 'rgba(255,255,255,0.92)';

  return (
    <>
      <main>
        <Hero config={config} source={src('hero')} darkText={darkText} onColor={onColor} onColorMuted={onColorMuted} />
        <Cases source={src('cases')} primaryHex={config.primaryHex} marketplaceName={config.name} />
        <Methodology primaryHex={config.primaryHex} config={config} />
        <Process primaryHex={config.primaryHex} />
        <Faq primaryHex={config.primaryHex} marketplaceName={config.name} />
        <FoundersSection primaryHex={config.primaryHex} />
        <ContactCTA config={config} source={src('contact')} darkText={darkText} onColor={onColor} onColorMuted={onColorMuted} />
      </main>
      <Footer />
    </>
  );
}

// ============ 1. HERO ============
function Hero({ config, source, darkText, onColor, onColorMuted }: any) {
  const stats = [
    { value: socialProof.totalRevenue, label: socialProof.totalRevenueDescription },
    { value: socialProof.averageGrowth, label: socialProof.averageGrowthDescription },
    { value: `NPS ${socialProof.nps}`, label: socialProof.npsDescription },
  ];

  return (
    <section
      className="text-center py-12 md:py-16 lg:py-20"
      style={{ background: `linear-gradient(135deg, ${config.primaryHex}, ${config.secondaryHex})` }}
    >
      <div className="container mx-auto px-4 sm:px-6">
        <a href="/" aria-label="E-Koncepto" className="inline-block mb-8">
          <img src="/images/ekoncepto-logo branco.svg" alt="E-Koncepto" className="h-8 md:h-10 w-auto mx-auto" width={245} height={32} />
        </a>
      </div>

      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <p
            className="inline-block text-sm md:text-base font-semibold tracking-wider uppercase mb-6 rounded-full px-5 py-2 backdrop-blur-sm"
            style={{ color: onColor, backgroundColor: 'rgba(255,255,255,0.18)' }}
          >
            {config.eyebrow}
          </p>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] mb-5" style={{ color: onColor }}>
            {config.heroHeadline}
          </h1>

          {/* Reframe método + insider (a 2ª batida que faltava) */}
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-3 font-medium" style={{ color: onColorMuted }}>
            {config.heroSub}
          </p>
          <p className="text-base md:text-lg max-w-2xl mx-auto mb-8" style={{ color: onColorMuted }}>
            Não existe sorte, existe método. Nosso time atuou de dentro das maiores plataformas — agora liga pelo seu lado.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-3">
            <a
              href={whatsappLink(source)}
              className="font-bold py-4 px-8 sm:px-10 rounded-lg text-base sm:text-lg transition-all duration-300 transform hover:scale-105 shadow-xl inline-flex items-center justify-center gap-2"
              style={{
                backgroundColor: darkText ? '#3483FA' : config.primaryHex,
                color: '#fff',
              }}
            >
              <MessageCircle className="w-5 h-5" />
              Quero meu diagnóstico gratuito
            </a>
            <a
              href="#cases"
              className="font-bold py-4 px-8 sm:px-10 rounded-lg text-base sm:text-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center gap-2 border-2"
              style={{ borderColor: darkText ? '#131921' : 'rgba(255,255,255,0.8)', color: onColor }}
            >
              Ver quem já escalou
            </a>
          </div>

          <p className="text-base mb-12" style={{ color: onColorMuted }}>
            Diagnóstico gratuito · Resposta em 1 dia útil
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-4xl md:text-5xl font-black mb-2" style={{ color: onColor }}>{stat.value}</div>
              <div className="text-base" style={{ color: onColorMuted }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============ 2. CASES (3 linhas: headline + valor + tempo) ============
function Cases({ source, primaryHex, marketplaceName }: any) {
  const cases = [
    { headline: 'De operação estagnada a', value: '+R$ 2 milhões/mês', desc: 'em vendas em apenas 4 meses', sector: 'Material Elétrico' },
    { headline: 'Do zero a', value: '+R$ 152 mil/mês', desc: 'em 2 meses após o lançamento', sector: 'Equipamentos Hospitalares' },
    { headline: 'Faturamento escalado em', value: '+89%', desc: 'já no primeiro mês de operação', sector: 'Magazine' },
    { headline: 'Liderança de categoria com', value: '+239% em vendas', desc: 'em 6 meses de gestão', sector: 'Higiene e Beleza Animal' },
  ];

  return (
    <section id="cases" className="py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">
            Isso é o que acontece quando você para de <span className="text-primary">chutar</span> e começa a jogar com dados.
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Não são estimativas. São resultados reais, com tempo de operação e setor. O mesmo método — aplicado à sua marca.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
          {cases.map((c, i) => (
            <motion.div
              key={c.sector}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="rounded-xl border-2 p-6"
              style={{ borderColor: `${primaryHex}30` }}
            >
              <p className="text-sm text-muted-foreground mb-1">{c.headline}</p>
              <div className="text-3xl font-black mb-1" style={{ color: primaryHex }}>{c.value}</div>
              <p className="text-sm text-muted-foreground mb-3">{c.desc}</p>
              <span className="inline-block text-xs font-semibold px-3 py-1 rounded-full" style={{ backgroundColor: `${primaryHex}15`, color: primaryHex }}>
                {c.sector}
              </span>
            </motion.div>
          ))}
        </div>

        {/* CTA no pico de persuasão */}
        <div className="text-center max-w-2xl mx-auto rounded-2xl p-8" style={{ backgroundColor: `${primaryHex}08` }}>
          <h3 className="text-2xl font-bold mb-3">Esses resultados podem ser os seus próximos 90 dias.</h3>
          <p className="text-muted-foreground mb-6">
            Já movimentamos {socialProof.totalRevenue} em marketplaces para {socialProof.brandsServed} marcas. No diagnóstico gratuito, mostramos exatamente onde estão as suas maiores oportunidades.
          </p>
          <a
            href={whatsappLink(source)}
            className="inline-flex items-center gap-2 font-bold py-4 px-8 rounded-lg text-base transition-all hover:scale-105 shadow-lg"
            style={{ backgroundColor: primaryHex, color: '#fff' }}
          >
            <MessageCircle className="w-5 h-5" />
            Quero resultados assim
          </a>
        </div>
      </div>
    </section>
  );
}

// ============ 3. METHODOLOGY (adaptado por canal) ============
function Methodology({ primaryHex, config }: any) {
  const pillars = [
    {
      icon: Eye,
      title: 'Visibilidade (Algoritmo)',
      desc: `Fazemos seus produtos serem encontrados na ${config.name}. Usamos tecnologia para entender o que os clientes buscam e posicionamos seus anúncios na frente da concorrência.`,
      bullets: ['Tecnologia proprietária (scraper)', 'Otimização orgânica (SEO)', 'Gestão de mídia paga (Ads)'],
    },
    {
      icon: MousePointerClick,
      title: 'Conversão (Compra)',
      desc: 'Depois de ser visto, seu anúncio precisa convencer. Criamos uma experiência de compra irresistível que transforma cliques em vendas.',
      bullets: ['Conteúdo de alta performance', 'Precificação inteligente', 'Ofertas atrativas'],
    },
  ];

  return (
    <section className="py-16 md:py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">
            Nossa Fórmula: <span style={{ color: primaryHex }}>Visibilidade + Conversão = Vendas</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Não existe sorte, existe método. Dividimos nosso trabalho em dois pilares fundamentais que garantem o resultado.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {pillars.map((p) => {
            const Icon = p.icon;
            return (
              <div key={p.title} className="rounded-xl bg-background border p-6">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4" style={{ backgroundColor: `${primaryHex}15`, color: primaryHex }}>
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-2">{p.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{p.desc}</p>
                <ul className="space-y-2">
                  {p.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2 text-sm">
                      <Check className="w-4 h-4 mt-0.5 shrink-0" style={{ color: primaryHex }} />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ============ 4. PROCESS (transparência) ============
function Process({ primaryHex }: any) {
  const steps = [
    { icon: ClipboardList, title: 'Onboarding e Diagnóstico', desc: 'Entendemos sua operação e mapeamos oportunidades.' },
    { icon: BarChart3, title: 'Análise de Mercado', desc: 'Estudamos concorrência, demanda e precificação.' },
    { icon: Zap, title: 'Criação e Otimização', desc: 'Implementamos anúncios, conteúdo e campanhas.' },
    { icon: TrendingUp, title: 'Reports e Acompanhamento', desc: 'Relatórios mensais, reuniões quinzenais e suporte via WhatsApp.' },
  ];

  return (
    <section className="py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold uppercase tracking-wider mb-2" style={{ color: primaryHex }}>Nosso Processo</p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">Como a Ekoncepto transforma seu negócio</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Transparência do início ao fim. Você sabe exatamente o que acontece depois de começar.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {steps.map((s, i) => {
            const Icon = s.icon;
            return (
              <div key={s.title} className="text-center">
                <div className="relative w-16 h-16 mx-auto mb-4">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center" style={{ backgroundColor: `${primaryHex}15`, color: primaryHex }}>
                    <Icon className="w-7 h-7" />
                  </div>
                  <span className="absolute -top-1 -right-1 w-6 h-6 rounded-full text-xs font-bold flex items-center justify-center text-white" style={{ backgroundColor: primaryHex }}>
                    {i + 1}
                  </span>
                </div>
                <h3 className="font-bold mb-1 text-sm">{s.title}</h3>
                <p className="text-xs text-muted-foreground">{s.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ============ 5. FAQ (objeções de tráfego frio) ============
function Faq({ primaryHex, marketplaceName }: any) {
  const faqs = [
    { q: 'Quanto tempo até ver resultado?', a: 'Os primeiros sinais aparecem em 2–4 semanas. Resultados consolidados em 6 meses. Aceleramos o processo com método e tecnologia.' },
    { q: 'Como é a forma de cobrança?', a: 'Trabalhamos com modelos flexíveis (fee fixo, comissão ou híbrido), alinhados ao seu momento. Definimos juntos no diagnóstico gratuito.' },
    { q: 'Vocês são parceiros oficiais?', a: 'Nosso time é certificado pelos principais marketplaces e tem ex-insiders que trabalharam dentro das plataformas. Conhecemos os bastidores.' },
    { q: 'O que preciso pra começar?', a: 'Apenas vontade de crescer e acesso às suas contas. Cuidamos do resto: estratégia, implementação, otimização e acompanhamento.' },
    { q: 'Vocês atendem apenas uma categoria?', a: 'Não. Já atendemos de eletrônicos a moda, de casa a beleza. O método se adapta ao seu nicho e à sua operação.' },
    { q: 'E se eu já vendo e quero escalar?', a: 'Perfeito. Temos serviço dedicado pra quem já tem tração e quer ir pro próximo nível — expansão de canais, sortimento e margem.' },
  ];

  return (
    <section className="py-16 md:py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">Dúvidas frequentes</h2>
          <p className="text-muted-foreground">Respostas diretas. Se sua dúvida não está aqui, fale com a gente.</p>
        </div>

        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((f, i) => (
            <details key={i} className="group rounded-xl border bg-background overflow-hidden">
              <summary className="flex items-center justify-between p-5 cursor-pointer font-semibold text-sm sm:text-base list-none">
                {f.q}
                <span className="ml-4 transition-transform group-open:rotate-45" style={{ color: primaryHex }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 5v14M5 12h14" /></svg>
                </span>
              </summary>
              <div className="px-5 pb-5 text-sm text-muted-foreground">{f.a}</div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============ 6. FOUNDERS ============
function FoundersSection({ primaryHex }: any) {
  return (
    <section className="py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold uppercase tracking-wider mb-2" style={{ color: primaryHex }}>Quem vai te atender</p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">Ex-insiders das plataformas. Hoje, do seu lado.</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Fundadores que viveram a operação por dentro — e agora usam esse conhecimento pra acelerar suas vendas.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {founders.map((f) => (
            <div key={f.name} className="rounded-xl border p-6 text-center">
              <img src={f.image} alt={f.name} className="w-24 h-24 rounded-full mx-auto mb-4 object-cover" loading="lazy" />
              <h3 className="text-lg font-bold">{f.name}</h3>
              <p className="text-sm mb-3" style={{ color: primaryHex }}>{f.title?.replace(`${f.name}, `, '')}</p>
              <p className="text-sm text-muted-foreground line-clamp-4">{f.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============ 7. CONTACT (CTA primeiro, benefícios depois) ============
function ContactCTA({ config, source, darkText, onColor, onColorMuted }: any) {
  const benefits = [
    'Análise da sua operação atual nos marketplaces',
    'Mapeamento das 3 maiores oportunidades de faturamento',
    'Um plano de ação de 90 dias desenhado por ex-insiders das plataformas',
  ];

  return (
    <section
      className="py-16 md:py-20"
      style={{ background: `linear-gradient(135deg, ${config.secondaryHex}, ${config.primaryHex})` }}
    >
      <div className="container mx-auto px-4 sm:px-6 text-center">
        <div className="max-w-2xl mx-auto">
          {/* CTA PRIMEIRO (usuário que chegou aqui já é alta intenção) */}
          <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ color: onColor }}>
            Pare de competir com um pé amarrado.
          </h2>
          <p className="text-lg mb-8" style={{ color: onColorMuted }}>
            Enquanto você tenta adivinhar o algoritmo, seus concorrentes já conversam com quem o construiu.
            Em 30 minutos de diagnóstico, mostramos onde você está perdendo dinheiro — e o caminho para os seus próprios números.
          </p>

          <a
            href={whatsappLink(source)}
            className="inline-flex items-center justify-center gap-2 font-bold py-4 px-10 rounded-lg text-lg transition-all hover:scale-105 shadow-xl mb-4"
            style={{
              backgroundColor: darkText ? '#3483FA' : '#ffffff',
              color: darkText ? '#fff' : config.primaryHex,
            }}
          >
            <MessageCircle className="w-5 h-5" />
            Quero meu diagnóstico gratuito
          </a>

          <p className="text-sm mb-10" style={{ color: onColorMuted }}>
            Grátis · Sem compromisso · Resposta em até 1 dia útil
          </p>

          {/* Benefícios depois (reforço) */}
          <div className="rounded-xl p-6 text-left max-w-md mx-auto" style={{ backgroundColor: 'rgba(255,255,255,0.95)' }}>
            <p className="font-semibold text-foreground mb-3 text-center">No diagnóstico gratuito, você recebe:</p>
            <ul className="space-y-3">
              {benefits.map((b: string) => (
                <li key={b} className="flex items-start gap-2 text-foreground">
                  <Check className="w-5 h-5 mt-0.5 shrink-0" style={{ color: config.primaryHex }} />
                  <span className="text-sm font-medium">{b}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mt-8 text-sm font-medium" style={{ color: onColorMuted }}>
            <span>{socialProof.totalRevenue} {socialProof.totalRevenueDescription}</span>
            <span>·</span>
            <span>{socialProof.brandsServed} {socialProof.brandsServedDescription}</span>
            <span>·</span>
            <span>NPS {socialProof.nps}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
