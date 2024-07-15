"use client"

import { useEffect } from "react"

import { useRouter } from "next/router"

const OAuthCallback = () => {
  const router = useRouter()
  const { query } = router

  useEffect(() => {
    // 인증이 성공한 경우, 쿠키 또는 토큰이 쿼리 파라미터에 포함되어 있을 수 있습니다.
    if (query.response_type) {
      document.cookie = `oauth_token=${query.response_type}; path=/`
      router.push("/") // 원래 페이지로 돌아갑니다.
    }
  }, [query, router])
}

export default OAuthCallback
