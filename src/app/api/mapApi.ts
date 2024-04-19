import geoLocation from "@/app/api/geoLocationApi"

declare global {
  interface Window {
    kakao: any
  }
}

const kakaoMapScript = document.createElement("script")
kakaoMapScript.async = false
kakaoMapScript.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_MAP_APP_KEY}&autoload=false`
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

    // const geocoder = new window.kakao.maps.services.Geocoder()
    // geocoder.addressSearch("현재 위치", (result, status) => {
    //   // 정상적으로 검색이 완료됐으면
    //   if (status === window.kakao.maps.services.Status.OK) {
    const coords = new window.kakao.maps.LatLng(location.x, location.y)

    //     // 결과값으로 받은 위치를 마커로 표시합니다
    const marker = new window.kakao.maps.Marker({
      map,
      position: coords,
    })
    const infowindow = new window.kakao.maps.InfoWindow({
      content: `<div class='test' style="width:150px;text-align:center;padding:6px 0;">hi</div>`,
    })
    infowindow.open(map, marker)

    map.setCenter(coords)
    //   }
    // })
  })
}

export function loadHandler() {
  kakaoMapScript.addEventListener("load", onLoadKakaoAPI)
}

/**
 * 위치 마킹
 * 지도 내 지역명 팝업
 * 도메인 추가
 */
