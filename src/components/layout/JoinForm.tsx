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
  const [address, setAddress] = useState({
    address: "",
    sido: "",
    sigungu: "",
    bname2: "",
  }) // 주소

  const [phoneNum, setPhoneNum] = useState("")
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
    address.address,
    phoneNum,
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
        phone: phoneNum,
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

  const onChange = (e) => {
    setAddress((prev) => ({ ...prev, address: e.target.value }))
  }

  const onCompletePost = (data: any) => {
    setAddress({
      address: data.address,
      sido: data.sido,
      sigungu: data.sigungu,
      bname2: data.bname2,
    })
  }

  const handlePhoneChange = (e) => {
    let { value } = e.target
    value = value.replace(/[^0-9]/g, "") // 숫자가 아닌 문자는 제거
    if (value.length < 4) {
      setPhoneNum(value)
    } else if (value.length < 7) {
      setPhoneNum(`${value.slice(0, 3)}-${value.slice(3)}`)
    } else if (value.length < 11) {
      setPhoneNum(`${value.slice(0, 3)}-${value.slice(3, 6)}-${value.slice(6)}`)
    } else {
      setPhoneNum(
        `${value.slice(0, 3)}-${value.slice(3, 7)}-${value.slice(7, 11)}`,
      )
    }
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
      <div className="join__wrap">
        <div className="title__box">
          <h2 className="title">나플나플 회원가입</h2>
          <p className="title__desc">나누는 플레이스, 나누면 플러스</p>
        </div>
        <div className="title__box title__sub">
          <h2 className="title">SNS 간편 가입</h2>
          <p className="title__desc">
            필수항목이므로 반드시 입력해 주시기 바랍니다.
          </p>
        </div>
        <div className="join__social">
          <ul className="list__item">
            <li className="list__naver">
              <a href="#none">네이버</a>
            </li>
            <li className="list__kakao">
              <a href="#none">카카오</a>
            </li>
            <li className="list__google">
              <a href="#none">구글</a>
            </li>
          </ul>
        </div>
        <div className="contents__box">
          <form onSubmit={handleSubmit(onValid)}>
            <div className="form__box">
              {/* 아이디 */}
              <div className="form__container form__group">
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
                  label="아이디"
                />

                <div className="form__btn">
                  <BaseButton type="button" onClick={handleCheckId}>
                    아이디 중복확인
                  </BaseButton>
                </div>
                <span className="input__error">
                  {errors.memberId ? errors.memberId.message : ""}
                </span>
              </div>

              {/* 이메일 인증하기 */}
              <div className="form__container email">
                <BaseInput label="인증하기" />

                <div className="form__btn">
                  <BaseButton
                    className="btn__email"
                    type="button"
                    onClick={handleEmailPop}
                    disabled={isSendSuccess}
                  >
                    이메일 인증하기
                  </BaseButton>
                </div>
                <span className="input__error">
                  {errors.memberId ? errors.memberId.message : ""}
                </span>
              </div>

              {/* 비밀번호 */}
              <div className="form__container">
                <BaseInput
                  register={register("password", {
                    required: true,
                    maxLength: {
                      value: 16,
                      message: "Should not exceed 16",
                    },
                  })}
                  id="pw"
                  type="password"
                  name="pw"
                  placeholder="비밀번호를 입력해 주세요."
                  label="비밀번호"
                />
                <span className="input__error">
                  {errors.password ? "필수 입력 항목입니다." : ""}
                </span>
              </div>

              {/* 비밀번호 확인 */}
              <div className="form__container">
                <BaseInput
                  register={register("rePassword", {
                    validate: (value) =>
                      value === userInfo.password ||
                      "비밀번호가 일치하지 않습니다.",
                  })}
                  id="repw"
                  type="password"
                  name="repw"
                  placeholder="비밀번호를 한번 더 입력해 주세요."
                  label="비밀번호 확인"
                />
                <span className="input__error">
                  {userInfo.rePassword !== "" &&
                  userInfo.rePassword !== userInfo.password
                    ? "비밀번호가 일치 하지 않습니다."
                    : ""}
                </span>
              </div>

              {/* 이름 */}
              <div className="form__container">
                <BaseInput
                  register={register("name", {
                    required: true,
                  })}
                  id="name"
                  type="text"
                  name="name"
                  placeholder="이름을 입력해 주세요."
                  label="이름"
                />
                <span className="input__error">
                  {errors.name ? "필수 입력 항목입니다." : ""}
                </span>
              </div>

              {/* 휴대폰 번호 */}
              <div className="form__container">
                <BaseInput
                  //   register={register("phone", {})}
                  id="phone"
                  type="text"
                  name="phone"
                  value={phoneNum}
                  onChange={handlePhoneChange}
                  placeholder="휴대폰 번호를 입력해 주세요."
                  label="휴대폰 번호"
                />
              </div>

              <div className="form__container form__group">
                <BaseInput
                  id="address"
                  type="text"
                  name="address"
                  value={address.address}
                  onChange={onChange}
                  placeholder="주소를 입력해 주세요."
                  label="주소"
                />

                <div className="form__btn">
                  <BaseButton type="button" onClick={onChangeOpenPost}>
                    주소 찾기
                  </BaseButton>
                </div>
              </div>

              {/* 별명 */}
              <div className="form__container form__group">
                <BaseInput
                  register={register("nickname", {
                    maxLength: {
                      value: 8,
                      message: "Should not exceed 8",
                    },
                  })}
                  id="nickname"
                  type="text"
                  name="nickname"
                  placeholder="사용하실 별명을 입력해 주세요."
                  label="별명"
                />
                <div className="form__btn">
                  <BaseButton type="button" onClick={handleCheckNickName}>
                    별명 중복확인
                  </BaseButton>
                </div>
                <span className="input__error">
                  {errors.nickname ? "필수 입력 항목입니다." : ""}
                </span>
              </div>
            </div>

            <BaseButton
              type="submit"
              className="btn__submit"
              disabled={!isFormValid}
            >
              가입하기
            </BaseButton>
          </form>
        </div>

        {isOpenPost ? (
          <DaumPostcode
            style={postCodeStyle}
            autoClose
            onComplete={onCompletePost}
          />
        ) : null}
      </div>
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
    </>
  )
}
