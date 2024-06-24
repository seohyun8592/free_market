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
// interface SignUPRequest {
//   userDTO: {
//     memberId: string
//     password: string
//     name: string
//     nickname: string
//     phone: string
//     email: string
//   }
//   addressDTO: {
//     address1: string
//     address2: string
//     address3: string
//   }
// }

export default function LoginForm() {
  const router = useRouter()
  const {
    useClientsSignUp,
    useNickNameCheck,
    useEmailVerification,
    useEmailVerificationNum,
    useIdCheck,
  } = useSignUp()

  // const [user, setUser] = useState(null)
  // const [isErrorMessage, setIsErrorMessage] = useState(false)
  const [isSendSuccess, setIsSendSuccess] = useState(false)
  const [isVerificationNum, setIsVerificationNum] = useState(false)
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<HookFormTypes>()

  const regexId = /^[a-z0-9]{7,11}$/
  const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

  const userInfo = {
    password: watch("password"),
    idCheck: watch("memberId"),
    sendEmail: regexEmail.test(watch("email")) && watch("email"),
    nickNameCheck: watch("nickname"),
    verificationNum: watch("verificationNum"),
  }

  const onValid = (data: HookFormTypes) => {
    const reqData = {
      userDTO: {
        memberId: data.memberId,
        password: data.password,
        name: data.name,
        nickname: data.nickname,
        phone: data.phone,
        email: data.email,
      },
      addressDTO: {
        address1: "서울",
        address2: "송파구",
        address3: "잠실",
      },
    }
    useClientsSignUp.mutate(reqData, {
      onSuccess: (response) => {
        if (response.statusCode === "200") {
          router.push("/login")
        }
      },
    })
  }

  const handleCheckNickName = () => {
    const data = {
      nickname: userInfo.nickNameCheck,
    }
    useNickNameCheck.mutate(data, {
      onSuccess: (response) => {
        const code = response.statusCode
        // switch (code) {
        //   case "200":
        //     alert("사용 가능한 닉네임 입니다.")
        //     break
        //   case "500":
        //     alert(`${response.message}`)
        //     reset({ nickname: "" })
        //     break
        // }
        if (code === "200") {
          alert("사용 가능한 닉네임 입니다.")
        } else {
          alert(response.data.nickname)
        }
      },
    })
  }

  const handleCheckId = () => {
    const data = {
      memberId: userInfo.idCheck,
    }
    useIdCheck.mutate(data, {
      onSuccess: (response) => {
        const code = response.statusCode

        if (code === "200") {
          alert("사용 가능한 아이디 입니다.")
        } else {
          alert(response.data.memberId)
        }
        // switch (code) {
        //   case "200":
        //     alert("사용 가능한 아이디 입니다.")
        //     break
        //   case "500":
        //     alert(`${response.message}`)
        //     reset({ memberId: "" })
        //     break
        // }
      },
    })
  }

  const handleClickEmail = () => {
    const mailData = {
      toEmail: userInfo.sendEmail,
    }

    const verificationNum = {
      email: userInfo.sendEmail,
      certNo: userInfo.verificationNum,
    }

    if (isSendSuccess) {
      useEmailVerificationNum.mutate(verificationNum, {
        onSuccess: (response) => {
          if (response.statusCode === "200") {
            setIsVerificationNum(true)
          }
        },
      })
    } else {
      useEmailVerification.mutate(mailData, {
        onSuccess: (response) => {
          if (response.statusCode === "200") {
            setIsSendSuccess(true)
          }
        },
      })
    }
  }
  return (
    <>
      <div className="title__box">
        <h2 className="title">블라블라</h2>
        <p className="title__desc">
          뭐든지 나눠드려요!! 갖고 싶은거 골라봐요!!
        </p>
      </div>
      <form onSubmit={handleSubmit(onValid)}>
        {/* 아이디 */}
        <div className="form__wrap">
          <label htmlFor="id" className="input__title">
            아이디
          </label>
          <div className="form__box">
            <div className="input__box">
              <BaseInput
                register={register("memberId", {
                  required: true,
                  maxLength: { value: 11, message: "7~11자리로 입력해주세요." },
                  validate: () =>
                    regexId.test(userInfo.idCheck) ||
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
            <div className="form__btn">
              <BaseButton type="button" onClick={handleCheckId}>
                아이디 중복 체크
              </BaseButton>
            </div>
          </div>
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
              disabled={isSendSuccess}
            />
          </div>
          <span className="input__error">
            {errors.email ? errors.email.message : ""}
            {isVerificationNum && "인증이 완료 되었습니다."}
          </span>
        </div>

        {/* 인증번호 입력 */}
        {!isVerificationNum && (
          <div
            className={classNames("form__wrap", !isSendSuccess && "disabled")}
          >
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
        )}
        {!isVerificationNum && (
          <BaseButton
            type="button"
            onClick={handleClickEmail}
            disabled={!userInfo.sendEmail}
          >
            {isSendSuccess ? "인증하기" : "이메일 인증하기"}
          </BaseButton>
        )}

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
                  value === userInfo.password ||
                  "비밀번호가 일치하지 않습니다.",
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
