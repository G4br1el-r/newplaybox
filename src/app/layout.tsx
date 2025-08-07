import type { Metadata } from "next";
import { Orbitron } from "next/font/google";
import "./globals.css";
import ContainerAlign from "@/components/ContainerAlign";
import Header from "@/components/Header/Main";
import { Footer } from "@/components/Footer";

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
        className={`${orbitron.className} bg-[url('/background.webp')] tracking-widest text-white`}
      >
        <ContainerAlign>
          <Header />
          {children}
          {/* <Footer /> */}
        </ContainerAlign>
      </body>
    </html>
  );
}
