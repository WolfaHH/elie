"use client";
import styles from "@/style/header.module.scss";
import Image from "next/image";
import pp from "@/../assets/examples/moi.png";
import React, { useState } from "react";
import { usePathname } from "next/navigation";


const Header = () => {
  const pathname = usePathname();
    
  return (
    <header className={styles.headerContainer}>
      <div className={styles.desktopHeader}>
        <nav className={styles.topNavbar} aria-label="Secondary Navigation">
          {/* Top navbar content goes here */}
          { pathname === "/" ? (
             <a href="/" className={styles.selected}>Accueil</a>
          ) : (
            <a href="/"  className={styles.elt}>Accueil</a>
          )}
          { pathname === "/team" ? (
             <a href="/team"  className={styles.selected}>L'équipe</a>
          ) : (
            <a  href="/team"  className={styles.elt}>L'équipe</a>
          )}
          { pathname === "/activites" ? (
             <a href="activites/"  className={styles.selected}>Les activités</a>
          ) : (
            <a href="/activites"  className={styles.elt}>Les activités</a>
          )}
          { pathname === "/contact" ? (
             <a  href="/contact"  className={styles.selected}>Contact</a>
          ) : (
            <a href="/contact"  className={styles.elt}>Contact</a>
          )}
          {/* Select with Flag FR, DE and EN for switch the language */}
          <select className={styles.elt}>
            
            <option value="fr">FR</option>
            <option value="de">DE</option>
            <option value="en">EN</option>
          </select>

         
        </nav>
      </div>

      <nav className={styles.mobileNavbar} aria-label="Mobile Navigation">
        {/* Mobile navbar content goes here */}
      </nav>
    </header>
  );
};

export default Header;
