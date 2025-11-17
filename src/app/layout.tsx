import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import cn from "classnames";
import { Analytics } from '@vercel/analytics/next';
import "./globals.css";

const sans = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
});
const display = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
});

export const metadata: Metadata = {
  title: "Abeju",
  description:
    "Abeju captures the craft of thoughtful quality engineering, manual testing systems, and resilient release practices.",
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://abeju.com"
  ),
  openGraph: {
    title: "Abeju",
    description:
      "Abeju captures the craft of thoughtful quality engineering, manual testing systems, and resilient release practices.",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://abeju.com",
    siteName: "Abeju",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abeju",
    description:
      "Abeju captures the craft of thoughtful quality engineering, manual testing systems, and resilient release practices.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#f9f6f1" />
        <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
      </head>
      <body
        className={cn(
          sans.variable,
          display.variable,
          "min-h-screen bg-cloud-50 font-sans text-ink-900"
        )}
      >
        <div className="flex min-h-screen flex-col">
          <div className="flex-1">{children}</div>
        </div>
        <Analytics />
      </body>
    </html>
  );
}
