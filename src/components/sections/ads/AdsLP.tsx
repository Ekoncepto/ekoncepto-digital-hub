/**
 * Componente único de Landing Page de Google Ads.
 *
 * Renderiza uma LP curta de conversão (5 seções) baseada na config
 * passada por prop. Usado por /ads/mercado-livre e /ads/amazon.
 * A /shopee tem página própria (Shopee.tsx) por ser mais estabelecida.
 *
 * Estrutura: Hero (dor + stats) → Cases (prova) → Services (oferta)
 *            → Founders (autoridade) → Contact (CTA final).
 * Todos os CTAs usam whatsappLink() que roteia pra /diagnostico.
 */
import { motion } from 'framer-motion';
import { ArrowRight, MessageCircle, TrendingUp, Target, Zap, Check, Star } from 'lucide-react';
import { whatsappLink, socialProof, businessInfo } from '@/config/site';
import { founders } from '@/config/founders';
import { Footer } from '@/components/sections/Footer';
import type { AdsLPConfig } from '@/config/ads-lp';

interface AdsLPProps {
  config: AdsLPConfig;
}

const { slug, sourcePrefix } = {} as AdsLPConfig; // type helper

export default function AdsLP({ config }: AdsLPProps) {
  const src = (section: string) => `${config.sourcePrefix}-${section}`;

  return (
    <>
      <main>
        {/* 1. HERO — dor específica + stats + CTA */}
        <Hero config={config} source={src('hero')} />

        {/* 2. CASES — prova social */}
        <Cases source={src('cases')} primaryHex={config.primaryHex} />

        {/* 3. SERVICES — 3 ofertas */}
        <Services source={sourcePrefix} primaryHex={config.primaryHex} />

        {/* 4. FOUNDERS — autoridade */}
        <FoundersSection />

        {/* 5. CONTACT — CTA final */}
        <ContactCTA config={config} source={src('contact')} />
      </main>
      <Footer />
    </>
  );
}

