import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import { ThemeProvider } from "next-themes";

import "./globals.css";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/sonner";
import { siteConfig } from "@/lib/config";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  metadataBase: new URL(siteConfig.url),
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: "Ephraim Duncan", url: "https://duncan.land" }],
  creator: "Ephraim Duncan",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: `/og?title=${encodeURIComponent(siteConfig.name)}&description=${encodeURIComponent(siteConfig.description)}`,
        width: 1200,
        height: 628,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [
      `/og?title=${encodeURIComponent(siteConfig.name)}&description=${encodeURIComponent(siteConfig.description)}`,
    ],
    creator: "@AnsahDuncan",
  },
  icons: {
    icon: "/favicon.ico",
  },
  alternates: {
    canonical: siteConfig.url,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <head>
        {process.env.NODE_ENV === "development" && (
          <>
            <Script
              src="//unpkg.com/react-grab/dist/index.global.js"
              crossOrigin="anonymous"
              strategy="beforeInteractive"
            />
            <Script
              src="//unpkg.com/@react-grab/claude-code/dist/client.global.js"
              strategy="lazyOnload"
            />
          </>
        )}
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <TooltipProvider>{children}</TooltipProvider>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
