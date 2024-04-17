"use client"

import React, { ChangeEvent } from "react"

interface Props {
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
  value: string
  placeholder?: string
}

export default function BaseInput({ onChange, value, placeholder }: Props) {
  return (
    <div className="form__wrap">
      <input
        placeholder={placeholder || "텍스트를 입력해 주세요"}
        onChange={onChange}
        value={value}
      />
    </div>
  )
}

BaseInput.defaultProps = {
  placeholder: undefined,
}
