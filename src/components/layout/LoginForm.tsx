"use client"

import React, { useState } from "react"
import { useForm } from "react-hook-form"

import BaseButton from "@/components/base/Button/Button"
import BaseInput from "@/components/base/Form/Input"
import useLogin from "@/hooks/useLogin"
import Link from "next/link"

import { BaseCheckboxList } from "../base/Form/Checkbox"

interface HookFormTypes {
  memberId: string
  password: string
}

const checkListData = [
  {
    id: "loginStatus",
    value: "로그인 유지하기",
    checked: true,
  },
  {
    id: "idSave",
    value: "아이디 저장",
    checked: false,
  },
]
export default function LoginForm() {
  const { useWebLogin } = useLogin()
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<HookFormTypes>()
  const [checkListTest, setCheckListTest] = useState(checkListData)

  const handleSocialSingUp = (type: string) => {
    const externalLink = `https://freeapi.devsj.site/oauth2/authorization/${type}`
    window.open(externalLink, "externalPopup", "width=600,height=600")
  }

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

  const onChangeCheckBox = (id: string) => {
    const updatedCheckList = checkListTest.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          checked: !item.checked,
        }
      }
      return item
    })
    setCheckListTest(updatedCheckList)
  }

  return (
    <div className="login__wrap">
      <div className="title__box">
        <h2 className="title">나플나플</h2>
        <p className="title__desc">나플나플에 오신것을 환영해요</p>
      </div>
      <div className="contents__box">
        <form onSubmit={handleSubmit(onValid)}>
          <div className="form__box">
            <div className="form__container">
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
                label="아이디"
              />
              <span className="input__error">
                {errors.memberId ? errors.memberId.message : ""}
              </span>
            </div>
            <div className="form__container">
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
                label="비밀번호"
              />
              <span className="input__error">
                {errors.password ? errors.password.message : ""}
              </span>
            </div>
          </div>

          <BaseCheckboxList
            checkBoxItemList={checkListTest}
            onChange={onChangeCheckBox}
          />

          <BaseButton type="submit" className="btn__submit btn__primary">
            로그인
          </BaseButton>
        </form>
        <ul className="list__item login__root">
          <li>
            <a href="#none">아이디 찾기</a>
          </li>
          <li>
            <a href="#none">비밀번호 찾기</a>
          </li>
          <li>
            <Link href="/signup">회원가입</Link>
          </li>
        </ul>
      </div>

      <div className="social__wrap">
        <div className="title__box title__sub">
          <h2 className="title">SNS 간편 가입</h2>
          <p className="title__desc">SNS 계정으로 간편하게 가입할 수 있어요</p>
        </div>
        <ul className="list__item">
          <li className="list__naver">
            <BaseButton onClick={() => handleSocialSingUp("naver")} />
          </li>
          <li className="list__kakao">
            <BaseButton onClick={() => handleSocialSingUp("kakao")} />
          </li>
          <li className="list__google">
            <BaseButton onClick={() => handleSocialSingUp("google")} />
          </li>
        </ul>
      </div>
    </div>
  )
}
