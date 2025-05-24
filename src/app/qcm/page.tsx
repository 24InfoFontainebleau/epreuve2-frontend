import React, { useState } from "react";
import QCMContent from "./qcmContent";

type QCMSearchParams = {
  id: string;
};

type QCMProps = {
  searchParams: Promise<QCMSearchParams>;
};

export default async function QCM(props: QCMProps) {
  const searchParams = await props.searchParams;
  const id: number = Number.parseInt(searchParams.id);

  return <QCMContent id={id} />;
}
