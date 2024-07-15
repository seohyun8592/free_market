import React from "react"
import { UseFormRegisterReturn } from "react-hook-form"

interface Props {
  id: string
  checked: boolean
  value?: string
  register?: UseFormRegisterReturn
  onChange: (id: any, e: any) => void
}

interface CheckBoxProps {
  id: string
  value: string
  checked: boolean
}

interface CheckBoxListProps {
  checkBoxItemList: CheckBoxProps[]
  onChange: (id: any, e: any) => void
  register?: UseFormRegisterReturn
}

export function BaseCheckbox({
  id,
  checked,
  onChange,
  value,
  register,
}: Props) {
  return (
    <div className="form__wrap">
      <input
        type="checkbox"
        id={id}
        className="check__inp"
        value={value}
        name={value}
        checked={checked}
        onChange={(e) => {
          onChange(id, e)
        }}
        {...register}
      />
      <label htmlFor={id} className="check__lab">
        <span className="check__box"> </span>
        <strong className="check__txt">{value}</strong>
      </label>
    </div>
  )
}

export function BaseCheckboxList({
  checkBoxItemList,
  onChange,
  register,
}: CheckBoxListProps) {
  return (
    <div className="inp__wrap">
      {checkBoxItemList.map((item) => (
        <BaseCheckbox
          key={item.id}
          id={item.id}
          value={item.value}
          checked={item.checked}
          onChange={onChange}
          {...register}
        />
      ))}
    </div>
  )
}
