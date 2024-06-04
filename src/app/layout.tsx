import React from "react"

// import { Inter } from "next/font/google";
import Header from "@/components/layout/header"
// const inter = Inter({ subsets: ["latin"] });
import type { Metadata } from "next"

import "../../public/assets/styles/style.scss"

export const metadata: Metadata = {
  title: { default: "Free-Market", template: "Free-Market | %s" },
  description:
    "집에 필요없는물건, 돈주고 팔기 어려운 물건, 당장 급하게 처분해야하는 물건 싹 다 나눠버리세요!",
}

// export const metadata: Metadata = {
//   title: { default: "서현 블로그", template: "서현 블로그 | %s" },
//   description: "프론트엔드 개발자 블로그",
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <div className="root">
          <Header />
          <main>
            <div className="container">{children}</div>
          </main>
          <footer>푸터 영역</footer>
        </div>
      </body>
    </html>
  )
}
