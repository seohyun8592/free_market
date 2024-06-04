import fetchAPI from "./fetchCore"

export async function fetchTestData(params: {}) {
  //   const res = await fetch("https://freeapi.devsj.site/account/login", {
  //     method: "POST",
  //     body: JSON.stringify(params),
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   })
  //   const data = await res.json()
  //   console.log("result", data)

  //   return data

  const result = await fetchAPI("/account/login", { params })
  return result
}
