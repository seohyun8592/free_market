import { useEffect, useState } from "react"

import geoLocation from "@/api/map/geoLocationApi"
import { loadHandler } from "@/api/map/mapApi"

export default function Map() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const loadMap = async () => {
      const location = await geoLocation()

      loadHandler(location)
      setIsLoading(false)
    }
    loadMap()
  }, [])

  return (
    <div>
      {isLoading && <p>지도를 불러오는 중입니다...!!</p>}

      <div id="map" style={{ width: "500px", height: "300px" }} />
    </div>
  )
}
