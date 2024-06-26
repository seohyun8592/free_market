"use client"

import React, { ChangeEvent } from "react"
import { UseFormRegisterReturn } from "react-hook-form"

// import BaseButton from "../Button/Button"

interface Props {
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void
  // value: string
  type?: string
  placeholder?: string
  disabled?: boolean
  id?: string
  name?: string
  register?: UseFormRegisterReturn
  value?: string
}

export default function BaseInput({
  // onChange,
  type = "text",
  id,
  name,
  placeholder = "텍스트를 입력해 주세요",
  disabled,
  register,
  value,
}: Props) {
  return (
    <input
      placeholder={placeholder}
      type={type}
      id={id}
      name={name}
      disabled={disabled}
      value={value}
      {...register}
    />
  )
}
