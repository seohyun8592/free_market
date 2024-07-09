import React from "react"

import Link from "next/link"

import Nav from "./Nav"

export default function Header() {
  return (
    <header>
      <div className="container">
        <div className="logo__wrap">
          <Link href="/" className="logo">
            나플나플
          </Link>
        </div>
        <Nav />
      </div>
    </header>
  )
}
