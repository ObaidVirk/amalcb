import type { Metadata } from "next";
import "./globals.css";
import { TranslationProvider } from "@/context/TranslationContext";

export const metadata: Metadata = {
  title: "AmalCB.com — Amalgamated Commercial Bank",
  description: "AmalCB.com — Trusted banking and financial services for individuals and businesses. Personal banking, business banking, loans, cards and more.",
  keywords: "AmalCB, Amal Commercial Bank, banking, loans, credit cards, business banking, digital banking",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <TranslationProvider>
          {children}
        </TranslationProvider>
      </body>
    </html>
  );
}
