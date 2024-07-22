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

      //   const SOCIAL_EMAIL = document.cookie

      //   localStorage.setItem("email", SOCIAL_EMAIL) //예시로 로컬에 저장함

      //   history.replace("/main") // 토큰 받았았고 로그인됐으니 화면 전환시켜줌(메인으로)
    })
    .then((data) => {
      console.log(data) // 응답 데이터를 출력
    })
    .catch((err) => {
      console.log("소셜로그인 에러", err)
      //   window.alert("로그인에 실패하였습니다.");
      //   history.replace("/login"); // 로그인 실패하면 로그인화면으로 돌려보냄
    })
}
export default kakaoLogin
