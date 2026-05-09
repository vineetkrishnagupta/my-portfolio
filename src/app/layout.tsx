import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Background from "@/components/Background";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-heading",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Vineet | Full Stack Developer Portfolio",
  description: "A premium portfolio showcasing modern web development projects and skills built with Next.js.",
  keywords: ["Next.js", "React", "Portfolio", "Web Developer", "Full Stack"],
  authors: [{ name: "Vineet" }],
  openGraph: {
    title: "Vineet | Full Stack Developer",
    description: "Premium Web Development Portfolio",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${inter.variable}`} suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Background />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
