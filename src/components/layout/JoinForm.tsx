"use client"

import React, { useState } from "react"
import { useForm } from "react-hook-form"

import BaseInput from "@/components/base/Form/Input"
import useSignUp from "@/hooks/useSignup"
import classNames from "classnames"
import { useRouter } from "next/navigation"

import BaseButton from "../base/Button/Button"

interface HookFormTypes {
  memberId: string
  password: string
  rePassword?: string
  name: string
  nickname: string
  email: string
  phone?: string
  verificationNum: string
}

export default function LoginForm() {
  const router = useRouter()
  const { useClientsSignUp, useNickNameCheck, useEmailVerification } =
    useSignUp()

  const [isSendSuccess, setisSendSuccess] = useState(false)
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<HookFormTypes>()
  const password = watch("password")

  const idCheck = watch("memberId")

  const regex = /^[a-z0-9]{7,11}$/

  const onValid = (data: HookFormTypes) => {
    useClientsSignUp.mutate(data, {
      onSuccess: (response) => {
        if (response.statusCode === "200") {
          router.push("/")
        }
      },
    })
  }

  const handleCheckNickName = () => {
    const nickNameCheck = watch("nickname")
    const data = {
      nickname: nickNameCheck,
    }
    useNickNameCheck.mutate(data, {
      onSuccess: (response) => {
        if (response.data) {
          alert("사용 가능한 닉네임 입니다.")
        }
      },
    })
  }

  const handleClickEmail = () => {
    const sendEmail = watch("email")
    const data = {
      toEmail: sendEmail,
    }

    useEmailVerification.mutate(data, {
      onSuccess: (response) => {
        if (response.statusCode === "200") {
          setisSendSuccess(true)
        }
      },
    })

    console.log(data)
  }
  return (
    <>
      <h2 className="title">Free-Market</h2>
      <form onSubmit={handleSubmit(onValid)}>
        {/* 아이디 */}
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

        {/* 이메일 */}
        <div className="form__wrap">
          <label htmlFor="email" className="input__title">
            이메일
          </label>
          <div className="input__box">
            <BaseInput
              register={register("email", {})}
              id="email"
              type="text"
              name="email"
              placeholder="이메일을 입력해 주세요."
            />
          </div>
          <span className="input__error">
            {errors.email ? errors.email.message : ""}
          </span>
        </div>

        {/* 인증번호 입력 */}
        <div className={classNames("form__wrap", !isSendSuccess && "disabled")}>
          <label htmlFor="verificationNum" className="input__title">
            인증번호
          </label>
          <div className="input__box">
            <BaseInput
              register={register("verificationNum", {})}
              id="verificationNum"
              type="text"
              name="verificationNum"
              placeholder="인증번호를 입력해 주세요."
            />
          </div>
          <span className="input__error">
            {errors.verificationNum ? errors.verificationNum.message : ""}
          </span>
        </div>
        <BaseButton type="button" onClick={handleClickEmail}>
          {isSendSuccess ? "인증하기" : "이메일 인증하기"}
        </BaseButton>

        {/* 비밀번호 */}
        <div className="form__wrap">
          <label htmlFor="pw" className="input__title">
            비밀번호
          </label>
          <div className="input__box">
            <BaseInput
              register={register("password", {
                required: true,
                maxLength: { value: 16, message: "Should not exceed 16" },
              })}
              id="pw"
              type="password"
              name="pw"
            />
          </div>
          <span className="input__error">
            {errors.password ? "필수 입력 항목입니다." : ""}
          </span>
        </div>

        {/* 비밀번호 확인 */}
        <div className="form__wrap">
          <label htmlFor="repw" className="input__title">
            비밀번호 확인
          </label>
          <div className="input__box">
            <BaseInput
              register={register("rePassword", {
                validate: (value) =>
                  value === password || "비밀번호가 일치하지 않습니다.",
              })}
              id="repw"
              type="password"
              name="repw"
            />
          </div>
          <span className="input__error">
            {errors.rePassword ? "비밀번호가 일치 하지 않습니다." : ""}
          </span>
        </div>

        {/* 별명 */}
        <div className="form__wrap">
          <label htmlFor="nickname" className="input__title">
            별명
          </label>
          <div className="input__box">
            <BaseInput
              register={register("nickname", {
                maxLength: { value: 8, message: "Should not exceed 8" },
              })}
              id="nickname"
              type="text"
              name="nickname"
            />
          </div>
          <span className="input__error">
            {errors.nickname ? "필수 입력 항목입니다." : ""}
          </span>
        </div>
        <BaseButton type="button" onClick={handleCheckNickName}>
          중복 확인
        </BaseButton>

        {/* 이름 */}
        <div className="form__wrap">
          <label htmlFor="name" className="input__title">
            이름
          </label>
          <div className="input__box">
            <BaseInput
              register={register("name", {
                required: true,
              })}
              id="name"
              type="text"
              name="name"
            />
          </div>
          <span className="input__error">
            {errors.name ? "필수 입력 항목입니다." : ""}
          </span>
        </div>

        {/* 휴대폰 번호 */}
        <div className="form__wrap">
          <label htmlFor="phone" className="input__title">
            휴대폰 번호
          </label>
          <div className="input__box">
            <BaseInput
              register={register("phone", {})}
              id="phone"
              type="text"
              name="phone"
            />
          </div>
          <span className="input__error">
            {errors.phone ? "필수 입력 항목입니다." : ""}
          </span>
        </div>

        {/* 가입하기 버튼 */}
        <BaseButton type="submit">가입하기</BaseButton>
      </form>
    </>
  )
}
