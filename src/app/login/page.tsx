// import React from "react"
// import LoginForm from "@/components/layout/LoginForm"
// export default function LoginPage() {
//   return (
//     <section className="contents__wrap login">
//       <LoginForm />
//     </section>
//   )
// }
import React, { Suspense, lazy } from "react"

const LoginForm = lazy(() => import("@/components/layout/LoginForm"))

export default function LoginPage() {
  return (
    <section className="contents__wrap login">
      <Suspense fallback={<div>Loading...</div>}>
        <LoginForm />
      </Suspense>
    </section>
  )
}
