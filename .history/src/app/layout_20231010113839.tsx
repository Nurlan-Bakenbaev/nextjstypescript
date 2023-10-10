import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Navbar } from 
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Blog Next App",
  description: "Blog Page",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-slate-800" >
        <Navbar/>
        {children}</body>
    </html>
  );
}
