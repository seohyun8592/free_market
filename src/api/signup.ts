import { postFetch } from "./fetchCore"
import { Response } from "./types"

interface SignUPRequest {
  userDTO: {
    memberId: string
    password: string
    name: string
    nickname: string
    phone: string
    email: string
  }
  addressDTO: {
    address1: string
    address2: string
    address3: string
  }
}

interface NickNameRequest {
  nickname: string
}

interface SendEmailRequest {
  toEmail: string
}

interface VerificationNumRequest {
  email: string
  certNo: string
}

interface IdCheckRequest {
  memberId: string
}

const signup = {
  postFetchSignUp(payload: SignUPRequest) {
    return postFetch<Response<any>>("/api/v1/account/join", {
      body: payload,
    })
  },

  postNickNameCheck(payload: NickNameRequest) {
    return postFetch<Response<any>>("/api/v1/account/check-nickname", {
      body: payload,
    })
  },

  postEmailVerification(payload: SendEmailRequest) {
    return postFetch<Response<any>>("/api/v1/mail/send", {
      body: payload,
    })
  },

  postEmailverificationNum(payload: VerificationNumRequest) {
    return postFetch<Response<any>>("/api/v1/mail/valid-cert-num", {
      body: payload,
    })
  },

  postIdCheck(payload: IdCheckRequest) {
    return postFetch<Response<any>>("/api/v1/account/check-id", {
      body: payload,
    })
  },
}

export default signup
