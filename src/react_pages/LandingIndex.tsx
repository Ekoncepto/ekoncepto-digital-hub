import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import SEO from "@/components/SEO";
import { useBreadcrumbs } from "@/hooks/useBreadcrumbs";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { landingPagesMetadata } from "@/config/landing-pages-metadata";
import { siteMetadata } from "@/config/site";
import { ArrowRight } from "lucide-react";

const disabledSlugs = [
  'como-vender-no-mercado-livre',
  'como-vender-na-shopee',
  'como-vender-na-amazon-brasil',
  'fulfillment-by-amazon-brasil',
  'marketing-para-ecommerce',
  'maiores-marketplaces-do-brasil',
  'aumentar-visibilidade-produtos-online',
  'como-anunciar-no-magalu',
];

const landingPageCategories = {
  "Guias para Iniciantes": [
    { slug: 'como-vender-no-mercado-livre', title: 'Guia definitivo: como vender no Mercado Livre e lucrar mais', description: 'Conteúdo educacional para iniciantes que desejam começar a vender no Mercado Livre.' },
    { slug: 'como-vender-na-shopee', title: 'Guia atualizado para vender na Shopee', description: 'Aprenda com nosso conteúdo educacional a dar os primeiros passos e ter sucesso na Shopee.' },
    { slug: 'como-vender-na-amazon-brasil', title: 'Comece a vender na Amazon Brasil', description: 'Guia prático para iniciantes que querem começar a vender na Amazon Brasil.' },
    { slug: 'vender-no-marketplace', title: 'Tudo que você precisa saber para vender online', description: 'Um hub de artigos com conteúdo amplo sobre como vender em marketplaces.' },
  ],
  "Estratégias de Anúncios (Ads)": [
    { slug: 'mercado-ads', title: 'Transforme suas vendas no Mercado Livre com Ads inteligentes', description: 'Prova de aumento de vendas com campanhas otimizadas e gestão profissional.' },
    { slug: 'magalu-ads-produtos-patrocinados', title: 'Anuncie no Magalu e venda mais', description: 'Receba um checklist gratuito com métricas e diferenciais para anunciar no Magalu Ads.' },
    { slug: 'gestao-de-anuncios-em-marketplaces', title: 'Anúncios que convertem em qualquer marketplace', description: 'Expertise multicanal para criar anúncios que geram resultados em qualquer plataforma.' },
    { slug: 'como-anunciar-no-magalu', title: 'Anuncie no Magalu de forma profissional', description: 'Aprenda o passo a passo e dicas essenciais para criar anúncios eficazes no Magalu.' },
    { slug: 'estrategias-mercado-ads', title: 'Estratégias para dominar o Mercado Ads', description: 'Participe do nosso webinar e tenha acesso a conteúdo avançado sobre Mercado Ads.' },
  ],
  "Otimização e Performance": [
    { slug: 'como-ganhar-buy-box-amazon', title: 'Domine o Buy Box e aumente suas vendas na Amazon', description: 'Aprenda estratégias práticas de otimização para ganhar o Buy Box da Amazon.' },
    { slug: 'precificacao-dinamica', title: 'Aumente margem com preços dinâmicos', description: 'Simule o ROI em tempo real com nossa ferramenta interativa de precificação dinâmica.' },
    { slug: 'amazon-seo', title: 'Otimize suas listagens na Amazon', description: 'Conheça nossas estratégias e cases de SEO para Amazon e solicite uma auditoria gratuita.' },
    { slug: 'aumentar-visibilidade-produtos-online', title: 'Torne seus produtos mais visíveis', description: 'Receba um checklist com técnicas de SEO e Ads para aumentar a visibilidade dos seus produtos.' },
  ],
  "Gestão e Consultoria": [
    { slug: 'agencia-de-marketplace', title: 'A gestão de marketplaces que vende por você', description: 'Oferecemos um serviço full-service para gerenciar suas vendas em marketplaces.' },
    { slug: 'gestao-de-marketplaces', title: 'Maximize seu lucro com gestão profissional', description: 'Centralize suas operações e maximize seu lucro com uma gestão de marketplaces profissional.' },
    { slug: 'consultoria-mercado-livre', title: 'Vendas no Mercado Livre: melhore com especialistas', description: 'Nossa consultoria é focada em performance e resultados no Mercado Livre.' },
    { slug: 'gestao-de-conta-mercado-livre', title: 'Liberte-se da gestão e foque em vender', description: 'Oferecemos um serviço terceirizado de gestão de conta no Mercado Livre.' },
    { slug: 'consultoria-de-vendas-online', title: 'Seu e-commerce vendendo mais em menos tempo', description: 'Consultoria estratégica para lojas online que buscam resultados rápidos.' },
    { slug: 'agencia-parceira-amazon', title: 'Parceiro certificado para suas vendas na Amazon', description: 'Conheça nossos cases de sucesso como agência parceira certificada da Amazon.' },
    { slug: 'agencia-especializada-shopee', title: 'Gestão especializada para seus anúncios na Shopee', description: 'Serviço profissional de gestão de anúncios na Shopee. Solicite uma proposta.' },
  ],
  "Logística e Fulfillment": [
    { slug: 'fulfillment-by-amazon-brasil', title: 'Venda mais com logística Amazon FBA', description: 'Entenda o passo a passo da logística FBA da Amazon com nosso guia ilustrado.' },
    { slug: 'mercado-envios-full', title: 'Sua operação logística no Mercado Livre', description: 'Conheça os benefícios do Mercado Encios Full e simule seus custos.' },
  ],
  "Conteúdo e Marketing": [
    { slug: 'criacao-a-plus-content-amazon', title: 'Seu produto com apresentação A+ de alta conversão', description: 'Veja nosso portfólio e provas de como o conteúdo A+ pode transformar sua página de produto.' },
    { slug: 'marketing-para-ecommerce', title: 'Marketing que impulsiona seu e-commerce', description: 'Baixe nosso whitepaper sobre estratégias de marketing integradas para e-commerce.' },
    { slug: 'maiores-marketplaces-do-brasil', title: 'Comparativo dos maiores marketplaces do Brasil', description: 'Análise e dados sobre os maiores marketplaces do Brasil em um PDF comparativo.' },
  ],
};

