import React from "react"

import Link from "next/link"

const MENULIST = [
  { name: "메뉴 1", path: "/menu1" },
  { name: "메뉴 2", path: "/menu2" },
  { name: "메뉴 3", path: "/menu3" },
  { name: "componentsGuide", path: "/componentsGuide" },
]

export default function Nav() {
  return (
    <>
      <ul className="menuList__item">
        {MENULIST.map((list) => (
          <li key={`${list.name}}`}>
            <Link href={list.path}>{list.name}</Link>
          </li>
        ))}
      </ul>
      <ul className="menuList__item subMenu">
        <li>
          <Link href="/loginTest">로그인</Link>
        </li>
        <li>
          <Link href="/login1">로그인1</Link>
        </li>
        <li>
          <Link href="/join">회원가입</Link>
        </li>
      </ul>
    </>
  )
}
