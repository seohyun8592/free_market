"use client"

import React, { useEffect } from "react"

// import { redirect } from "next/navigation"

interface Oauth2PageProps {
  params: {
    slug: string
  }
}

export default function Oauth2Page({ params }: Oauth2PageProps) {
  useEffect(() => {
    console.log("22")
    // redirect(`/signup?type=${params.slug}`)
  }, [params])
  return <div>test</div>
}
