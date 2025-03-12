import type { Metadata } from "next";
import { Public_Sans, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistPublicSans = Public_Sans({
  variable: "--font-Public_Sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Urban Greens Antigua",
  description:
    "Urban Greens Antigua is a microgreens vertical indoor farm based in Antigua",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistPublicSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
