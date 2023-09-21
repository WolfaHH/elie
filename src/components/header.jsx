"use client";
import styles from "@/style/header.module.scss";
import Image from "next/image";
import pp from "@/../assets/examples/moi.png";
import React, { useState } from "react";


const Header = () => {
  const [isNSFW, setIsNSFW] = useState(false); // Default is SFW
  return (
    <header className={styles.headerContainer}>
      <div className={styles.desktopHeader}>
        <nav className={styles.topNavbar} aria-label="Secondary Navigation">
          {/* Top navbar content goes here */}

          <div
            className={`${styles.rightTopNavbar} ${
              isNSFW ? styles.switchOnRight : ""
            }`}
            onClick={() => setIsNSFW(!isNSFW)}
          >
            <button
              className={isNSFW ? styles.switchActive : styles.switchButton}
            >
              Safe
            </button>
            <button
              className={!isNSFW ? styles.switchActive : styles.switchButton}
            >
              :D
            </button>
          </div>
          <div className={styles.leftTopNavbar}>
            <div
              type="text"
              placeholder="Search..."
              className={styles.searchBar}
            >
              <svg
                width="800px"
                height="800px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M11 18C14.866 18 18 14.866 18 11C18 7.13401 14.866 4 11 4C7.13401 4 4 7.13401 4 11C4 14.866 7.13401 18 11 18ZM11 6C10.3434 6 9.69321 6.12933 9.08658 6.3806C8.47995 6.63188 7.92876 7.00017 7.46447 7.46447C7.00017 7.92876 6.63188 8.47996 6.3806 9.08658C6.12933 9.69321 6 10.3434 6 11C6 11.5523 6.44772 12 7 12C7.55228 12 8 11.5523 8 11C8 10.606 8.0776 10.2159 8.22836 9.85195C8.37913 9.48797 8.6001 9.15726 8.87868 8.87868C9.15726 8.6001 9.48797 8.37913 9.85195 8.22836C10.2159 8.0776 10.606 8 11 8C11.5523 8 12 7.55228 12 7C12 6.44772 11.5523 6 11 6Z"
                  fill="#A3A3A3"
                />
                <path
                  d="M20 20L18 18"
                  stroke="#A3A3A3"
                  stroke-width="2"
                  stroke-linecap="round"
                />
              </svg>
              <input type="Search Creators..." placeholder="Search Users..." />
            </div>
            <button className={styles.plusButton}>
              <div>
                +
              </div>
              <div>
                Become Creator
              </div>
            </button>
           
          </div>
        </nav>
      </div>

      <nav className={styles.mobileNavbar} aria-label="Mobile Navigation">
        {/* Mobile navbar content goes here */}
      </nav>
    </header>
  );
};

export default Header;
