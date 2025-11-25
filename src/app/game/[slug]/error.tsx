"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="via-blue-darkest/80 to-blue-darkest flex min-h-screen items-center justify-center bg-gradient-to-b from-gray-900 px-4">
      <div className="w-full max-w-md text-center">
        {/* Ícone de erro */}
        <div className="mx-auto mb-8 flex h-24 w-24 items-center justify-center rounded-full bg-red-500/10 backdrop-blur-xl">
          <svg
            className="h-12 w-12 text-red-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
            />
          </svg>
        </div>

        {/* Título */}
        <h1 className="mb-4 text-3xl font-bold text-white md:text-4xl lg:text-5xl">
          Jogo não encontrado
        </h1>

        {/* Descrição */}
        <p className="mb-8 text-sm text-white/70 md:text-base lg:text-lg">
          Não foi possível carregar as informações deste jogo. Ele pode não
          existir ou estar temporariamente indisponível.
        </p>

        {/* Botões */}
        <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
          <button
            onClick={reset}
            className="rounded-lg bg-blue-500 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-blue-600 md:text-base"
          >
            Tentar novamente
          </button>

          <a
            href="/"
            className="rounded-lg border border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur-xl transition-all duration-300 hover:scale-105 hover:bg-white/20 md:text-base"
          >
            Voltar para home
          </a>
        </div>

        {/* Detalhes técnicos (só em desenvolvimento) */}
        {process.env.NODE_ENV === "development" && (
          <details className="mt-8 rounded-lg border border-red-500/20 bg-red-500/10 p-4 text-left backdrop-blur-xl">
            <summary className="cursor-pointer text-sm font-medium text-red-400 hover:text-red-300">
              Detalhes técnicos (dev only)
            </summary>
            <pre className="mt-3 overflow-auto text-xs text-red-300/80">
              {error.message}
            </pre>
            {error.digest && (
              <p className="mt-2 text-xs text-red-400/60">
                Error ID: {error.digest}
              </p>
            )}
          </details>
        )}
      </div>
    </div>
  );
}
