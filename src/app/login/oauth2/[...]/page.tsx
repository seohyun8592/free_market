"use client"

import React, { useEffect } from "react"

import { useRouter, useSearchParams } from "next/navigation"

export default function Oauth2Page() {
  const params = useSearchParams()
  const type = params.get("type")
  const router = useRouter()
  useEffect(() => {
    router.push(`/signup?type=${type}`)
  })
  return <div>test</div>
}
