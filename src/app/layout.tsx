import type { Metadata, Viewport } from "next";
import { Orbitron, Press_Start_2P } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Main";
import Navbar from "@/components/Header/Navbar";
import CoreProvider from "@/components/CoreProvider";

const pressStart = Press_Start_2P({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-press-start",
});

const orbitron = Orbitron({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-orbitron",
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

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${orbitron.variable} ${pressStart.variable}`}>
      <head>
        {/* Preconnect para RAWG API */}
        <link rel="preconnect" href="https://api.rawg.io" />
        <link rel="dns-prefetch" href="https://api.rawg.io" />
        <link rel="preconnect" href="https://media.rawg.io" />
        <link rel="dns-prefetch" href="https://media.rawg.io" />
      </head>
      <body
        className={`${orbitron.className} bg-blue-darkest overflow-x-hidden bg-center bg-no-repeat tracking-widest text-white`}
      >
        <CoreProvider>
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
        </CoreProvider>
      </body>
    </html>
  );
}
