"use client"

import React, { ChangeEvent } from "react"

// import BaseButton from "../Button/Button"

interface Props {
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
  // value: string
  value: string
  placeholder?: string
}

export default function BaseInput({
  onChange,
  value,
  placeholder = "텍스트를 입력해 주세요",
}: Props) {
  // const [inputValue, setInputValue] = useState("")

  // const textInputValue = (e: ChangeEvent<HTMLInputElement>) => {
  //   setInputValue(e.target.value)
  // }

  // const inputBlur = () => {
  //   value(inputValue)
  //   setInputValue("")
  // }

  return (
    <div className="form__wrap">
      <input placeholder={placeholder} value={value} onChange={onChange} />
      {/* <BaseButton onClick={inputBlur}>입력하기</BaseButton> */}
    </div>
  )
}
