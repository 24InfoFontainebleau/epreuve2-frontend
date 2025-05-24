import Button from "@/components/Button";
import React from "react";

export default function Lumiere() {
  return (
    <React.Fragment>
      <Button buttontype="redirect" href="/qcm?id=0">
        Lancer le QCM
      </Button>
    </React.Fragment>
  );
}
