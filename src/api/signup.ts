import { postFetch } from "./fetchCore"
import { Response } from "./types"

interface SignUPRequest {
  memberId: string
  password: string
  name: string
  nickname: string
  email: string
}

interface SignUpResponse {
  data: object
  message: string
  statusCode: string
}

interface NickNameRequest {
  nickname: string
}

const signup = {
  postFetchSignUp(payload: SignUPRequest) {
    return postFetch<Response<SignUpResponse>>("/api/v1/account/join", {
      body: payload,
    })
  },

  postNickNameCheck(payload: NickNameRequest) {
    return postFetch<Response<any>>("/api/v1/account/check-nickname", {
      body: payload,
    })
  },
}

export default signup
