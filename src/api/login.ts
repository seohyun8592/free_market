import { postResFetch } from "./fetchCore"

interface LoginWebRequest {
  memberId: string
  password: string
}

const login = {
  postFetchLogin(payload: LoginWebRequest) {
    return postResFetch("/api/v1/account/login", {
      body: payload,
    })
  },
}

export default login
