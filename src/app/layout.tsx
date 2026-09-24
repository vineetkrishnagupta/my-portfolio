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
  description: "Vineet Krishna Gupta is a Full Stack Developer with 3+ years of experience building fast, scalable web & mobile apps using React.js, Node.js, Next.js, and Supabase. Based in Agra, India — open to new opportunities.",
  keywords: [
    "Vineet Krishna Gupta",
    "Full Stack Developer",
    "React Developer",
    "Node.js Developer",
    "Next.js Developer",
    "Web Developer India",
    "Software Engineer Agra",
    "Portfolio",
    "JavaScript Developer",
    "Supabase Developer",
    "Vyqda Technologies",
  ],
  authors: [{ name: "Vineet Krishna Gupta", url: "https://vineet-krishna-gupta.vercel.app" }],
  creator: "Vineet Krishna Gupta",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: "Vineet Krishna Gupta | Full Stack Developer",
    description: "Full Stack Developer with 3+ years experience in React.js, Node.js, Next.js & Supabase. Explore my projects and work.",
    url: "https://vineet-krishna-gupta.vercel.app",
    siteName: "Vineet Krishna Gupta Portfolio",
    images: [
      {
        url: "/profile-imgs.png",
        width: 400,
        height: 500,
        alt: "Vineet Krishna Gupta — Full Stack Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vineet Krishna Gupta | Full Stack Developer",
    description: "Full Stack Developer with 3+ years experience in React.js, Node.js, Next.js & Supabase.",
    images: ["/profile-imgs.png"],
  },
  alternates: {
    canonical: "https://vineet-krishna-gupta.vercel.app",
  },
  // TODO: After verifying in Google Search Console, add your verification code here:
  // verification: {
  //   google: 'YOUR_GOOGLE_VERIFICATION_CODE',
  // },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Vineet Krishna Gupta",
  url: "https://vineet-krishna-gupta.vercel.app",
  image: "https://vineet-krishna-gupta.vercel.app/profile-imgs.png",
  jobTitle: "Full Stack Developer",
  worksFor: {
    "@type": "Organization",
    name: "Vyqda Technologies"
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Agra",
    addressRegion: "Uttar Pradesh",
    addressCountry: "IN"
  },
  knowsAbout: ["React.js", "Node.js", "Next.js", "JavaScript", "TypeScript", "Supabase", "Full Stack Development"],
  // TODO: Replace with your actual GitHub and LinkedIn profile URLs
  sameAs: [
    "https://github.com/vineetkrishnagupta",
    "https://linkedin.com/in/vineet-krishna-gupta"
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
