import LandingPage from "./LandingPage";
import { Button } from "@/components/ui/button";

const ComoAnunciarNoMagaluPage = () => {
  return (
    <LandingPage
      title="Anuncie no Magalu de forma profissional"
      description="Aprenda o passo a passo e dicas para anunciar no Magalu com nosso tutorial em vídeo."
      slug="como-anunciar-no-magalu"
    >
      <div className="text-center space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tighter">
          Anuncie no Magalu de forma profissional
        </h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Assista ao nosso tutorial em vídeo com o passo a passo e dicas essenciais para você criar anúncios profissionais e eficazes no Magalu.
        </p>
        <div className="py-8">
          {/* Placeholder for video player */}
          <div className="bg-muted rounded-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold mb-4">Mockup Painel (Visual)</h3>
            <p>Aqui entrará o player de vídeo do tutorial.</p>
          </div>
        </div>
        <Button size="lg">Assistir tutorial</Button>
      </div>
    </LandingPage>
  );
};

export default ComoAnunciarNoMagaluPage;
