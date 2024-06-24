import { postFetch, postResFetch } from "./fetchCore"
import { Response } from "./types"

interface LoginWebRequest {
  memberId: string
  password: string
}

const login = {
  postFetchLogin(payload: LoginWebRequest) {
    return postResFetch<Response<any>>("/api/v1/account/login", {
      body: payload,
    })
  },
  postFetchLogout() {
    return postFetch<Response<any>>("/api/v1/logout", {})
  },
}

export default login
