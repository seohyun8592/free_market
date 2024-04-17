"use client";
import React, { useState } from "react";
import BaseButton from "./base/Button";



export default function Count() {
  const [num, setNum] = useState(0);
  const increamentCount = () => {
    setNum((num) => num + 1);
  };

  return (
    <>
      <BaseButton increamentCount={increamentCount}></BaseButton>
      <p>{num}</p>
    </>
  );
}
