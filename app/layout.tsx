import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Y-Axis | Navigate through Long AI/LLM Chats",
  description: "A browser extension to navigate through long AI/LLM chats easily.",

  openGraph: {
    title: "Y-Axis | Navigate through Long AI/LLM Chats",
    description: "A browser extension to navigate through long AI/LLM chats easily.",
    url: "https://yaxis.vercel.app",
    siteName: "Y-Axis",
    images: [
      {
        url: "https://yaxis.vercel.app/socials/yaxis-thumbnail.png",
        width: 1200,
        height: 630,
        alt: "Y-Axis Preview",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Y-Axis | Navigate through Long AI/LLM Chats",
    description: "A browser extension to navigate through long AI/LLM chats easily.",
    images: ["https://yaxis.vercel.app/socials/yaxis-thumbnail.png"],
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
        <script defer src="https://cloud.umami.is/script.js" data-website-id="5725d3ea-bff4-4f67-81af-a27a471fe346"></script>
      </head>
      <body className={`${inter.variable} antialiased bg-black text-white min-h-screen selection:bg-ai-accent/30 selection:text-ai-accent`}>
        {children}
        <Footer />
      </body>
    </html>
  );
}