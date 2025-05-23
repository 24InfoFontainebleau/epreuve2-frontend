"use client";

import styles from "@/scss/components/navbar.module.scss";
import Link from "next/link";
import logo from "@/assets/logo_lyon.png";
import React, { useEffect, useState } from "react";

export default function Navbar() {
  return (
    <header className={styles.navbar}>
      <Link href="/" className={styles.logo}>
        <img src={logo.src} className={styles.logoImage} />
        <h4>EduLyon</h4>
      </Link>
      <div className={styles.navbarButtons}></div>
    </header>
  );
}
