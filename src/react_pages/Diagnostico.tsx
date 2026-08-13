/**
 * Página /diagnostico — orquestra os 3 pedaços:
 *  - HeroDiagnostico: headline + prova social
 *  - DiagnosticoQuiz: quiz em tela cheia (caminho principal)
 *  - ProactiveChat: chat que abre após 30s (caminho conversacional)
 *
 * O chat só aparece como fallback/segunda via: se o usuário já está
 * engajado no quiz, o balão dele fica discreto (canto inferior esquerdo).
 */
import HeroDiagnostico from '@/components/diagnostico/HeroDiagnostico';
import DiagnosticoQuiz from '@/components/diagnostico/DiagnosticoQuiz';
import ProactiveChat from '@/components/diagnostico/ProactiveChat';

const Diagnostico = () => {
  return (
    <>
      <main className="min-h-screen bg-background">
        <section className="container mx-auto max-w-5xl px-4 py-12 sm:py-16">
          <HeroDiagnostico />
          <DiagnosticoQuiz />

          {/* Confiança / rodapé curto */}
          <footer className="mt-16 text-center text-xs text-muted-foreground">
            Seus dados são usados apenas para entrar em contato sobre seu diagnóstico.
          </footer>
        </section>
      </main>
      <ProactiveChat />
    </>
  );
};

export default Diagnostico;
