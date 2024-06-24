import React from "react"

import Header from "@/components/layout/header"
import { AuthProvider } from "@/provider/AuthContext"
import type { Metadata } from "next"

import "../../public/assets/styles/style.scss"
import QueryProvider from "../provider/queryClientProvider"

export const metadata: Metadata = {
  title: { default: "Free-Market", template: "Free-Market | %s" },
  description:
    "집에 필요없는물건, 돈주고 팔기 어려운 물건, 당장 급하게 처분해야하는 물건 싹 다 나눠버리세요!",
}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <QueryProvider>
          <AuthProvider>
            <div className="root">
              <Header />
              <main>
                <div className="container">{children}</div>
              </main>
              <footer>푸터 영역</footer>
            </div>
          </AuthProvider>
        </QueryProvider>
      </body>
    </html>
  )
}
