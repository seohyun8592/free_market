type LatLng = {
  x: number
  y: number
}

// function geoLocation() {
//   navigator.geolocation.getCurrentPosition((position) => {
//     const { latitude, longitude } = position.coords
//     const latLng = {
//       x: latitude,
//       y: longitude,
//     }
//     return latLng
//   })
// }

export default async function geoLocation(): Promise<LatLng | undefined> {
  try {
    const position = await new Promise<GeolocationPosition>(
      (resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject)
      },
    )

    const { latitude, longitude } = position.coords
    return { x: latitude, y: longitude }
  } catch (error) {
    console.log("Error getting geolocation:", error)
    return undefined
  }
}

/**
 * 사용자 위치 정보 동의
 * 로그인 회원에 한해 사용자 위치 수집 (로그인/비로그인 구분 isLogined)
 */
