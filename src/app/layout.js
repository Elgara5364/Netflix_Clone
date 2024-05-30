import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Netflix Indonesia - Tonton Acara TV Online, Tonton Film Online",
  description:
    "Tonton film & acara TV Netflix secara online atau streaming langsung ke smart TV, konsol game, PC, Mac, ponsel, tablet, dan banyak lagi.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
