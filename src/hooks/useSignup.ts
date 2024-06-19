import signup from "@/api/signup"
import { useMutation } from "@tanstack/react-query"

interface SignUPRequest {
  memberId: string
  password: string
  name: string
  nickname: string
  email: string
}

interface NickNameRequest {
  nickname: string
}

export default function useSignUp() {
  const useClientsSignUp = useMutation({
    mutationFn: (payload: SignUPRequest) => signup.postFetchSignUp(payload),
  })

  const useNickNameCheck = useMutation({
    mutationFn: (payload: NickNameRequest) => signup.postNickNameCheck(payload),
  })

  return { useClientsSignUp, useNickNameCheck }
}
