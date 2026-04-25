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
