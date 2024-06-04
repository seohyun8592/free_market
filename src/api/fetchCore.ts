// const BASE_URL =
//   process.env.NEXT_PUBLIC_BASE_URL || "https://kubetest.devsj.site" // 실제 API의 baseURL

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL // Proxy설정 때문에 BASE_URL 로컬로 설정해둠 추후 수정할 예정

interface FetchOptions extends RequestInit {
  params?: Record<string, string>
}

export default async function fetchAPI(
  endpoint: string,
  options: FetchOptions = {},
) {
  const url = `${BASE_URL}/${endpoint}`
  const headers = {
    "Content-Type": "application/json",
    // 필요한 경우 추가 헤더를 설정 가능ßß
  }

  const response = await fetch(url, {
    ...options,
    headers: {
      ...headers,
      ...options.headers,
    },
  })

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`)
  }

  // 현재 서버에서 JSON 형식이 아닌 TEXT형식으로 넘겨주고 았어 추가한 로직
  // 처음부터 세팅하려니까 왜이렇게 어렵죠??? 시니어 한 분 계셨으면 좋겠어요...
  const contentType = response.headers.get("content-type")
  if (contentType && contentType.includes("application/json")) {
    return response.json()
  }
  return response.text()
}
