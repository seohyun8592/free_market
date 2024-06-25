import login from "@/api/login"
import { useMutation } from "@tanstack/react-query"

interface LoginWebRequest {
  memberId: string
  password: string
}
export default function useLogin() {
  const useWebLogin = useMutation({
    mutationFn: async (payload: LoginWebRequest) => {
      const response = await login.postFetchLogin(payload)
      return response
    },
    onSuccess: (data) => {
      const accessToken = data.headers.get("Authorization")

      if (accessToken) {
        localStorage.setItem("accessToken", accessToken)
      }
    },
  })
  const useWebLogout = useMutation({
    mutationFn: async () => {
      await login.postFetchLogout()
    },
    onSuccess: () => {
      const accessToken = localStorage.getItem("accessToken")

      if (accessToken) {
        localStorage.removeItem("accessToken")
      }
    },
    onError: (error) => {
      console.log(error)
    },
  })

  return {
    useWebLogin,
    useWebLogout,
  }
}
