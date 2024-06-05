import { Inter } from "next/font/google";
import "../globals.css";
import { dir } from "i18next";
import { languages } from "../i18n/settings";

const inter = Inter({ subsets: ["latin"] });

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

export const metadata = {
  title: "Netflix Indonesia - Tonton Acara TV Online, Tonton Film Online",
  description:
    "Tonton film & acara TV Netflix secara online atau streaming langsung ke smart TV, konsol game, PC, Mac, ponsel, tablet, dan banyak lagi.",
};

export default function RootLayout({ children, params: { lng } }) {
  return (
    <html lang={lng} dir={dir(lng)}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
