import signup from "@/api/signup/api"
import { useMutation } from "@tanstack/react-query"

interface SignUPRequest {
  memberId: string
  password: string
  name: string
  nickname: string
  email: string
}
// export default async function Join(params: Params) {
//   const result = await fetchAPI("/api/v1/account/join", "POST", params)

//   return result
// }

export default function useSignUp() {
  const useClientsSignUp = useMutation({
    mutationFn: (payload: SignUPRequest) => signup.postFetchSignUp(payload),
  })

  return { useClientsSignUp }
}
