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
// import React from "react"
// import LoginForm from "@/components/layout/LoginForm"
// export default function LoginPage() {
//   return (
//     <section className="contents__wrap login">
//       <LoginForm />
//     </section>
//   )
// }
"use client"

import React, { useState } from "react"

import fetchTestData from "@/api/login"
import BaseButton from "@/components/base/Button/Button"
import BaseInput from "@/components/base/Form/Input"

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
// import React from "react"

// import LoginForm from "@/components/layout/LoginForm"

// export default function LoginPage() {
//   return (
//     <section className="contents__wrap login">
//       <LoginForm />
//     </section>
//   )
// }

export default function LoginForm() {
  const [userName, setUserName] = useState("")
  const [password, setPassword] = useState("")

  const handleUserNameChange = (e) => {
    setUserName(e.target.value)
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value)
  }
  const handleSubmit = async () => {
    const params = {
      memberId: userName,
      password,
    }
    try {
      await fetchTestData(params)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <>
      <h2 className="title">Free-Market</h2>
      <div className="input__box">
        <BaseInput
          onChange={handleUserNameChange}
          placeholder="아이디를 입력해 주세요"
          value={userName}
        />
        <p className="login__desc">아이디를 입력해 주세요</p>
      </div>
      <div className="input__box">
        <BaseInput
          onChange={handlePasswordChange}
          placeholder="비밀번호를 입력해 주세요"
          type="password"
          value={password}
        />
        <p className="login__desc">비밀번호를 입력해 주세요</p>
      </div>
      <BaseButton
        buttonProps={{
          theme: "PRIMARY",
          size: "LARGE",
        }}
        onClick={handleSubmit}
      >
        로그인
      </BaseButton>
    </>
  )
}
