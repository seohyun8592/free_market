"use client"

import React, { useEffect } from "react"

// import kakaoLogin from "@/api/kakaoLogin"
import { redirect } from "next/navigation"

export interface Oauth2PageProps {
  params: {
    slug: string
  }
}

// interface SocialParams {
//   params: Oauth2PageProps
//   code: string
// }

export default function Oauth2Page({ params }: Oauth2PageProps) {
  // 인가코드
  const code = new URL(window.location.href).searchParams.get("code")
  console.log(new URL(window.location.href), "code", code)
  //   useEffect(() => {
  //     console.log("@@", code, params)
  //     if (code && params) {
  //       kakaoLogin({ code, slug: params.slug })

  //       console.log("@@", code, params)
  //     }
  //     // else {
  //     //   redirect(`/signup?type=${params.slug}`)
  //     // }
  //   }, [code, params])

  useEffect(() => {
    console.log("22")
    if (code) redirect(`/signup?type=${params.slug}`)
  }, [params, code])

  //   useEffect(() => {
  //     const handleLogin = async () => {
  //       const url = `${window.origin}/login/oauth2/code/${params.slug}?code=${code}`
  //       console.log("url", url)

  //       const response = await fetch(url)
  //       console.log("response", response)

  //       //   try {
  //       //     const response =  fetch(`/${params.slug}/?code=${code}`)

  //       //     // 상태 코드 확인
  //       //     if (!response.ok) {
  //       //       throw new Error(`HTTP error! status: ${response.status}`)
  //       //     }

  //       //     // JSON 응답인지 확인
  //       //     const contentType = response.headers.get("content-type")
  //       //     if (!contentType || !contentType.includes("application/json")) {
  //       //       throw new TypeError("Received content is not JSON")
  //       //     }

  //       //     const data = await response.json()
  //       //     console.log("Response Data:", data)

  //       //     // 로컬 스토리지에 토큰 저장 (예시)
  //       //     localStorage.setItem("token", data.token)

  //       //     // 로그인 성공 후 메인 페이지로 리다이렉트
  //       //     //   router.replace("/main");
  //       //   } catch (error) {
  //       //     console.error("Fetch error:", error)
  //       //     alert("로그인에 실패하였습니다.")
  //       //     //   router.replace("/login");
  //       //   }
  //     }

  //     handleLogin()
  //   }, [params, code])

  return <div>test</div>
}
