"use client";
import React, { ChangeEvent, useState } from "react";
import BaseButton from "./base/Button/Button";
import BaseInput from "./base/Form/Input";

export default function ComponentsGuide() {
  const [num, setNum] = useState(0);
  const [num1, setNum1] = useState(0);
  const [inputValue, setInputValue] = useState("");
  const increamentCount = () => {
    setNum((num) => num + 1);
    console.log("클릭");
  };

  const increamentCount1 = () => {
    setNum1((num) => num + 1);
    console.log("클릭");
  };

  const textInputValue = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    console.log("왜 나옴??", inputValue);
  };

  return (
    <>
      <div className='guide__wrap'>
        <BaseButton onClick={increamentCount}>버튼 1</BaseButton>
        <BaseButton
          buttonProps={{
            theme: "SECONDARY",
            size: "MEDIUM",
            // disabled: true,
          }}
          onClick={increamentCount1}
        >
          버튼 2
        </BaseButton>
      </div>

      <div className='guide__wrap'>
        <BaseInput
          onChange={textInputValue}
          value={inputValue}
          placeholder='Test Text'
        ></BaseInput>
      </div>

      <p>버튼 1: {num}</p>
      <p>버튼 2: {num1}</p>
    </>
  );
}
