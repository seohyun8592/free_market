import fetchAPI from "./fetchCore"

type Params = {
  memberId: string
  password: string
}
export default async function login(params: Params) {
  const result = await fetchAPI("/api/v1/account/login", "POST", params)
  return result
}
