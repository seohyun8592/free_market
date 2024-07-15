"use client"

import React, { useEffect } from "react"

import { useRouter } from "next/navigation"

export default function Oauth2Page() {
  // const params = useSearchParams()
  // const type = params.get("code")
  const router = useRouter()
  useEffect(() => {
    router.push("/signup")
  }, [router])
  return <div>test</div>
}
