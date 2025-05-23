import styles from "@/scss/pages/qcm.module.scss";
import React from "react";
import { test } from "./qcm";

export default function QCM() {
  return (
    <React.Fragment>
      <div className={styles.pageContent}>
        <div className={styles.qcmTitle}>{test[0].title}</div>
        {test.map((id) => (
          <div className={styles.question}>{id.question}</div>
        ))}
      </div>
    </React.Fragment>
  );
}
