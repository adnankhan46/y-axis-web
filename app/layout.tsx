import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Y-Axis | Navigate through Long AI/LLM Chats",
  description: "A browser extension to navigate through long AI/LLM chats with ease.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased bg-black text-white min-h-screen selection:bg-ai-accent/30 selection:text-ai-accent`}>
        {children}
      </body>
    </html>
  );
}
