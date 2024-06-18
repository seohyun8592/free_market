"use client"

import React, { useEffect, useState } from "react"
import { useForm } from "react-hook-form"

import BaseButton from "@/components/base/Button/Button"
import BaseInput from "@/components/base/Form/Input"
import useLogin from "@/hooks/queries/login"
import { useRouter } from "next/navigation"

interface HookFormTypes {
  memberId: string
  password: string
}
export default function LoginForm() {
  const router = useRouter()
  const { useWebLogin } = useLogin()
  const [logined, setLogined] = useState(false)
  const {
    register,
    handleSubmit,
    watch,
    setError,
    formState: { errors },
  } = useForm<HookFormTypes>()
  const idCheck = watch("memberId")
  const regex = /^[a-z0-9]{7,11}$/

  const onValid = async (data: HookFormTypes) => {
    useWebLogin.mutate(data, {
      onSuccess: (response) => {
        if (response.ok) {
          router.push("/")
        } else {
          setError("root.serverError", {
            type: "serverError",
            message: response.statusText,
          })
        }
      },
      onError: (error) => {
        console.log(error)
      },
    })
  }

  useEffect(() => {
    const checkLogined = localStorage.getItem("accessToken")
    setLogined(!checkLogined)
  }, [])

  return logined ? (
    <>
      <h2 className="title">Free-Market</h2>
      <form onSubmit={handleSubmit(onValid)}>
        <div className="form__wrap">
          <label htmlFor="id" className="input__title">
            아이디
          </label>
          <div className="input__box">
            <BaseInput
              register={register("memberId", {
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
            {errors.memberId ? errors.memberId.message : ""}
          </span>
        </div>
        <div className="form__wrap">
          <label htmlFor="password" className="input__title">
            비밀번호
          </label>
          <div className="input__box">
            <BaseInput
              register={register("password", {
                required: true,
                maxLength: { value: 16, message: "Should not exceed 16" },
              })}
              id="password"
              type="password"
              name="password"
            />
          </div>

          <span className="input__error">
            {errors.password ? "필수 입력 항목입니다." : ""}
          </span>
        </div>

        <BaseButton type="submit">로그인</BaseButton>
      </form>
    </>
  ) : (
    <h2>로그인 되었음</h2>
  )
}
