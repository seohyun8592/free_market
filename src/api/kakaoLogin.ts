// import Oauth2PageProps from '../../app/login/oauth2/code'
// import { Oauth2PageProps } from "@/app/login/oauth2/code/[slug]/page"

interface SocialParams {
  slug: string
  code: string | null
}

const kakaoLogin = ({ code, slug }: SocialParams) => {
  fetch(`https//freeapi.devsj.site/login/oauth2/code/${slug}?code=${code}`)
    .then((res) => {
      console.log(res) // 토큰이 넘어올 것임
      return res.json()
    })
    .then((data) => {
      console.log(data) // 응답 데이터를 출력
      const SOCIAL_EMAIL = document.cookie
      localStorage.setItem("email", SOCIAL_EMAIL)
    })
    .catch((err) => {
      console.log("소셜로그인 에러", err)
    })
}
export default kakaoLogin
