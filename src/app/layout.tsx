import type { Metadata } from "next";
import { Orbitron } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Main";
import Navbar from "@/components/Header/Navbar";

const orbitron = Orbitron({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Playbox | O próximo nível do entretenimento.",
  description: "Jogos que desafiam. Experiências que marcam.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning lang="en">
      <body
        suppressHydrationWarning
        className={`${orbitron.className} bg-blue-darkest overflow-x-hidden bg-center bg-no-repeat tracking-widest text-white`}
      >
        <section className="grid w-full grid-cols-[auto_1fr] grid-rows-[auto_1fr_auto]">
          <aside className="col-start-1 col-end-2 row-start-1 row-end-4 hidden xl:block">
            <Navbar />
          </aside>

          <header className="col-start-2 col-end-3 row-start-1 row-end-2 xl:hidden">
            <Header />
          </header>

          <main className="col-start-2 col-end-3 row-start-2 row-end-3 flex flex-col gap-30 xl:w-[calc(100vw-275px)]">
            {children}
          </main>
        </section>
      </body>
    </html>
  );
}
