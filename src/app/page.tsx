import React from "react";
import styles from "@/scss/pages/main.module.scss";

export default function Home() {
  return (
    <React.Fragment>
      <div className={styles.pageContent}>
        <div className={`${styles.card} ${styles.lumiereCard}`}></div>
        <div className={`${styles.card} ${styles.partyCard}`}></div>
        <div className={`${styles.card} ${styles.lumiereCard}`}></div>
        <div className={`${styles.card} ${styles.lumiereCard}`}></div>
      </div>
    </React.Fragment>
  );
}
