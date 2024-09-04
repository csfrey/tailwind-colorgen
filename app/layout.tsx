import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="min-h-screen flex flex-col p-8">
          <div className="text-2xl text-white flex items-center">
            <div className="rounded-full w-8 h-8 mr-2 brand-gradient"></div>
            <Link href="/" className="">
              tailwindcss colorgen
            </Link>
          </div>
          {children}
        </main>
      </body>
    </html>
  );
}
