"use client"

import React, { useEffect, useState } from "react"
import { useForm } from "react-hook-form"

import login from "@/api/login"
import BaseButton from "@/components/base/Button/Button"
import BaseInput from "@/components/base/Form/Input"
import { useRouter } from "next/navigation"

interface HookFormTypes {
  id: string
  pw: string
}
export default function LoginForm() {
  const router = useRouter()
  const [checkUser, setcheckUser] = useState(false)
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<HookFormTypes>()
  const idCheck = watch("id")
  const regex = /^[a-z0-9]{7,11}$/

  const onValid = async (data: HookFormTypes) => {
    const params = {
      memberId: data.id,
      password: data.pw,
    }

    try {
      const res = await login(params)

      if (res.message === "ok") {
        localStorage.setItem(
          "userInfo",
          JSON.stringify({ id: data.id, pw: data.pw }),
        )
        router.push("/")
      } else {
        alert("아이디 또는 패스워드를 확인해 주세요")
      }
    } catch (error) {
      console.log(error)
    }
    reset()
  }

  useEffect(() => {
    const logined = localStorage.getItem("userInfo")
    console.log(logined, checkUser)
    setcheckUser(!logined)
  }, [])

  return checkUser ? (
    <>
      <h2 className="title">Free-Market</h2>
      <form onSubmit={handleSubmit(onValid)}>
        <div className="form__wrap">
          <label htmlFor="id" className="input__title">
            아이디
          </label>
          <div className="input__box">
            <BaseInput
              register={register("id", {
                required: true,
                maxLength: { value: 11, message: "7~11자리로 입력해주세요." },
                validate: () =>
                  regex.test(idCheck) ||
                  "영문과 숫자를 조합해 7~11자리로 입력해주세요.",
              })}
              id="id"
              type="text"
              name="id"
              placeholder="영문 숫자 조합 7~11자리"
            />
          </div>
          <span className="input__error">
            {errors.id ? errors.id.message : ""}
          </span>
        </div>
        <div className="form__wrap">
          <label htmlFor="pw" className="input__title">
            비밀번호
          </label>
          <div className="input__box">
            <BaseInput
              register={register("pw", {
                required: true,
                maxLength: { value: 16, message: "Should not exceed 16" },
              })}
              id="pw"
              type="password"
              name="pw"
            />
          </div>

          <span className="input__error">
            {errors.pw ? "필수 입력 항목입니다." : ""}
          </span>
        </div>

        <BaseButton type="submit">로그인</BaseButton>
      </form>
    </>
  ) : (
    <h2>로그인 되었음</h2>
  )
}
