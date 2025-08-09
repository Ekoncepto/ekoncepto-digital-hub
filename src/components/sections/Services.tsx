import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Rocket, TrendingUp, Handshake } from "lucide-react";

const items = [
  {
    title: "Lançamento de contas",
    desc: "Guiamos todo o processo para sua empresa iniciar com sucesso nos marketplaces.",
    icon: Rocket,
  },
  {
    title: "Crescimento de vendas",
    desc: "Mapeamos seu mercado e otimizamos anúncios e investimentos para escalar resultados.",
    icon: TrendingUp,
  },
  {
    title: "Consultoria mão na massa",
    desc: "Mais do que indicar o caminho, executamos juntos para um crescimento consistente.",
    icon: Handshake,
  },
];

export const Services = () => {
  return (
    <section id="servicos" className="py-14 md:py-20">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <Badge className="mb-3">Serviços</Badge>
          <h2 className="text-3xl md:text-4xl font-bold">Construímos resultados com você</h2>
          <p className="text-muted-foreground mt-2">Ofertas pensadas para cada etapa da sua jornada nos marketplaces.</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map(({ title, desc, icon: Icon }) => (
            <Card key={title} className="p-6 border-border/60">
              <div className="size-10 rounded-md bg-secondary flex items-center justify-center mb-4">
                <Icon className="text-primary" />
              </div>
              <h3 className="text-xl font-semibold">{title}</h3>
              <p className="text-muted-foreground mt-2">{desc}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
