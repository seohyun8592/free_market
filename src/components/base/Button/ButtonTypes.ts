import {
  BUTTON_THEME,
  BUTTON_SIZE,
} from '@/components/base/Button/buttonConfig'
import { ButtonHTMLAttributes } from 'react'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * 추가 적용할 class 명
   */
  className?: string
  /**
   * 버튼 테마
   */
  theme?: keyof typeof BUTTON_THEME
  /**
   * 버튼 크기
   */
  size?: keyof typeof BUTTON_SIZE
  /**
   * 버튼 크기
   */
  disabled?: boolean
}
