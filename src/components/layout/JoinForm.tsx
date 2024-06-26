"use client"

import React, { useState } from "react"
import DaumPostcode from "react-daum-postcode"
import { useForm } from "react-hook-form"

import BaseInput from "@/components/base/Form/Input"
import useSignUp from "@/hooks/useSignup"
import { useRouter } from "next/navigation"

import BaseButton from "../base/Button/Button"
import EmailVerificationNum from "../modal/EmailVerificationNum"

interface HookFormTypes {
  memberId: string
  password: string
  rePassword: string
  name: string
  nickname: string
  email: string
  phone: string
  verificationNum: string
  address: string
}

export default function JoinForm() {
  const router = useRouter()
  const {
    useClientsSignUp,
    useNickNameCheck,
    useEmailVerification,
    useEmailVerificationNum,
    useIdCheck,
  } = useSignUp()

  const [isSendSuccess, setIsSendSuccess] = useState(false)
  const [isVerificationNum, setIsVerificationNum] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [isOpenPost, setIsOpenPost] = useState(false)
  const [address, setAddress] = useState({ sido: "", sigungu: "", bname2: "" }) // 주소
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<HookFormTypes>()

  const regexId = /^[a-z0-9]{7,11}$/ // id 유효성 검사
  const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/ // 이메일 유효성 검사

  const userInfo = {
    password: watch("password"),
    rePassword: watch("rePassword"),
    idCheck: watch("memberId"),
    sendEmail: regexEmail.test(watch("email")) && watch("email"),
    nickNameCheck: watch("nickname"),
    verificationNum: watch("verificationNum"),
    name: watch("name"),
    phone: watch("phone"),
  }

  const requiredFields = [
    userInfo.idCheck,
    userInfo.password,
    userInfo.name,
    userInfo.nickNameCheck,
    userInfo.sendEmail,
    userInfo.phone,
  ]

  const isFormValid = requiredFields.every((field) => field)

  // 회원 가입하기 (유효성 검사)
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
        address1: address.sido,
        address2: address.sigungu,
        address3: address.bname2,
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

  // 닉네임 중복 체크
  const handleCheckNickName = () => {
    const data = {
      nickname: userInfo.nickNameCheck,
    }
    useNickNameCheck.mutate(data, {
      onSuccess: (response) => {
        const code = response.statusCode
        if (code === "200") {
          alert("사용 가능한 닉네임 입니다.")
        } else {
          alert(response.data.nickname)
        }
      },
    })
  }

  // 아이디 중복 체크
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
      },
    })
  }

  // 이메일 인증하기
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
            setIsOpen(false)
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

  const handleClose = () => {
    setIsOpen(false)
  }

  const handleEmailPop = () => {
    setIsOpen(true)
  }

  const onChangeOpenPost = () => {
    setIsOpenPost(!isOpenPost)
  }

  const onCompletePost = (data: any) => {
    console.log(data)
    setAddress({ sido: data.sido, sigungu: data.sigungu, bname2: data.bname2 })
  }

  const postCodeStyle = {
    display: "block",
    // position: 'absolute',
    top: "0%",
    width: "400px",
    height: "400px",
    padding: "7px",
  }

  return (
    <>
      <div className="title__box">
        <h2 className="title">나플나플</h2>
        <p className="title__desc">나누는 플레이스, 나누면 플러스</p>
      </div>
      <form onSubmit={handleSubmit(onValid)}>
        {/* 아이디 */}
        <div className="form__container">
          <label htmlFor="id" className="input__title">
            아이디
          </label>
          <div className="form__wrap">
            <div className="form__box">
              <div className="input__box">
                <BaseInput
                  register={register("memberId", {
                    required: true,
                    maxLength: {
                      value: 11,
                      message: "7~11자리로 입력해주세요.",
                    },
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
            </div>
            <div className="form__btn">
              <BaseButton type="button" onClick={handleCheckId}>
                아이디 중복 체크
              </BaseButton>
            </div>
          </div>
        </div>

        <BaseButton
          type="button"
          onClick={handleEmailPop}
          disabled={isSendSuccess}
        >
          이메일 인증하기
        </BaseButton>

        {/* 비밀번호 */}
        <div className="form__container">
          <label htmlFor="pw" className="input__title">
            비밀번호
          </label>
          <div className="form__box">
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
        </div>

        {/* 비밀번호 확인 */}
        <div className="form__container">
          <label htmlFor="repw" className="input__title">
            비밀번호 확인
          </label>
          <div className="form__box">
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
              {userInfo.rePassword !== "" &&
              userInfo.rePassword !== userInfo.password
                ? "비밀번호가 일치 하지 않습니다."
                : ""}
            </span>
          </div>
        </div>

        {/* 별명 */}
        <div className="form__container">
          <label htmlFor="nickname" className="input__title">
            별명
          </label>
          <div className="form__wrap">
            <div className="form__box">
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
            <div className="form__btn">
              <BaseButton type="button" onClick={handleCheckNickName}>
                별명 중복 체크
              </BaseButton>
            </div>
          </div>
        </div>

        {/* 이름 */}
        <div className="form__container">
          <label htmlFor="name" className="input__title">
            이름
          </label>
          <div className="form__box">
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
        </div>

        {/* 휴대폰 번호 */}
        <div className="form__container">
          <label htmlFor="phone" className="input__title">
            휴대폰 번호
          </label>
          <div className="form__box">
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
        </div>

        {/* 가입하기 버튼 */}
        <BaseButton type="submit" disabled={!isFormValid}>
          가입하기
        </BaseButton>
        <div className="form__container">
          <label htmlFor="address" className="input__title">
            주소
          </label>
          <div className="form__box">
            <div className="input__box">
              <BaseInput
                id="address"
                type="text"
                name="address"
                value={address.sido}
              />
            </div>
            <span className="input__error">
              {errors.address ? "필수 입력 항목입니다." : ""}
            </span>
          </div>

          <label htmlFor="address1" className="input__title">
            주소
          </label>
          <div className="form__box">
            <div className="input__box">
              <BaseInput
                id="address1"
                type="text"
                name="address"
                value={address.sigungu}
              />
            </div>
            <span className="input__error">
              {errors.address ? "필수 입력 항목입니다." : ""}
            </span>
          </div>

          <label htmlFor="address2" className="input__title">
            주소
          </label>
          <div className="form__box">
            <div className="input__box">
              <BaseInput
                id="address2"
                type="text"
                name="address"
                value={address.bname2}
              />
            </div>
            <span className="input__error">
              {errors.address ? "필수 입력 항목입니다." : ""}
            </span>
          </div>
        </div>
      </form>
      {isOpen && (
        <EmailVerificationNum
          register={register}
          isSuccess={isSendSuccess}
          verufication={isVerificationNum}
          isVerificationNum={isVerificationNum}
          isSendSuccess={isSendSuccess}
          errors={errors}
          onClick={handleClose}
          handleClickEmail={handleClickEmail}
        />
      )}

      <button onClick={onChangeOpenPost}>주소 찾기</button>

      {isOpenPost ? (
        <DaumPostcode
          style={postCodeStyle}
          autoClose
          onComplete={onCompletePost}
        />
      ) : null}
    </>
  )
}
