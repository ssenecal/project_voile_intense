import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Noto_Sans } from "next/font/google";

// If loading a variable font, you don't need to specify the font weight
const inter = Noto_Sans({
  variable: "--font-noto-sans",
  subsets: ["latin"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Voile Intense",
  description: "Generated by Simon",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased max-w-7xl mx-auto sm:px-6 lg:px-8 w-[428px] h-[926px] bg-gray-500`}
      >
        {children}
      </body>
    </html>
  );
}
