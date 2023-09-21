"use client";
import "./globals.css";
import { Inter } from "next/font/google";
import Header from "@/components/header";
const inter = Inter({ subsets: ["latin"] });

import { usePathname } from "next/navigation";

export default function RootLayout({ children }) {
  const pathname = usePathname();
  return (
    <html lang="en">
      <body>

          {/* Only display Header if path is not /sign */}
          <Header />
          {children}

      </body>
    </html>
  );
}
