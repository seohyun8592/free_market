"use client"

import React, {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react"

// AuthContext의 타입을 정의합니다.
interface AuthContextType {
  accessToken: string | null
  setAccessToken: React.Dispatch<React.SetStateAction<string | null>>
}

// 기본 값을 설정하여 AuthContext를 생성합니다.
const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [accessToken, setAccessToken] = useState<string | null>(null)

  useEffect(() => {
    const token = localStorage.getItem("accessToken")
    if (token) {
      setAccessToken(token)
    }
  }, [])

  const value = useMemo(() => ({ accessToken, setAccessToken }), [accessToken])

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export default function useAuthContext() {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error("useAuthContext must be used within an AuthProvider")
  }
  return context
}
