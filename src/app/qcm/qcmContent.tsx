"use client";

import styles from "@/scss/pages/qcm.module.scss";
import React, { useState } from "react";
import { test } from "./qcm";
import Button from "@/components/Button";
import { useRouter } from "next/navigation";

type QCMContentProps = {
  id: number;
};

export default function QCMContent(props: QCMContentProps) {
  const [actualQuestion, setActualQuestion] = useState(1);
  const [qcmEnd, setQcmEnd] = useState(false);
  const [actualAnswer, setActualAnswer] = useState<Number | null>(null);
  const router = useRouter();

  const nextQuestion = () => {
    let nextNumber = actualQuestion + 1;

    if (qcmEnd) {
      router.push("/");
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

  return (
    <React.Fragment>
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
              onClick={() => setActualAnswer(res.id)}
              style={res.id === actualAnswer ? { color: "#0000ff" } : {}}
            >
              {res.text}
            </p>
          ))}
        </div>
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
    </React.Fragment>
  );
}
