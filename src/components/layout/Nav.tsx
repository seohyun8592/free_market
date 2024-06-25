"use client"

import React from "react"

import useLogin from "@/hooks/useLogin"
import useAuthContext from "@/provider/AuthContext"
import Link from "next/link"

const MENULIST = [
  { name: "메뉴 1", path: "/menu1" },
  { name: "메뉴 2", path: "/menu2" },
  { name: "메뉴 3", path: "/menu3" },
  { name: "componentsGuide", path: "/componentsGuide" },
]

export default function Nav() {
  const { accessToken } = useAuthContext()
  const { useWebLogout } = useLogin()

  const handleLogout = async () => {
    useWebLogout.mutate(null, {
      onSuccess: () => {
        window.location.replace("/")
      },
      onError: () => {
        console.log("@@")
      },
    })
  }

  // useEffect(() => {
  //   setAccessToken
  // }, [accessToken])

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
          {!accessToken ? (
            <Link href="/login">로그인</Link>
          ) : (
            accessToken && <button onClick={handleLogout}>로그아웃</button>
          )}
        </li>
        <li>
          <Link href="/signup">회원가입</Link>
        </li>
      </ul>
    </>
  )
}
