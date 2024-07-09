import { ButtonHTMLAttributes, MouseEvent } from "react"

import {
  BUTTON_SIZE,
  BUTTON_THEME,
} from "@/components/base/Button/buttonConfig"

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string

  theme?: keyof typeof BUTTON_THEME

  size?: keyof typeof BUTTON_SIZE

  disabled?: boolean
  type?: "submit" | "reset" | "button" | undefined
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void
  children?: React.ReactNode
}
