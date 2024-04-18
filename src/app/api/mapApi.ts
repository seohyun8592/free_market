import geoLocation from "@/app/api/geoLocationApi"

declare global {
  interface Window {
    kakao: any
  }
}

const kakaoMapScript = document.createElement("script")
kakaoMapScript.async = false
kakaoMapScript.src =
  "//dapi.kakao.com/v2/maps/sdk.js?appkey=7b8cd975153b8025942deb6c0a583773&autoload=false"
document.head.appendChild(kakaoMapScript)

function onLoadKakaoAPI() {
  window.kakao.maps.load(async () => {
    const location = await geoLocation()
    const container = document.getElementById("map")
    const options = {
      center: new window.kakao.maps.LatLng(location.x, location.y),
      level: 3,
    }
    const map = new window.kakao.maps.Map(container, options)
  })
}

export default function loadHandler() {
  kakaoMapScript.addEventListener("load", onLoadKakaoAPI)
}

/**
 * 위치 마킹
 * 지도 내 지역명 팝업
 * 도메인 추가
 */
