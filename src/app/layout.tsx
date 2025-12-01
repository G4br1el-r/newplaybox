import type { Metadata } from "next";
import { Orbitron } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Main";
import Navbar from "@/components/Header/Navbar";

// ✅ Otimização da fonte Google
const orbitron = Orbitron({
  subsets: ["latin"],
  display: "swap", // ✅ Melhora performance de carregamento
  preload: true, // ✅ Preload da fonte
  variable: "--font-orbitron", // ✅ Opcional: usar CSS variable
});

export const metadata: Metadata = {
  title: "Playbox | The Next Level of Entertainment",
  description:
    "Challenging games. Memorable experiences. Discover thousands of games, reviews, and ratings.",
  keywords: [
    "games",
    "video games",
    "gaming",
    "game reviews",
    "playstation",
    "xbox",
    "pc games",
  ],

  applicationName: "Playbox",

  robots: "index, follow",

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "",
    siteName: "Playbox",
    title: "Playbox | The Next Level of Entertainment",
    description: "Challenging games. Memorable experiences.",
    images: [
      {
        url: "",
        width: 1200,
        height: 630,
        alt: "Playbox",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Playbox | The Next Level of Entertainment",
    description: "Challenging games. Memorable experiences.",
    images: [""],
  },

  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning lang="en">
      <head>
        {/* Preconnect para RAWG API */}
        <link rel="preconnect" href="https://api.rawg.io" />
        <link rel="dns-prefetch" href="https://api.rawg.io" />
        <link rel="preconnect" href="https://media.rawg.io" />
        <link rel="dns-prefetch" href="https://media.rawg.io" />
      </head>
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

          <main className="col-start-2 col-end-3 row-start-2 row-end-3 flex flex-col gap-18 overflow-x-hidden">
            {children}
          </main>
        </section>
      </body>
    </html>
  );
}
