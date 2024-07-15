"use client"

import React, { useEffect } from "react"

import { usePathname, useRouter } from "next/navigation"

export default function Oauth2Page() {
  const router = useRouter()
  const pathname = usePathname()
  const provider = pathname.split("/")[3] // "naver" 부분을 가져옴
  useEffect(() => {
    router.push(`/signup?type=${provider}`)
  }, [router, provider])
  return <div>로그인 제공자: {provider}</div>
}
