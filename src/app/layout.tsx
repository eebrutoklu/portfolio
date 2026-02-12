import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";
import { LanguageProvider } from "@/context/LanguageContext";


const inter = Inter({ subsets: ["latin"] });
import { Special_Elite, Rouge_Script } from "next/font/google";
const specialElite = Special_Elite({ weight: "400", subsets: ["latin"], variable: "--font-special-elite" });
const rougeScript = Rouge_Script({ weight: "400", subsets: ["latin"], variable: "--font-rouge-script" });

export const metadata: Metadata = {
  title: "Ebru Toklu - Portfolio",
  description: "Ebru Toklu - Frontend Developer Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} ${specialElite.variable} ${rougeScript.variable}`}>
        <ThemeProvider>
          <LanguageProvider>
            <div className="flex min-h-screen flex-col bg-background text-foreground">
              <main className="flex-1">{children}</main>
             
            </div>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
