"use client";
import "./globals.css";
import { createContext } from 'react'
import { useClient } from 'next/client';
import { Inter } from "next/font/google";
import Header from "@/components/header";
import Footer from "@/components/footer";
const inter = Inter({ subsets: ["latin"] });

import { usePathname } from "next/navigation";

export default function RootLayout({ children }) {
  const Client = useClient();
  console.log(Client);
  const Pathname = usePathname();
  console.log(Pathname)
  const Context = createContext();
  console.log(Context);
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
