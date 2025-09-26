import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DamengRandom - Frontend Developer & AI Enthusiast | Portfolio",
  description: "Passionate frontend developer from Sydney specializing in React, Vue.js, Next.js, and AI technologies. Explore my portfolio showcasing modern web development projects and technical expertise.",
  keywords: [
    "DamengRandom",
    "Frontend Developer",
    "React Developer",
    "Vue.js Developer", 
    "Next.js",
    "TypeScript",
    "JavaScript",
    "AI Developer",
    "Web Development",
    "Australia",
    "Portfolio",
    "Software Engineer",
    "GraphQL",
    "Kubernetes",
    "UI/UX"
  ],
  authors: [{ name: "DamengRandom", url: "https://github.com/DamengRandom" }],
  creator: "DamengRandom",
  publisher: "DamengRandom",
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
    type: "website",
    locale: "en_US",
    url: "https://damengrandom.vercel.app",
    title: "DamengRandom - Frontend Developer & AI Enthusiast",
    description: "Passionate frontend developer from Sydney specializing in React, Vue.js, Next.js, and AI technologies.",
    siteName: "DamengRandom Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "DamengRandom - Frontend Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DamengRandom - Frontend Developer & AI Enthusiast",
    description: "Passionate frontend developer from Sydney specializing in React, Vue.js, Next.js, and AI technologies.",
    images: ["/og-image.jpg"],
    creator: "@DamengRandom",
  },
  verification: {
    google: "your-google-verification-code",
  },
  alternates: {
    canonical: "https://damengrandom.vercel.app",
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#3b82f6" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "DamengRandom",
              "alternateName": "DamengRandom",
              "description": "Passionate frontend developer from Sydney specializing in React, Vue.js, Next.js, and AI technologies",
              "url": "https://damengrandom.vercel.app",
              "image": "https://damengrandom.vercel.app/og-image.jpg",
              "sameAs": [
                "https://github.com/DamengRandom",
                "https://www.linkedin.com/in/damon-wu-aab280107/"
              ],
              "jobTitle": "Frontend Developer",
              "worksFor": {
                "@type": "Organization",
                "name": "Freelance"
              },
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "Australia"
              },
              "knowsAbout": [
                "React",
                "Vue.js", 
                "Next.js",
                "TypeScript",
                "JavaScript",
                "GraphQL",
                "Kubernetes",
                "AI/ML",
                "Web Development",
                "Frontend Development"
              ]
            })
          }}
        />
      </head>
      <body
        className={`${geist.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
