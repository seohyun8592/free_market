// import fetchAPI from "./fetchCore"

type Params = {
  memberId: string
  password: string
}
export default async function fetchTestData(params: Params) {
  // const payload = {
  //   memberId: "회원 아이디",
  //   password: "비밀번호",
  // }
  const res = await fetch("/account/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(params),
  })

  const data = await res.json()

  return data

  // const payload = {
  //   memberId: "회원 아이디",
  //   password: "비밀번호",
  // }
  // const result = await fetchAPI("/account/login", "POST", payload)

  // return result
}
