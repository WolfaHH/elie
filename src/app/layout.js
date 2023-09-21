"use client";
import "./globals.css";
import { Inter } from "next/font/google";
import Header from "@/components/header";
import Footer from "@/components/footer";
const inter = Inter({ subsets: ["latin"] });

import { usePathname } from "next/navigation";

export default function RootLayout({ children }) {
  const pathname = usePathname();
  console.log(pathname)
  return (
    <html lang="en">
      <body>
          <Header />
          {children}
          <Footer />
      </body>
    </html>
  );
}
