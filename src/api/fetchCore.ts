/**
 * Fetch-Core
 * api host https://freeapi.devsj.site
 */
import { METHOD } from "@/api/types"
import "next/error"
import { $fetch } from "ofetch"
import type { FetchOptions } from "ofetch"

const fetchCoreConfig = (method: METHOD): FetchOptions<"json"> => {
  const userAuth = localStorage.getItem("accessToken")

  /**
   * 여기에다 환경변수를 지정하여 $fetch에 대해 기본 옵션을 정의한다.
   */
  return {
    method,
    headers: userAuth ? { Authorization: userAuth } : {},
    timeout: 30000,

    onResponseError: (ctx) => {
      if (ctx.response.status === 401) {
        console.log("@@")
        // localStorage.removeItem("accessToken")
        // window.location.replace("/")
      }
    },
  }
}

export const getFetch = <Res>(
  url: string,
  options: FetchOptions<"json"> = {},
) => {
  const config = fetchCoreConfig(METHOD.GET)
  return $fetch<Res>(url, { ...options, ...config })
}

// header data
export const postResFetch = <Res>(
  url: string,
  options: FetchOptions<"json"> = {},
) => {
  const config = fetchCoreConfig(METHOD.POST)
  return $fetch.raw<Res>(url, { ...options, ...config })
}

// response data
export const postFetch = <Res>(
  url: string,
  options: FetchOptions<"json"> = {},
) => {
  const config = fetchCoreConfig(METHOD.POST)
  return $fetch<Res>(url, { ...options, ...config })
}

export const putFetch = <Res>(
  url: string,
  options: FetchOptions<"json"> = {},
) => {
  const config = fetchCoreConfig(METHOD.PUT)
  return $fetch<Res>(url, { ...options, ...config })
}

export const deleteFetch = <Res>(
  url: string,
  options: FetchOptions<"json"> = {},
) => {
  const config = fetchCoreConfig(METHOD.DELETE)
  return $fetch<Res>(url, { ...options, ...config })
}

export const patchFetch = <Res>(
  url: string,
  options: FetchOptions<"json"> = {},
) => {
  const config = fetchCoreConfig(METHOD.PATCH)
  return $fetch<Res>(url, { ...options, ...config })
}
