import React, { MouseEvent } from "react";
import {
  BUTTON_THEME,
  BUTTON_SIZE,
} from "@/components/base/Button/buttonConfig";
import { ButtonProps } from "@/components/base/Button/ButtonTypes";
import classNames from "classnames";

type Props = {
  increamentCount?: (event: MouseEvent<HTMLButtonElement>) => void;
  buttonProps?: ButtonProps;
  children?: React.ReactNode
};

export default function BaseButton({ increamentCount, buttonProps, children }: Props) {
  const {
    theme = "PRIMARY",
    size = "NONE",
    disabled = false,
  } = buttonProps || { theme: "PRIMARY", size: "NONE" };

  return (
    <button
      {...buttonProps}
      className={classNames(BUTTON_THEME[theme], BUTTON_SIZE[size])}
      onClick={increamentCount}
    >
      {children}
    </button>
  );
}
