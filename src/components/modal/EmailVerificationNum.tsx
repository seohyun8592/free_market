"use client"

import React from "react"
import { FieldErrors, UseFormRegister } from "react-hook-form"

import classNames from "classnames"

import BaseButton from "../base/Button/Button"
import BaseInput from "../base/Form/Input"

interface FormTypes {
  email: string
  verificationNum: string
}
interface PropTypes {
  register: UseFormRegister<any>
  isSuccess: boolean
  verufication: boolean
  isVerificationNum: boolean
  isSendSuccess: boolean
  errors: FieldErrors<FormTypes>
  onClick: () => void
  handleClickEmail: () => void
}

export default function EmailVerificationNum({
  register,
  isSuccess,
  verufication,
  isVerificationNum,
  isSendSuccess,
  errors,
  onClick,
  handleClickEmail,
}: PropTypes) {
  return (
    <div className="pop__container">
      <div className="pop__wrap">
        <div className="form__container">
          <label htmlFor="email" className="input__title">
            이메일
          </label>
          <div className="form__box">
            <div className="input__box">
              <BaseInput
                register={register("email", {})}
                id="email"
                type="text"
                name="email"
                placeholder="이메일을 입력해 주세요."
                disabled={isSuccess}
              />
            </div>
            <span className="input__error">
              {errors.email ? errors.email.message : ""}
              {verufication && "인증이 완료 되었습니다."}
            </span>
          </div>
        </div>

        {!isVerificationNum && (
          <div
            className={classNames(
              "form__container",
              !isSendSuccess && "disabled",
            )}
          >
            <label htmlFor="verificationNum" className="input__title">
              인증번호
            </label>
            <div className="form__box">
              <div className="input__box">
                <BaseInput
                  register={register("verificationNum", {
                    required: true,
                  })}
                  id="verificationNum"
                  type="text"
                  name="verificationNum"
                  placeholder="인증번호를 입력해 주세요."
                />
              </div>
              <span className="input__error">
                {errors.verificationNum ? "필수 입력 항목입니다." : ""}
              </span>
            </div>
          </div>
        )}

        {!isVerificationNum && (
          <BaseButton
            type="button"
            onClick={handleClickEmail}
            // disabled={!userInfo.sendEmail || !userInfo.verificationNum}
          >
            {isSendSuccess ? "인증하기" : "이메일 인증하기"}
          </BaseButton>
        )}
      </div>
      <BaseButton className="btn__close" onClick={onClick}>
        닫기
      </BaseButton>
    </div>
  )
}
