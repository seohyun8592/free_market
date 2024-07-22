"use client"

import React, { useEffect } from "react"

import { useRouter, useSearchParams } from "next/navigation"

export default function Oauth2Page() {
  const params = useSearchParams()
  const router = useRouter()

  useEffect(() => {
    const code = params.get("code")

    router.push(`/signup?code=${code}`)
  }, [params, router])

  return <div>test</div>
}
