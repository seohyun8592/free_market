import React from "react"

import dynamic from "next/dynamic"

export default function LoginPage() {
  const LoginForm = dynamic(() => import("@/components/layout/LoginForm"), {
    ssr: false, // 이 설정이 CSR 컴포넌트로 만듭니다.
  })
  return (
    <section className="contents__wrap login">
      <LoginForm />
    </section>
  )
}
// import React, { Suspense, lazy } from "react"

// const LoginForm = lazy(() => import("@/components/layout/LoginForm"))

// export default function LoginPage() {
//   return (
//     <section className="contents__wrap login">
//       <Suspense fallback={<div>Loading...</div>}>
//         <LoginForm />
//       </Suspense>
//     </section>
//   )
// }
