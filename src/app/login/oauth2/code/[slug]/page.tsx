"use client"

import React, { useEffect } from "react"

import kakaoLogin from "@/api/kakaoLogin"

// import { redirect } from "next/navigation"

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

  useEffect(() => {
    if (code && params) {
      kakaoLogin({ code, slug: params.slug })
    }
  }, [code, params])

  //     useEffect(() => {
  //     console.log("22")
  //     // redirect(`/signup?type=${params.slug}`)
  //   }, [params])
  return <div>test</div>
}
