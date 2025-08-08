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
    <html lang="en">
      <body
        className={`${orbitron.className} bg-[url('/background.webp')] bg-center bg-no-repeat tracking-widest text-white`}
      >
        <section className="grid h-screen w-full grid-cols-[auto_1fr] grid-rows-[auto_1fr_auto] gap-0">
          <aside className="col-start-1 col-end-2 row-start-1 row-end-4">
            <Navbar />
          </aside>

          <header className="col-start-2 col-end-3 row-start-1 row-end-2">
            <Header />
          </header>

          <main className="col-start-2 col-end-3 row-start-2 row-end-3">
            {children}
          </main>
        </section>
      </body>
    </html>
  );
}
