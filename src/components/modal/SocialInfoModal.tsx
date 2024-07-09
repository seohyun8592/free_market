import React from "react"
import { UseFormHandleSubmit, UseFormRegister } from "react-hook-form"

import BaseButton from "../base/Button/Button"
import BaseInput from "../base/Form/Input"
import type { HookFormTypes } from "../layout/JoinForm"

interface PropTypes {
  handleSubmit: UseFormHandleSubmit<HookFormTypes>
  handleCheckNickName: () => void
  onClick: () => void
  onValid: (data: HookFormTypes) => void
  register: UseFormRegister<any>
  isFormValid: boolean
  value: string
}
export default function SocialInfoModal({
  handleSubmit,
  handleCheckNickName,
  onClick,
  onValid,
  register,
  isFormValid,
  value,
}: PropTypes) {
  return (
    <div className="pop__container">
      <div className="pop__wrap">
        <div className="join__wrap">
          <div className="contents__box">
            <form onSubmit={handleSubmit(onValid)}>
              <div className="form__box">
                {/* 이메일 */}
                <div className="form__container">
                  <BaseInput
                    id="email"
                    type="text"
                    name="email"
                    disabled
                    label="이메일"
                    value={value}
                  />
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
                    <BaseButton
                      type="button"
                      className="btn__primary"
                      onClick={handleCheckNickName}
                    >
                      별명 중복확인
                    </BaseButton>
                  </div>
                </div>
              </div>

              <BaseButton type="submit" disabled={!isFormValid}>
                가입하기
              </BaseButton>
            </form>
          </div>
        </div>
        <BaseButton className="btn__close btn__primary" onClick={onClick}>
          닫기
        </BaseButton>
      </div>
    </div>
  )
}
