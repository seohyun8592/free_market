"use client"

import React from "react"

import LoginForm from "@/components/layout/LoginForm"

// import { useSearchParams } from "next/navigation"

export default function Login() {
  // const params = useSearchParams()
  return (
    <section className="contents__wrap contents__form">
      <LoginForm />
    </section>
  )
}
