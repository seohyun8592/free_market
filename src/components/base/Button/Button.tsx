"use client"

import React from "react"

import { ButtonProps } from "@/components/base/Button/ButtonTypes"
import {
  BUTTON_SIZE,
  BUTTON_THEME,
} from "@/components/base/Button/buttonConfig"
import classNames from "classnames"

export default function BaseButton({
  onClick = undefined,
  theme = "PRIMARY",
  size = "NONE",
  disabled = false,
  type = "button",
  children,
}: ButtonProps) {
  return (
    <button
      className={classNames(BUTTON_THEME[theme], BUTTON_SIZE[size])}
      onClick={onClick}
      disabled={disabled}
      type={type}
    >
      {children}
    </button>
  )
}
