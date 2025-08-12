import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { services } from '@/config/site';
import { Rocket, TrendingUp, Handshake } from 'lucide-react';

const serviceIcons = {
  'Lançamento de contas': Rocket,
  'Crescimento de vendas': TrendingUp,
  'Consultoria mão na massa': Handshake,
  default: Rocket,
} as const;

// Merge services from config with icons
const serviceItems = services.map(service => ({
  ...service,
  icon: serviceIcons[service.name as keyof typeof serviceIcons] || serviceIcons.default,
}));

export const Services = () => {
  return (
    <section id="servicos" className="py-14 md:py-20">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <Badge className="mb-3">Serviços</Badge>
          <h2 className="text-3xl md:text-4xl font-bold">Construímos resultados com você</h2>
          <p className="text-muted-foreground mt-2">
            Ofertas pensadas para cada etapa da sua jornada nos marketplaces.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {serviceItems.map(({ name, description, icon: Icon }) => (
            <Card
              key={name}
              className="p-6 border-border/60 hover:border-primary/30 transition-colors"
            >
              <div className="size-10 rounded-md bg-secondary flex items-center justify-center mb-4">
                <Icon className="text-primary" />
              </div>
              <h3 className="text-xl font-semibold">{name}</h3>
              <p className="text-muted-foreground mt-2">{description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
