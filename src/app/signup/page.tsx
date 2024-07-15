"use client"

import React from "react"

import JoinForm from "@/components/layout/JoinForm"
import { useSearchParams } from "next/navigation"

export default function JoinPage() {
  const params = useSearchParams()
  console.log("params", params)

  return (
    <section className="contents__wrap contents__form">
      <JoinForm params={params} />
    </section>
  )
}
