import React, { MouseEvent } from "react"

import { ButtonProps } from "@/components/base/Button/ButtonTypes"
import {
  BUTTON_SIZE,
  BUTTON_THEME,
} from "@/components/base/Button/buttonConfig"
import classNames from "classnames"

type Props = {
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void
  buttonProps?: ButtonProps
  children?: React.ReactNode
}

export default function BaseButton({
  onClick = undefined,
  buttonProps = {},
  children,
}: Props) {
  const {
    theme = "PRIMARY",
    size = "NONE",
    disabled = false,
  } = buttonProps || { theme: "PRIMARY", size: "NONE" }


  return (
    <button
      {...buttonProps}
      type="button"
      className={classNames(BUTTON_THEME[theme], BUTTON_SIZE[size])}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  )
}

BaseButton.defaultProps = {
  onClick: undefined,
  buttonProps: {},
  children: {},
}
