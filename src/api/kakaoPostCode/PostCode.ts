declare global {
  interface Window {
    daum: any
  }
}

interface IAddr {
  address: string
  zonecode: string
}

function onLoadKakaoPostCode() {
  new window.daum.Postcode({
    oncomplete: (data: IAddr) => {
      return data
    },
  }).open()
}

export default function loadHandler() {
  const kakaoPostCode = document.createElement("script")
  kakaoPostCode.async = false
  kakaoPostCode.src =
    "//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js"
  document.head.appendChild(kakaoPostCode)

  kakaoPostCode.addEventListener("load", () => {
    onLoadKakaoPostCode()
  })
}