const LandingIndexPage = () => {
  const itemList = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    'itemListElement': landingPagesMetadata.map((page, index) => ({
      '@type': 'ListItem',
      'position': index + 1,
      'name': page.title,
      'url': `${siteMetadata.siteUrl}/landing/${page.slug}`
    }))
  };
  const breadcrumbs = useBreadcrumbs();
  return (
    <>
      <SEO
        title="Conteúdos para Vender Mais | E-Koncepto"
        description="Explore nossos guias, ferramentas e consultorias para alavancar suas vendas em marketplaces."
        structuredData={itemList}
        breadcrumbs={breadcrumbs}
      />
      <Header />
      <main className="py-16 md:py-24 lg:py-32">
        <div className="container mx-auto px-4">
          <header className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tighter">Nossos Conteúdos e Soluções</h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
              Encontre o material certo para ajudar você a vender mais nos maiores marketplaces do Brasil. Guias, análises e estratégias para todos os níveis de vendedores.
            </p>
          </header>

          <div className="space-y-16">
            {Object.entries(landingPageCategories).map(([category, pages]) => (
              <section key={category}>
                <h2 className="text-3xl font-bold tracking-tighter mb-8 border-b pb-4">{category}</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {pages.map((page) => (
                    <Card key={page.slug} className="flex flex-col">
                      <CardHeader>
                        <CardTitle>{page.title}</CardTitle>
                      </CardHeader>
                      <CardContent className="flex-grow">
                        <CardDescription>{page.description}</CardDescription>
                      </CardContent>
                      <div className="p-6 pt-0">
                        {disabledSlugs.includes(page.slug) ? (
                          <div
                            className="font-semibold text-muted-foreground flex items-center"
                            data-testid={`coming-soon-${page.slug}`}
                          >
                            Em breve
                          </div>
                        ) : (
                          <a
                            href={`/landing/${page.slug}`}
                            className="font-semibold text-brand hover:underline flex items-center"
                            data-testid={`link-${page.slug}`}
                          >
                            Ler mais <ArrowRight className="ml-2 h-4 w-4" />
                          </a>
                        )}
                      </div>
                    </Card>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default LandingIndexPage;
