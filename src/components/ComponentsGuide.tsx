"use client"

import React, { ChangeEvent, useEffect, useState } from "react"

import { loadHandler } from "@/app/api/mapApi"

import BaseButton from "./base/Button/Button"
import BaseInput from "./base/Form/Input"

// import { geoLocation } from "@/app/api/geoLocationApi"

export default function ComponentsGuide() {
  const [num, setNum] = useState(1985)
  const [num1, setNum1] = useState(1991)
  const [inputValue, setInputValue] = useState("")
  const [fixedText, setFixedText] = useState("")

  const increamentCount = () => {
    setNum((prev) => prev + 1)
    console.log("클릭")
  }

  const increamentCount1 = () => {
    setNum1((prev) => prev + 1)
    console.log("클릭")
  }

  const textInputValue = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
    console.log("왜 나옴??", inputValue)
  }

  const inputBlur = () => {
    setFixedText(inputValue)
    setInputValue("")
  }

  useEffect(() => {
    loadHandler()
  }, [])

  return (
    <>
      <div className="guide__wrap">
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

      <div className="guide__wrap">
        <BaseInput
          onChange={textInputValue}
          value={inputValue}
          // placeholder="Test Text"
        />
        <BaseButton onClick={inputBlur}>입력하기</BaseButton>
      </div>

      <div id="map" style={{ width: "500px", height: "300px" }} />

      <p>버튼 1: {num}</p>
      <p>버튼 2: {num1}</p>
      <p>사용자 텍스트 : {fixedText}</p>
    </>
  )
}
