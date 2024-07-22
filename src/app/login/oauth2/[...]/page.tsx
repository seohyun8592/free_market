"use client"

import React, { useEffect } from "react"

import { useRouter, useSearchParams } from "next/navigation"

export default function Oauth2Page() {
  const params = useSearchParams()
  const router = useRouter()

  const code = params.get("code")
  useEffect(() => {
    router.push(`/signup?code=${code}`)
  }, [code, router])

  return <div>test</div>
}
