"use client"

import React, { useEffect } from "react"

import OAuthCallback from "@/api/OAuthCallback"
import { useRouter, useSearchParams } from "next/navigation"

export default function Oauth2Page() {
  const params = useSearchParams()
  const type = params.get("code")
  const router = useRouter()
  useEffect(() => {
    OAuthCallback(type)
    router.push(`/signup?code=${type}`)
  })
  return <div>test</div>
}
