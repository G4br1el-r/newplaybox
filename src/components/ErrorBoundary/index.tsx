"use client";

export function ErrorFallback({ error }: { error: Error }) {
  return (
    <div className="flex flex-col gap-3 md:gap-4 lg:gap-5">
      <div className="group flex h-8 w-fit items-center gap-2 rounded-full bg-white/8 p-2.5 backdrop-blur-xl md:h-10 md:gap-3 md:p-3 lg:h-12 lg:p-4">
        <div className="h-1 w-1 rounded-full bg-red-500 md:h-1.5 md:w-1.5 lg:h-2 lg:w-2" />
        <span className="text-[0.6rem] text-white/70 md:text-[0.75rem] lg:text-[0.9rem] xl:text-base">
          Erro
        </span>
      </div>
      <p className="cursor-default text-[1.2rem] font-bold text-red-400 md:text-[1.6rem] lg:text-[2rem]">
        Algo deu errado
      </p>
      <div className="rounded-xl border border-red-800/50 bg-red-900/20 p-8 text-center backdrop-blur-xl">
        <p className="text-sm text-red-400 md:text-base">
          Não foi possível carregar esta seção
        </p>
      </div>
    </div>
  );
}
