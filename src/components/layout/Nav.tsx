"use client"

import React from "react"

import useLogin from "@/hooks/useLogin"
import useAuthContext from "@/provider/AuthContext"
import Link from "next/link"

const MENULIST = [
  { name: "물건구경", path: "/store" },
  { name: "커뮤니티", path: "/community" },
  { name: "공지사항", path: "/notice" },
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
    <div className="nav__wrap">
      <ul className="list__item">
        {MENULIST.map((list) => (
          <li key={`${list.name}}`}>
            <Link href={list.path}>{list.name}</Link>
          </li>
        ))}
      </ul>
      <ul className="list__item sub__menu">
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
    </div>
  )
}
