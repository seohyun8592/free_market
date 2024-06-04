import { fetchTestData } from "@/api/login"
import BaseButton from "@/components/base/Button/Button"
import BaseInput from "@/components/base/Form/Input"

export default async function Page() {
  const params = {
    memberId: "lanie",
    password: "1234",
  }
  const result = await fetchTestData(params)
  console.log("result111", result)
  return (
    <section className="contents__wrap login">
      <h2 className="title">Free-Market</h2>
      <div className="input__box">
        <BaseInput />
        <p className="login__desc">아이디를 입력해 주세요</p>
      </div>
      <div className="input__box">
        <BaseInput />
        <p className="login__desc">비밀번호를 입력해 주세요</p>
      </div>
      <BaseButton
        buttonProps={{
          theme: "PRIMARY",
          size: "LARGE",
        }}
      >
        로그인
      </BaseButton>
    </section>
  )
}
