"use client";

import styles from "@/scss/pages/qcm.module.scss";
import React, { useState } from "react";
import { test } from "./qcm";
import Button from "@/components/Button";

type QCMContentProps = {
  id: number;
};

let score = 0;

export default function QCMContent(props: QCMContentProps) {
  const [actualQuestion, setActualQuestion] = useState(1);
  const [qcmEnd, setQcmEnd] = useState(false);
  const [actualAnswer, setActualAnswer] = useState<Number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const nextQuestion = () => {
    let nextNumber = actualQuestion + 1;

    if (!actualAnswer) {
      setError("veuillez choisir une réponse.");
      return;
    }

    if (test[props.id].qcm[actualQuestion].correct === actualAnswer) score++;

    if (qcmEnd) {
      setShowResult(true);
      return;
    }

    if (nextNumber === test[props.id].nbQuestions) {
      setActualAnswer(null);
      setQcmEnd(true);
      setActualQuestion(nextNumber - 1);
      return;
    }

    setActualQuestion(nextNumber);
    setActualAnswer(null);
  };

  const qcm = (
    <div className={styles.pageContent}>
      <div className={styles.qcmHead}>
        <h1>{test[props.id].title}</h1>
        <div className={styles.qcmQuestion}>
          {
            test[props.id].qcm[qcmEnd ? actualQuestion : actualQuestion - 1]
              .question
          }
        </div>
      </div>
      <div className={styles.qcmAnswer}>
        {test[props.id].qcm[
          qcmEnd ? actualQuestion : actualQuestion - 1
        ].responses.map((res) => (
          <p
            className={styles.answer}
            onClick={() => {
              setActualAnswer(res.id);
              setError(null);
            }}
            style={res.id === actualAnswer ? { color: "#0000ff" } : {}}
          >
            {res.text}
          </p>
        ))}
      </div>
      <p className={styles.error}>{error}</p>
      <div className={styles.qcmButton}>
        <h4>
          {qcmEnd ? actualQuestion + 1 : actualQuestion} /{" "}
          {test[props.id].nbQuestions}
        </h4>
        <Button buttontype="button" onClick={nextQuestion}>
          {qcmEnd ? "Terminer" : "Prochaine question"}
        </Button>
      </div>
    </div>
  );

  const result = (
    <div className={styles.pageContent}>
      <div className={styles.qcmHead}>
        <h1>{test[props.id].title}</h1>
      </div>
      <h2>
        Vous avez {score} / {test[props.id].nbQuestions}
      </h2>
      <Button buttontype="redirect" href="/">
        Revenir à l'accueil
      </Button>
    </div>
  );

  return <React.Fragment>{showResult ? result : qcm}</React.Fragment>;
}
