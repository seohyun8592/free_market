import { getFetch } from "./fetchCore"
import { Response } from "./types"

const OAuthCallback = async (code: string) => {
  try {
    const response = await getFetch<Response<any>>(
      `${window.location.origin}/login/oauth2/code/naver?code=${code}`,
    )

    // 응답 데이터를 콘솔에 출력하거나 다른 방식으로 처리
    console.log("Response:", response)

    // 필요시 리턴하거나 추가적인 로직을 수행
    return response
  } catch (error) {
    // 에러 핸들링
    console.error("Error fetching OAuth callback:", error)
    throw error
  }
}

export default OAuthCallback
