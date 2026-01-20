import type { Metadata } from "next";
import { Inter, Orbitron, Chakra_Petch } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/providers";

const inter = Inter({ subsets: ["latin"] });
const orbitron = Orbitron({ 
  subsets: ["latin"],
  variable: '--font-orbitron',
});
const chakraPetch = Chakra_Petch({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-chakra',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://void-drillers-x.vercel.app'),
  title: "VoidDrillersX",
  description: "Free earning mini app. Drill, blast off, and hunt USDC rewards.",
  icons: {
    icon: 'https://void-drillers-x.vercel.app/icon.png',
  },
  openGraph: {
    title: "VoidDrillersX",
    description: "Free earning mini app. Drill, blast off, and hunt USDC rewards.",
    url: 'https://void-drillers-x.vercel.app',
    siteName: 'VoidDrillersX',
    images: [
      {
        url: 'https://void-drillers-x.vercel.app/og.png',
        width: 1200,
        height: 630,
        alt: 'VoidDrillersX OG Image',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: "VoidDrillersX",
    description: "Free earning mini app. Drill, blast off, and hunt USDC rewards.",
    images: ['https://void-drillers-x.vercel.app/og.png'],
  },
  other: {
    'base:app_id': '696eec56f22fe462e74c1616',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${orbitron.variable} ${chakraPetch.variable} bg-black overflow-hidden`}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
