"use client"

import React, { useEffect, useState } from "react"

import { loadHandler } from "@/app/api/mapApi"

import BaseButton from "./base/Button/Button"
import BaseInput from "./base/Form/Input"
import BaseSelect from "./base/Form/Select"
import { NUMBER__LIST } from "./base/Form/selectItemList"

export default function ComponentsGuide() {
  const [num, setNum] = useState(1985)
  const [num1, setNum1] = useState(1991)
  const [fixedText, setFixedText] = useState("")
  const [fixedSelect, setFixedSelect] = useState("")

  const addSelectValue = (value: string) => {
    setFixedSelect(value)
  }
  const addInputValue = (value: string) => {
    setFixedText(value)
  }
  const increamentCount = () => {
    setNum((prev) => prev + 1)
    console.log("클릭")
  }

  const increamentCount1 = () => {
    setNum1((prev) => prev + 1)
    console.log("클릭")
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
        <BaseInput addInput={addInputValue} placeholder="Test Text" />
      </div>

      <div className="guide__wrap">
        <BaseSelect
          itemList={NUMBER__LIST}
          addSelect={addSelectValue}
          // onChange={textInputValue}
          // value={inputValue}
          // placeholder="Test Text"
        />
      </div>

      <div id="map" style={{ width: "500px", height: "300px" }}></div>

      <p>버튼 1: {num}</p>
      <p>버튼 2: {num1}</p>
      <p>사용자 텍스트 : {fixedText}</p>
      <p>선택 된 값 : {fixedSelect}</p>
    </>
  )
}
