import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import { Toaster } from "@/components/ui/sonner";
import type { Metadata } from "next";
import { Public_Sans, Geist_Mono } from "next/font/google";

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
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistPublicSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Layout UI */}
        {/* Place children where you want to render a page or nested layout */}
        <Navigation />
        <main className="w-11/12 max-w-7xl mx-auto px-2 lg:px-6 space-y-20 min-h-dvh my-20">
          {children}
          <Toaster />
        </main>
        <Footer />
      </body>
    </html>
  );
}
