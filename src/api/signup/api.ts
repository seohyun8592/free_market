import { postFetch } from "../fetchCore"
import { Response } from "../types"

interface SignUPRequest {
  memberId: string
  password: string
  name: string
  nickname: string
  email: string
}
interface SignUpResponse {
  memberId: string
  password: string
  name: string
  nickname: string
  email: string
}

const signup = {
  postFetchSignUp(payload: SignUPRequest) {
    return postFetch<Response<SignUpResponse>>("/api/v1/account/join", {
      body: payload,
    })
  },
}

export default signup
