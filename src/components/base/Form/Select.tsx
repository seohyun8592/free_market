"use client"

import React, { useState } from "react"

import classNames from "classnames"

type Item = {
  value: string
  text: string
}

interface BaseSelectProps {
  itemList: Item[]
  addSelect: (value: string) => void
}

export default function BaseSelect({ itemList, addSelect }: BaseSelectProps) {
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
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            // 키보드 이벤트 추가
            if (e.key === "Enter") {
              setIsOpen((prev) => !prev)
            }
          }}
        >
          {selectValue || "선택"}
        </div>
        <div className="select__option">
          <ul className="item__list">
            {itemList.map((item: Item) => (
              <li
                onClick={() => handleSelectValue(item)}
                key={item.value}
                role="menuitem" // 메뉴 항목 역할 추가
                tabIndex={0} // 키보드 포커스를 받을 수 있도록 tabindex 추가
                onKeyDown={(e) => {
                  // 키보드 이벤트 추가
                  if (e.key === "Enter") {
                    setIsOpen((prev) => !prev)
                  }
                }}
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
