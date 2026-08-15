import type { Metadata } from "next";
import { Inter, Outfit, Fira_Code } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { Toaster } from "@/components/ui/sonner";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import BackToTop from "@/components/common/BackToTop";
import CustomCursor from "@/components/common/CustomCursor";
import OnekoCat from "@/components/common/OnekoCat";
import ThemeColorMeta from "@/components/common/ThemeColorMeta";
import { SITE_CONFIG } from "@/lib/constants";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-outfit",
});

const firaCode = Fira_Code({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-fira-code",
});

export const metadata: Metadata = {
  title: {
    default: SITE_CONFIG.title,
    template: `%s | Mohammed Hayath`,
  },
  description: SITE_CONFIG.description,
  keywords: [
    "Mohammed Hayath",
    "Full-Stack Developer",
    "Software Engineer",
    "Python Developer",
    "FastAPI",
    "React Developer",
    "Next.js",
    "Backend Developer",
    "Software Engineer",
    "Portfolio",
    "CS Graduate",
    "India",
    "MITS University",
    "Django",
    "REST API",
    "TypeScript",
  ],
  authors: [{ name: "Mohammed Hayath", url: SITE_CONFIG.url }],
  creator: "Mohammed Hayath",
  metadataBase: new URL(SITE_CONFIG.url),
  alternates: {
    canonical: SITE_CONFIG.url,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.title,
    title: SITE_CONFIG.title,
    description: SITE_CONFIG.description,
    images: [
      {
        url: SITE_CONFIG.ogImage,
        width: 1200,
        height: 630,
        alt: "Mohammed Hayath — Full-Stack Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_CONFIG.title,
    description: SITE_CONFIG.description,
    creator: "@amohammedhayat",
    images: [SITE_CONFIG.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google69e35e22ab4abc47",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://amdhayath.dpdns.org/#person",
        "name": "Mohammed Hayath",
        "url": "https://amdhayath.dpdns.org",
        "jobTitle": "Full Stack Developer",
        "description": "Full Stack Developer specializing in backend architectures, distributed systems, and responsive UI interfaces.",
        "sameAs": [
          "https://twitter.com/amohammedhayat/",
          "https://www.linkedin.com/in/snmdhayath/",
          "https://github.com/amohammedhayath/"
        ]
      },
      {
        "@type": "Organization",
        "@id": "https://amdhayath.dpdns.org/#organization",
        "name": "Mohammed Hayath",
        "url": "https://amdhayath.dpdns.org",
        "description": "Full Stack Developer specializing in backend architectures, distributed systems, and responsive UI interfaces.",
        "sameAs": [
          "https://twitter.com/amohammedhayat/",
          "https://www.linkedin.com/in/snmdhayath/",
          "https://github.com/amohammedhayath/"
        ]
      },
      {
        "@type": "WebSite",
        "@id": "https://amdhayath.dpdns.org/#website",
        "url": "https://amdhayath.dpdns.org",
        "name": "Mohammed Hayath - Portfolio",
        "publisher": {
          "@id": "https://amdhayath.dpdns.org/#person"
        }
      },
      {
        "@type": "SoftwareApplication",
        "@id": "https://amdhayath.dpdns.org/#software",
        "name": "Mohammed Hayath Portfolio",
        "applicationCategory": "DeveloperApplication",
        "operatingSystem": "All",
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD"
        }
      }
    ]
  };

  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${outfit.variable} ${firaCode.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased min-h-screen bg-background text-foreground selection:bg-amber-500/20 selection:text-foreground">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <ThemeColorMeta />
          <CustomCursor />
          <OnekoCat />
          <div className="noise" />
          
          <Navbar />
          <main className="relative">{children}</main>
          <Footer />
          <BackToTop />
          
          <Toaster position="bottom-right" theme="dark" />
        </ThemeProvider>
      </body>
    </html>
  );
}
