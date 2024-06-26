import signup from "@/api/signup"
import { useMutation } from "@tanstack/react-query"

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

interface IdCheckRequest {
  memberId: string
}

interface SendEmailRequest {
  toEmail: string
}
interface VerificationNumRequest {
  email: string
  certNo: string
}

export default function useSignUp() {
  const useClientsSignUp = useMutation({
    mutationFn: (payload: SignUPRequest) => signup.postFetchSignUp(payload),
  })

  const useNickNameCheck = useMutation({
    mutationFn: (payload: NickNameRequest) => signup.postNickNameCheck(payload),
  })

  const useEmailVerification = useMutation({
    mutationFn: (payload: SendEmailRequest) =>
      signup.postEmailVerification(payload),
  })

  const useEmailVerificationNum = useMutation({
    mutationFn: (payload: VerificationNumRequest) =>
      signup.postEmailverificationNum(payload),
  })

  const useIdCheck = useMutation({
    mutationFn: (payload: IdCheckRequest) => signup.postIdCheck(payload),
  })

  return {
    useClientsSignUp,
    useNickNameCheck,
    useEmailVerification,
    useEmailVerificationNum,
    useIdCheck,
  }
}
