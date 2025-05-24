"use client";

import styles from "@/scss/pages/qcm.module.scss";
import React, { useState } from "react";
import { test } from "./qcm";
import Button from "@/components/Button";

export default function QCM() {
  const [actualQuestion, setActualQuestion] = useState(0);
  const [qcmEnd, setQcmEnd] = useState(false);

  const nextQuestion = () => {
    let nextNumber = actualQuestion + 1;

    if (nextNumber === test[0].nbQuestions) {
      setQcmEnd(true);
      return;
    }

    setActualQuestion(nextNumber);
  };

  return (
    <React.Fragment>
      <div className={styles.pageContent}>
        <div className={styles.qcmTitle}>{test[0].title}</div>
        <div className={styles.qcmQuestion}>
          {test[0].qcm[actualQuestion].question}
        </div>
        <div className={styles.qcmAnswer}>
          {test[0].qcm[actualQuestion].responses.map((res) => (
            <p>{res.text}</p>
          ))}
        </div>
        <div className={styles.qcmButton}>
          <Button buttontype="button">
            {qcmEnd ? "Terminer" : "Prochaine question"}
          </Button>
        </div>
      </div>
    </React.Fragment>
  );
}
