import { useEffect, useState } from "react"

import geoLocation from "@/app/api/geoLocationApi"
import { onLoadKakaoAPI } from "@/app/api/mapApi"

export default function Map() {
  const [isLoading, setIsLoading] = useState(true)
  const loadMap = async () => {
    const location = await geoLocation()

    onLoadKakaoAPI(location)
    setIsLoading(false)
  }
  useEffect(() => {
    loadMap()
  }, [])

  return (
    <div>
      {isLoading ? ( // 로딩 중이면 로딩중 UI를 보여줍니다.
        <p>지도를 불러오는 중입니다...</p>
      ) : (
        <div id="map" style={{ width: "500px", height: "300px" }}></div>
      )}
    </div>
  )
}
