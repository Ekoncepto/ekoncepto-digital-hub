import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import SEO from "@/components/SEO";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const landingPagesData = [
  { "slug": "mercado-ads", "title": "Transforme suas vendas no Mercado Livre com Ads inteligentes", "description": "Prova de aumento de vendas com campanhas otimizadas" },
  { "slug": "como-vender-no-mercado-livre", "title": "Guia definitivo: como vender no Mercado Livre e lucrar mais", "description": "Conteúdo educacional para iniciantes" },
  { "slug": "como-ganhar-buy-box-amazon", "title": "Domine o Buy Box e aumente suas vendas na Amazon", "description": "Estratégias práticas de otimização" },
  { "slug": "agencia-de-marketplace", "title": "A gestão de marketplaces que vende por você", "description": "Serviço full-service" },
  { "slug": "gestao-de-marketplaces", "title": "Maximize seu lucro com gestão profissional", "description": "Centralização de operações" },
  { "slug": "precificacao-dinamica", "title": "Aumente margem com preços dinâmicos", "description": "Simulação ROI em tempo real" },
  { "slug": "criacao-a-plus-content-amazon", "title": "Seu produto com apresentação A+ de alta conversão", "description": "Portfólio e provas" },
  { "slug": "consultoria-mercado-livre", "title": "Vendas no Mercado Livre: melhore com especialistas", "description": "Consultoria focada em performance" },
  { "slug": "magalu-ads-produtos-patrocinados", "title": "Anuncie no Magalu e venda mais", "description": "Métricas e diferenciais" },
  { "slug": "como-vender-na-shopee", "title": "Guia atualizado para vender na Shopee", "description": "Conteúdo educacional" },
  { "slug": "vender-no-marketplace", "title": "Tudo que você precisa saber para vender online", "description": "Conteúdo amplo" },
  { "slug": "amazon-seo", "title": "Otimize suas listagens na Amazon", "description": "Estratégias e cases" },
  { "slug": "gestao-de-conta-mercado-livre", "title": "Liberte-se da gestão e foque em vender", "description": "Serviço terceirizado" },
  { "slug": "gestao-de-anuncios-em-marketplaces", "title": "Anúncios que convertem em qualquer marketplace", "description": "Expertise multicanal" },
  { "slug": "fulfillment-by-amazon-brasil", "title": "Venda mais com logística Amazon FBA", "description": "Passo a passo FBA" },
  { "slug": "mercado-envios-full", "title": "Sua operação logística no Mercado Livre", "description": "Benefícios do Full" },
  { "slug": "consultoria-de-vendas-online", "title": "Seu e-commerce vendendo mais em menos tempo", "description": "Consultoria para lojas online" },
  { "slug": "agencia-parceira-amazon", "title": "Parceiro certificado para suas vendas na Amazon", "description": "Autoridade e cases" },
  { "slug": "como-vender-na-amazon-brasil", "title": "Comece a vender na Amazon Brasil", "description": "Guia prático para iniciantes" },
  { "slug": "como-anunciar-no-magalu", "title": "Anuncie no Magalu de forma profissional", "description": "Passo a passo + dicas" },
  { "slug": "agencia-especializada-shopee", "title": "Gestão especializada para seus anúncios na Shopee", "description": "Serviço profissional" },
  { "slug": "estrategias-mercado-ads", "title": "Estratégias para dominar o Mercado Ads", "description": "Conteúdo avançado" },
  { "slug": "marketing-para-ecommerce", "title": "Marketing que impulsiona seu e-commerce", "description": "Estratégias integradas" },
  { "slug": "aumentar-visibilidade-produtos-online", "title": "Torne seus produtos mais visíveis", "description": "Técnicas de SEO e Ads" },
  { "slug": "maiores-marketplaces-do-brasil", "title": "Comparativo dos maiores marketplaces do Brasil", "description": "Análise e dados" }
];

const LandingIndexPage = () => {
  return (
    <>
      <SEO
        title="Páginas de Destino | E-Koncepto"
        description="Explore nossos guias, ferramentas e consultorias para alavancar suas vendas em marketplaces."
      />
      <Header />
      <main className="py-16 md:py-24 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tighter">Nossos Conteúdos e Soluções</h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
              Encontre o material certo para ajudar você a vender mais nos maiores marketplaces do Brasil.
            </p>
          </div>
          <div className="border rounded-lg">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[40%]">Título</TableHead>
                  <TableHead>Proposta de Valor</TableHead>
                  <TableHead className="text-right">Acessar</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {landingPagesData.map((page) => (
                  <TableRow key={page.slug}>
                    <TableCell className="font-medium">{page.title}</TableCell>
                    <TableCell>{page.description}</TableCell>
                    <TableCell className="text-right">
                      <Button asChild variant="outline">
                        <Link to={`/landing/${page.slug}`}>
                          Ver página
                        </Link>
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default LandingIndexPage;
