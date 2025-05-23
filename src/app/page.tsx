import React from "react";
import styles from "@/scss/pages/main.module.scss";
import Link from "next/link";
import frereLumiere from "@/assets/frereLumiere.jpg";
import feteLumiere from "@/assets/feteLumiere.jpg";
import cineconcert from "@/assets/cineconcert.jpg";

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
        <Link
          href="/fete"
          className={`${styles.card} ${styles.partyCard}`}
          style={{ backgroundImage: `url(${feteLumiere.src})` }}
        >
          <h1 className={styles.cardTitle}>La fête des lumières</h1>
        </Link>
        <div className={`${styles.card} ${styles.cineCard}`}>
          <h1>Theme to find</h1>
        </div>
        <Link
          href="/cine"
          className={`${styles.card} ${styles.philoCard}`}
          style={{ backgroundImage: `url(${cineconcert.src})` }}
        >
          <h1 className={styles.cardTitle}>Les cinéconcerts de Lyon</h1>
        </Link>
      </div>
    </React.Fragment>
  );
}
