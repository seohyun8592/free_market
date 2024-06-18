import { postFetch } from "../fetchCore"

interface LoginWebRequest {
  memberId: string
  password: string
}

const login = {
  async postFetchLogin(payload: LoginWebRequest) {
    const response = await postFetch("/api/v1/account/login", {
      body: payload,
    })
    return response
  },
}

export default login
