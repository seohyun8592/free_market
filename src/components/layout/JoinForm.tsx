"use client"

import React from "react"
import { useForm } from "react-hook-form"

import Join from "@/api/join"
// import fetchTestData from "@/api/login"
// import BaseButton from "@/components/base/Button/Button"
import BaseInput from "@/components/base/Form/Input"

import BaseButton from "../base/Button/Button"

interface HookFormTypes {
  id: string
  pw: string
  repw: string
  name: string
  nickname: string
  email: string
  phone: string
}
export default function LoginForm() {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<HookFormTypes>()
  const password = watch("pw")

  const idCheck = watch("id")
  const regex = /^[a-z0-9]{7,11}$/

  const onValid = async (data: HookFormTypes) => {
    const params = {
      memberId: data.id,
      password: data.pw,
      name: data.name,
      nickname: data.nickname,
      email: data.email,
      phone: data.phone,
    }
    try {
      await Join(params)
    } catch (error) {
      console.log(error)
    }
    reset()
  }
  console.log(errors)
  return (
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
        <div className="form__wrap">
          <label htmlFor="repw" className="input__title">
            비밀번호 확인
          </label>
          <div className="input__box">
            <BaseInput
              register={register("repw", {
                required: true,
                validate: (value) =>
                  value === password || "비밀번호가 일치하지 않습니다.",
              })}
              id="repw"
              type="password"
              name="repw"
            />
          </div>
          <span className="input__error">
            {errors.repw ? "비밀번호가 일치 하지 않습니다." : ""}
          </span>
        </div>
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
        <div className="form__wrap">
          <label htmlFor="email" className="input__title">
            이메일
          </label>
          <div className="input__box">
            <BaseInput
              register={register("email", {
                required: true,
              })}
              id="email"
              type="email"
              name="email"
            />
          </div>
          <span className="input__error">
            {errors.email ? "필수 입력 항목입니다." : ""}
          </span>
        </div>
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
        <div className="form__wrap">
          <label htmlFor="phone" className="input__title">
            휴대폰 번호
          </label>
          <div className="input__box">
            <BaseInput
              register={register("phone", {
                required: true,
              })}
              id="phone"
              type="text"
              name="phone"
            />
          </div>
          <span className="input__error">
            {errors.phone ? "필수 입력 항목입니다." : ""}
          </span>
        </div>
        <BaseButton type="submit">가입하기</BaseButton>
      </form>
    </>
  )
}
