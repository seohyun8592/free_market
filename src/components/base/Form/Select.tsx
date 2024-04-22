"use client"

import React, { useState } from "react"

import classNames from "classnames"

type Item = {
  value: string
  text: string
}


export default function BaseSelect({ itemList, addSelect }) {
  const [isOpen, setIsOpen] = useState(false)
  const [selectValue, setSelectValue] = useState("")
  const handleSelectOption = () => {
    setIsOpen((prev) => !prev)
  }

  const handleSelectValue = (item: Item) => {
    setSelectValue(item.text)
    setIsOpen(false)
    addSelect(item.text)
  }

  return (
    <div className="form__wrap">
      <div className="select__box">
        <div
          className={classNames("select__head", isOpen && "open")}
          onClick={handleSelectOption}
        >
          {selectValue ? selectValue : "선택"}
        </div>
        <div className="select__option">
          <ul className="item__list">
            {itemList.map((item: Item, index: number) => (
              <li
                onClick={() => handleSelectValue(item)}
                key={`${item.value}__${index}`}
              >
                {item.text}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
