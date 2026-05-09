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
  metadataBase: new URL('https://vineet-krishna-gupta.vercel.app'),
  title: {
    default: "Vineet Krishna Gupta | Full Stack Developer",
    template: "%s | Vineet Krishna Gupta"
  },
  description: "A premium portfolio showcasing modern web development projects and skills built with Next.js, React, and Node.js.",
  keywords: ["Vineet Krishna Gupta", "Next.js", "React", "Portfolio", "Web Developer", "Full Stack Developer", "Software Engineer"],
  authors: [{ name: "Vineet Krishna Gupta", url: "https://vineet-krishna-gupta.vercel.app" }],
  creator: "Vineet Krishna Gupta",
  openGraph: {
    title: "Vineet Krishna Gupta | Full Stack Developer",
    description: "A premium portfolio showcasing modern web development projects.",
    url: "https://vineet-krishna-gupta.vercel.app",
    siteName: "Vineet Krishna Gupta Portfolio",
    images: [
      {
        url: "/profile-imgs.png",
        width: 400,
        height: 500,
        alt: "Vineet Krishna Gupta",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vineet Krishna Gupta | Full Stack Developer",
    description: "A premium portfolio showcasing modern web development projects.",
    images: ["/profile-imgs.png"],
  },
  alternates: {
    canonical: "/",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Vineet Krishna Gupta",
  url: "https://vineet-krishna-gupta.vercel.app",
  image: "https://vineet-krishna-gupta.vercel.app/profile-imgs.png",
  jobTitle: "Full Stack Developer",
  sameAs: [
    "https://github.com",
    "https://linkedin.com"
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${inter.variable}`} suppressHydrationWarning>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Background />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
