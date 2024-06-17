import fetchAPI from "./fetchCore"

type Params = {
  memberId: string
  password: string
  name: string
  nickname: string
  email: string
}
export default async function Join(params: Params) {
  const result = await fetchAPI("/api/v1/account/join", "POST", params)

  return result
}
