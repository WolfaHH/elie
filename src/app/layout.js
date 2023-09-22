'use client';
import "./globals.css";
import { createContext } from 'react'
import { useClient } from 'next/client';
import { Inter } from "next/font/google";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { usePathname } from "next/navigation";

const interFont = Inter({ subsets: ["latin"] });
console.log(interFont);

export default function RootLayout({ children }) {
  const client = useClient();
  console.log(client);
  const pathname = usePathname();
  console.log(pathname);

  return (
    <html lang="fr">
      <head>
        {/* Insérez ici les balises meta, title, et autres éléments de l'en-tête */}
      </head>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
