import { businessInfo } from '@/config/site';
import { OptimizedImage } from '@/components/ui/OptimizedImage';

export const About = () => {
  return (
    <section id="sobre" className="py-14 md:py-20">
      <div className="container grid md:grid-cols-2 gap-8 items-center">
        <div className="relative overflow-hidden rounded-xl shadow-lg">
          <OptimizedImage
            src="/images/about-hero.jpg"
            alt="Time analisando vendas em marketplaces em um notebook — consultoria E-Koncepto"
            widths={[320, 640, 960]} // Pass only the widths that were generated
            sizes="(max-width: 768px) 100vw, 50vw"
            className="w-full h-auto object-cover"
            imgClassName="w-full h-auto object-cover"
            width={960}
            height={640}
          />
        </div>
        <article>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Sobre a {businessInfo.name}</h2>
          <p className="text-muted-foreground leading-relaxed">
            {businessInfo.about ||
              'Somos uma consultoria especializada em marketplaces. Atuamos lado a lado com seu time, do lançamento à escala, com foco em performance, informações acionáveis e execução constante. Em média, nossos clientes alcançam crescimento acima de 70% nos primeiros 6 meses.'}
          </p>
        </article>
      </div>
    </section>
  );
};

export default About;
