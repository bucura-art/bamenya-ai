import type { Metadata } from "next";
import { Geist, Squada_One } from "next/font/google";
import ServiceWorkerRegister from "@/components/pwa/ServiceWorkerRegister";
// @ts-expect-error Next.js handles global CSS imports at build time.
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const squadaOne = Squada_One({
  variable: "--font-squada-one",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://bamenya.ai"),
  title: "Bamenya AI",
  description:
    "Bamenya AI assistant is your companion in complex tasks.",
  openGraph: {
    title: "Bamenya AI",
    description:
      "Bamenya AI assistant is your companion in complex tasks.",
    url: "https://bamenya.ai",
    siteName: "Bamenya AI",
    type: "website",
    images: ["/opengraph-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bamenya AI",
    description:
      "Bamenya AI assistant is your companion in complex tasks.",
    images: ["/opengraph-image.png"],
  },
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "Bamenya AI",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${squadaOne.variable} antialiased`}>
        <ServiceWorkerRegister />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
