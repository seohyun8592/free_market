"use client"

import React from "react"
import { useForm } from "react-hook-form"

import BaseButton from "@/components/base/Button/Button"
import BaseInput from "@/components/base/Form/Input"
import useLogin from "@/hooks/useLogin"
import { error } from "console"

interface HookFormTypes {
  memberId: string
  password: string
}
export default function LoginForm() {
  const { useWebLogin } = useLogin()
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<HookFormTypes>()
  const idCheck = watch("memberId")
  const regex = /^[a-z0-9]{7,11}$/

  const onValid = async (data: HookFormTypes) => {
    useWebLogin.mutate(data, {
      onSuccess: (response) => {
        const resData = response._data
        if (resData.statusCode === "200") {
          window.location.replace("/")
        } else {
          alert(resData.message)
          reset()
        }
      },
      onError: (error) => {
        console.log(error)
      },
    })
  }

  return (
    <>
      <div className="title__box">
        <h2 className="title">나플나플</h2>
      </div>
      <div className="contents__box">
        <form onSubmit={handleSubmit(onValid)}>
          <div className="form__container">
            <label htmlFor="id" className="input__title">
              아이디
            </label>
            <div className="form__wrap">
              <div className="input__box">
                <BaseInput
                  register={register("memberId", {
                    required: true,
                    maxLength: {
                      value: 11,
                      message: "일치하는 아이디가 없습니다.",
                    },
                    // validate: () =>
                    //   regex.test(idCheck) ||
                    //   "영문과 숫자를 조합해 7~11자리로 입력해주세요.",
                  })}
                  id="id"
                  type="text"
                  name="id"
                  placeholder="아이디를 입력해 주세요"
                />
              </div>
              <span className="input__error">
                {errors.memberId ? errors.memberId.message : ""}
              </span>
            </div>
          </div>
          <div className="form__container">
            <label htmlFor="password" className="input__title">
              비밀번호
            </label>
            <div className="form__wrap">
              <div className="input__box">
                <BaseInput
                  register={register("password", {
                    required: true,
                    maxLength: {
                      value: 16,
                      message: "비밀번호가 일치하지 않습니다.",
                    },
                  })}
                  id="password"
                  type="password"
                  name="password"
                  placeholder="비밀번호를 입력해 주세요"
                />
              </div>
              <span className="input__error">
                {errors.password ? errors.password.message : ""}
              </span>
            </div>
          </div>
          <div className="btn__wrap">
            <BaseButton type="submit" className="btn__submit">
              로그인
            </BaseButton>
          </div>
        </form>
      </div>
    </>
  )
}
