import CodeNPM from "./CodeNPM";

export default function CodeReveal() {
  return (
    <section className="flex w-full flex-col gap-5 px-3">
      <h2 className="text-[1.2rem]">Behind The Code</h2>
      <div className="border-purple-dark relative flex w-full flex-col items-center justify-center rounded-[8px] border-2 bg-black px-5 pt-8 pb-5">
        <div className="absolute top-2 left-2 flex gap-1">
          <div className="h-2 w-2 animate-pulse rounded-full bg-red-500" />
          <div className="h-2 w-2 animate-pulse rounded-full bg-yellow-500" />
          <div className="h-2 w-2 animate-pulse rounded-full bg-green-500" />
        </div>
        <p className="text-blue-neon-bright w-full text-center text-[0.8rem]">
          gaming-universe-terminal
        </p>
        <CodeNPM />
      </div>
    </section>
  );
}
