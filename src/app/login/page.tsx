// import React from "react"
// import dynamic from "next/dynamic"
// const LoginForm = dynamic(() => import("@/components/layout/LoginForm"), {
//   ssr: false, // 이 설정이 CSR 컴포넌트로 만듭니다.
// })
// export default function LoginPage() {
//   return (
//     <section className="contents__wrap login">
//       <LoginForm />
//     </section>
//   )
// }
import React from "react"

import LoginForm from "@/components/layout/LoginForm"

export default function LoginPage() {
  return (
    <section className="contents__wrap login">
      <LoginForm />
    </section>
  )
}
