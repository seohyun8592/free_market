"use client"

import React, { MouseEventHandler } from "react"

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
  className,
}: ButtonProps) {
  const handleClick: MouseEventHandler<HTMLButtonElement> = (e) => {
    if (onClick) {
      onClick(e)
    }
  }
  return (
    <button
      className={classNames(className, BUTTON_THEME[theme], BUTTON_SIZE[size])}
      onClick={handleClick}
      disabled={disabled}
      type={type}
    >
      {children}
    </button>
  )
}
