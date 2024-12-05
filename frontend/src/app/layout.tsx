import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import Providers from "./providers";
import Header from "@/components/Header";
import { Suspense } from "react";

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-sans",
});

export const metadata: Metadata = {
  title: "Pup Mart",
  description: "Grocery delivery service",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${dmSans.className}`}>
        <Providers>
          <Suspense fallback={null}>
            <div className="mx-auto w-full h-full justify-center items-center">
              {children}
            </div>
          </Suspense>
        </Providers>
      </body>
    </html>
  );
}
