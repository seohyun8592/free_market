import Link from "next/link"
import React from "react"

export default function Header() {
  return (
    <header>
      <Link href="/" className="logo">
        Free-Market
      </Link>
    </header>
  )
}
