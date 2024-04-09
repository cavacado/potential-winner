"use client";
import React from "react";
import { DataLayer } from "../_components/DataLayer";
import { random } from "../_utils";

export default function CustomEvent() {
  const [fingerprint, setFingerPrint] = React.useState<number>(0);
  return (
    <>
      <h1>Showcasing custom event:</h1>
      <br />
      <button
        onClick={() => {
          setFingerPrint(random.randomInt());
          // sendGAEvent("event", "custom_event", {
          //   value: "coolcoolcool",
          // });
        }}
      >
        send custom event
      </button>
      <br />
      <DataLayer fingerprint={fingerprint} />
    </>
  );
}
