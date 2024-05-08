import Link from "next/link"

export default function Header() {
  return (
    <header>
      <Link href="/" className="logo">
        Free-Market
      </Link>
    </header>
  )
}
