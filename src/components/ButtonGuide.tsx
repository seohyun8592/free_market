"use client";
import React, { useState } from "react";
import BaseButton from "./base/Button/Button";

export default function ButtonGuide() {
  const [num, setNum] = useState(0);
  const increamentCount = () => {
    setNum((num) => num + 1);
  };

  return (
    <>
      <div>
        <BaseButton increamentCount={increamentCount}>버튼 1</BaseButton>
        <p>{num}</p>
      </div>

      <div>
        <BaseButton
          buttonProps={{
            theme: "SECONDARY",
            size: "MEDIUM",
            disabled: true,
          }}
        >
          버튼 2
        </BaseButton>
        <p>{num}</p>
      </div>
    </>
  );
}
