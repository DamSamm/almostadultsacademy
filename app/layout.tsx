import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import TickerBanner from "./components/TickerBanner";
import CookieConsent from "./components/CookieConsent";
import GoogleAnalytics from "./components/GoogleAnalytics";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const BASE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://almostadultsacademy.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "The Almost Adults Academy",
    template: "%s | The Almost Adults Academy",
  },
  description:
    "Small Humans, Big Plans — An after-school enrichment centre for children aged 5–12 in Singapore offering Coding, Life Skills, Creative Arts, STEM, Performing Arts and Outdoor Classes.",
  openGraph: {
    type: "website",
    siteName: "The Almost Adults Academy",
    title: "The Almost Adults Academy",
    description:
      "Small Humans, Big Plans — An after-school enrichment centre for children aged 5–12 in Singapore.",
    url: BASE_URL,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <TickerBanner />
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <CookieConsent />
        <GoogleAnalytics />

        {/* WhatsApp floating button — replace the number below with your real WhatsApp number */}
        <a
          href="https://wa.me/6588578387?text=Hi%20The%20Almost%20Adults%20Academy!%20I%20would%20like%20to%20find%20out%20more%20about%20your%20programmes.%20%F0%9F%8C%9F"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with us on WhatsApp"
          style={{
            position: "fixed",
            bottom: "28px",
            right: "28px",
            zIndex: 9999,
            backgroundColor: "#25D366",
            borderRadius: "50%",
            width: "56px",
            height: "56px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 4px 16px rgba(0,0,0,0.25)",
          }}
        >
          {/* WhatsApp SVG icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            width="30"
            height="30"
            fill="white"
          >
            <path d="M16 2C8.268 2 2 8.268 2 16c0 2.478.664 4.8 1.82 6.8L2 30l7.44-1.78A13.94 13.94 0 0 0 16 30c7.732 0 14-6.268 14-14S23.732 2 16 2zm0 25.5a11.44 11.44 0 0 1-5.8-1.574l-.416-.247-4.416 1.056 1.1-4.296-.27-.44A11.5 11.5 0 1 1 16 27.5zm6.29-8.62c-.345-.172-2.04-1.006-2.356-1.12-.316-.115-.546-.172-.776.172-.23.344-.89 1.12-1.09 1.35-.2.23-.4.258-.745.086-.345-.172-1.456-.537-2.773-1.71-1.025-.914-1.717-2.043-1.92-2.387-.2-.345-.02-.53.152-.702.156-.155.345-.402.518-.603.172-.2.23-.345.345-.575.115-.23.057-.43-.029-.603-.086-.172-.776-1.87-1.063-2.56-.28-.672-.564-.582-.776-.593l-.66-.012c-.23 0-.603.086-.918.43s-1.205 1.178-1.205 2.873 1.234 3.333 1.406 3.563c.172.23 2.428 3.707 5.882 5.197.823.355 1.465.567 1.965.726.826.263 1.578.226 2.172.137.662-.099 2.04-.834 2.327-1.638.287-.803.287-1.493.2-1.638-.086-.144-.316-.23-.66-.402z"/>
          </svg>
        </a>
      </body>
    </html>
  );
}
