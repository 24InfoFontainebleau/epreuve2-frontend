import React from "react";
import styles from "@/scss/pages/main.module.scss";
import Link from "next/link";
import frereLumiere from "@/assets/frereLumiere.jpg";

export default function Home() {
  return (
    <React.Fragment>
      <div className={styles.pageContent}>
        <Link
          href="/lumiere"
          className={`${styles.card} ${styles.lumiereCard}`}
          style={{ backgroundImage: `url(${frereLumiere.src})` }}
        >
          <h1 className={styles.cardTitle}>Les frères Lumières</h1>
        </Link>
        <div className={`${styles.card} ${styles.partyCard}`}></div>
        <div className={`${styles.card} ${styles.cineCard}`}></div>
        <div className={`${styles.card} ${styles.philoCard}`}></div>
      </div>
    </React.Fragment>
  );
}