// ============ HERO ============
function Hero({ config, source }: { config: AdsLPConfig; source: string }) {
  const stats = [
    { value: socialProof.totalRevenue, label: socialProof.totalRevenueDescription },
    { value: socialProof.averageGrowth, label: socialProof.averageGrowthDescription },
    { value: `NPS ${socialProof.nps}`, label: socialProof.npsDescription },
  ];

  return (
    <section
      className="text-center py-12 md:py-16 lg:py-20"
      style={{
        background: `linear-gradient(135deg, ${config.primaryHex}, ${config.secondaryHex})`,
      }}
    >
      <div className="container mx-auto px-4 sm:px-6">
        <a href="/" aria-label="E-Koncepto" className="inline-block mb-8 md:mb-10">
          <img
            src="/images/ekoncepto-logo branco.svg"
            alt="E-Koncepto"
            className="h-8 md:h-10 w-auto mx-auto"
            width={245}
            height={32}
          />
        </a>
      </div>

      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <p
            className="inline-block text-sm md:text-base font-semibold tracking-wider uppercase mb-8 rounded-full px-5 py-2 backdrop-blur-sm"
            style={{
              color: config.primaryHex === '#FFE600' ? '#131921' : 'rgba(255,255,255,0.9)',
              backgroundColor: 'rgba(255,255,255,0.15)',
            }}
          >
            {config.eyebrow}
          </p>

          <h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] mb-6"
            style={{ color: config.primaryHex === '#FFE600' ? '#131921' : '#fff' }}
          >
            {config.heroHeadline}
          </h1>

          <p
            className="text-lg md:text-xl max-w-2xl mx-auto mb-10 font-medium"
            style={{ color: config.primaryHex === '#FFE600' ? '#2d2d2d' : 'rgba(255,255,255,0.95)' }}
          >
            {config.heroSub}
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-4">
            <a
              href={whatsappLink(source)}
              className="font-bold py-4 px-8 sm:px-10 rounded-lg text-base sm:text-lg transition-all duration-300 transform hover:scale-105 shadow-xl inline-flex items-center justify-center gap-2"
              style={{
                backgroundColor: config.primaryHex === '#FFE600' ? '#3483FA' : config.primaryHex,
                color: '#fff',
              }}
            >
              <MessageCircle className="w-5 h-5" />
              Quero vender mais
            </a>
            <a
              href="#cases"
              className="font-bold py-4 px-8 sm:px-10 rounded-lg text-base sm:text-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center gap-2 border-2"
              style={{
                borderColor: config.primaryHex === '#FFE600' ? '#131921' : 'rgba(255,255,255,0.8)',
                color: config.primaryHex === '#FFE600' ? '#131921' : '#fff',
                backgroundColor: 'transparent',
              }}
            >
              Ver quem já escalou
            </a>
          </div>

          <p
            className="text-base mb-14"
            style={{ color: config.primaryHex === '#FFE600' ? '#2d2d2d' : 'rgba(255,255,255,0.9)' }}
          >
            Diagnóstico gratuito · Resposta em 1 dia útil
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div
                className="text-4xl md:text-5xl font-black mb-2"
                style={{ color: config.primaryHex === '#FFE600' ? '#131921' : '#fff' }}
              >
                {stat.value}
              </div>
              <div
                className="text-base"
                style={{ color: config.primaryHex === '#FFE600' ? '#2d2d2d' : 'rgba(255,255,255,0.9)' }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============ CASES ============
const CASES = [
  { metric: '+R$ 2 milhões/mês', sector: 'Eletroportáteis', desc: 'Em 8 meses de operação estruturada' },
  { metric: '+R$ 152 mil/mês', sector: 'Moda feminina', desc: 'Reposicionamento de preço e Ads' },
  { metric: '+89%', sector: 'Casa e decoração', desc: 'Crescimento em 6 meses' },
  { metric: '+239%', sector: 'Beleza e cuidados', desc: 'Após reestruturação de catálogo' },
];

function Cases({ source, primaryHex }: { source: string; primaryHex: string }) {
  return (
    <section id="cases" className="py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">Resultados reais de clientes</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Não é promessa. É o que acontece quando se aplica método em vez de tentativa.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {CASES.map((c, i) => (
            <motion.div
              key={c.sector}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="rounded-xl border-2 p-6 text-center hover:shadow-lg transition-shadow"
              style={{ borderColor: `${primaryHex}30` }}
            >
              <div className="text-3xl font-black mb-1" style={{ color: primaryHex }}>
                {c.metric}
              </div>
              <div className="text-sm font-semibold mb-1">{c.sector}</div>
              <div className="text-xs text-muted-foreground">{c.desc}</div>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <a
            href={whatsappLink(source)}
            className="inline-flex items-center gap-2 font-bold py-3 px-8 rounded-lg text-base transition-all hover:scale-105"
            style={{ backgroundColor: primaryHex, color: '#fff' }}
          >
            Quero resultados assim
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

// ============ SERVICES ============
function Services({ source, primaryHex }: { source: string; primaryHex: string }) {
  const services = [
    {
      icon: Target,
      title: 'Diagnóstico',
      desc: 'Análise completa da sua operação + plano de ação personalizado.',
      sourceKey: `${source}-diagnostico`,
    },
    {
      icon: Zap,
      title: 'Gestão de Ads',
      desc: 'Shopee Ads, Mercado Ads ou Amazon PPC estruturados pra escalar.',
      sourceKey: `${source}-ads`,
    },
    {
      icon: TrendingUp,
      title: 'Escala',
      desc: 'Expansão de catálogo, promoções e logística full pra crescer.',
      sourceKey: `${source}-escala`,
    },
  ];

  return (
    <section className="py-16 md:py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">Como ajudamos você</h2>
          <p className="text-muted-foreground">Do diagnóstico à escala — mão na massa, orientado a resultado.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <div key={s.title} className="rounded-xl bg-background border p-6 hover:shadow-lg transition-shadow">
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                  style={{ backgroundColor: `${primaryHex}15`, color: primaryHex }}
                >
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{s.desc}</p>
                <a
                  href={whatsappLink(s.sourceKey)}
                  className="text-sm font-semibold inline-flex items-center gap-1 hover:underline"
                  style={{ color: primaryHex }}
                >
                  Quero começar
                  <ArrowRight className="w-3 h-3" />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ============ FOUNDERS ============
function FoundersSection() {
  return (
    <section className="py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">Quem vai te atender</h2>
          <p className="text-muted-foreground">Sócios que colocaram a mão na massa em +50 marcas.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {founders.map((f) => (
            <div key={f.name} className="rounded-xl border p-6 text-center">
              <img
                src={f.image}
                alt={f.name}
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                loading="lazy"
              />
              <h3 className="text-lg font-bold">{f.name}</h3>
              <p className="text-sm text-muted-foreground mb-2">{f.title?.replace(`${f.name}, `, '')}</p>
              <p className="text-sm text-muted-foreground line-clamp-3">{f.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============ CONTACT (CTA final) ============
function ContactCTA({ config, source }: { config: AdsLPConfig; source: string }) {
  const benefits = [
    'Análise completa da sua operação',
    '3 oportunidades concretas de venda',
    'Plano de ação para os próximos 90 dias',
  ];

  return (
    <section
      className="py-16 md:py-20"
      style={{
        background: `linear-gradient(135deg, ${config.secondaryHex}, ${config.primaryHex})`,
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <h2
            className="text-3xl sm:text-4xl font-bold mb-4"
            style={{ color: config.primaryHex === '#FFE600' ? '#131921' : '#fff' }}
          >
            Pare de competir com um pé amarrado
          </h2>
          <p
            className="text-lg mb-8"
            style={{ color: config.primaryHex === '#FFE600' ? '#2d2d2d' : 'rgba(255,255,255,0.95)' }}
          >
            Receba seu diagnóstico gratuito e descubra exatamente o próximo passo.
          </p>

          <div className="rounded-xl p-6 mb-8 text-left max-w-md mx-auto" style={{ backgroundColor: 'rgba(255,255,255,0.95)' }}>
            <ul className="space-y-3">
              {benefits.map((b) => (
                <li key={b} className="flex items-start gap-2 text-foreground">
                  <Check className="w-5 h-5 mt-0.5 shrink-0" style={{ color: config.primaryHex }} />
                  <span className="text-sm font-medium">{b}</span>
                </li>
              ))}
            </ul>
          </div>

          <a
            href={whatsappLink(source)}
            className="inline-flex items-center justify-center gap-2 font-bold py-4 px-10 rounded-lg text-lg transition-all hover:scale-105 shadow-xl"
            style={{
              backgroundColor: config.primaryHex === '#FFE600' ? '#3483FA' : '#fff',
              color: config.primaryHex === '#FFE600' ? '#fff' : config.primaryHex,
            }}
          >
            <MessageCircle className="w-5 h-5" />
            Quero meu diagnóstico gratuito
          </a>

          <p
            className="text-sm mt-4"
            style={{ color: config.primaryHex === '#FFE600' ? '#2d2d2d' : 'rgba(255,255,255,0.85)' }}
          >
            Grátis · Sem compromisso · Resposta em 1 dia útil
          </p>

          <div
            className="flex flex-wrap justify-center gap-x-6 gap-y-2 mt-8 text-sm font-medium"
            style={{ color: config.primaryHex === '#FFE600' ? '#2d2d2d' : 'rgba(255,255,255,0.9)' }}
          >
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
