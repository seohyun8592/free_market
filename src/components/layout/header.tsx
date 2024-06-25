import React from "react"

import Link from "next/link"

import Nav from "./Nav"

export default function Header() {
  return (
    <header>
      <div className="container">
        <Link href="/" className="logo">
          나플나플
        </Link>
        <Nav />
      </div>
    </header>
  )
}
