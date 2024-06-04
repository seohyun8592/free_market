"use client"

import React, { ChangeEvent, useState } from "react"

import BaseButton from "../Button/Button"

interface Props {
  // onChange: (event: ChangeEvent<HTMLInputElement>) => void
  // value: string
  addInput?: (value: string) => void
  placeholder?: string
}

export default function BaseInput({
  addInput,
  placeholder = "텍스트를 입력해 주세요",
}: Props) {
  const [inputValue, setInputValue] = useState("")

  const textInputValue = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
  }

  const inputBlur = () => {
    addInput(inputValue)
    setInputValue("")
  }

  return (
    <div className="form__wrap">
      <input
        placeholder={placeholder}
        onChange={textInputValue}
        value={inputValue}
      />
      {/* <BaseButton onClick={inputBlur}>입력하기</BaseButton> */}
    </div>
  )
}
