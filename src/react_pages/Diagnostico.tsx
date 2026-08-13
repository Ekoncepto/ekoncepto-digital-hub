/**
 * Página /diagnostico — orquestra os 2 pedaços:
 *  - HeroDiagnostico: headline + prova social
 *  - DiagnosticoQuiz: quiz em tela cheia (caminho principal)
 *
 * O ProactiveChat NÃO está aqui — ele compete com o quiz (ação duplicada).
 * O chat proativo só deve aparecer em OUTRAS páginas (home, LPs) como
 * segundo caminho. Ver Layout.astro.
 */
import HeroDiagnostico from '@/components/diagnostico/HeroDiagnostico';
import DiagnosticoQuiz from '@/components/diagnostico/DiagnosticoQuiz';

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
    </>
  );
};

export default Diagnostico;
