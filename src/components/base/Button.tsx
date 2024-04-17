import React, { MouseEvent } from "react";
type Props = {
  increamentCount: (event: MouseEvent<HTMLButtonElement>) => void;
};

export default function BaseButton({ increamentCount }: Props) {
  return <button onClick={increamentCount}>버튼</button>;
}
