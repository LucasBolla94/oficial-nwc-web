import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { SolanaProvider } from "@/components/providers/solana-providers";
import NavBar from "@/components/NavBar"; // ✅ IMPORTA A NAVBAR

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NorthWall Capital",
  description: "dApp Solana + Anchor",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <SolanaProvider>
          <NavBar /> {/* ✅ EXIBE A NAVBAR NO TOPO */}
          {children}
        </SolanaProvider>
      </body>
    </html>
  );
}
