import React from "react"

// import fetchAPI from "@/api/fetchCore"
// // import fetchAPI from "@/api/fetchCore"
// import Map from "@/components/Map"
// import BaseButton from "@/components/base/Button/Button"
// import BaseInput from "@/components/base/Form/Input"
// import BaseSelect from "@/components/base/Form/Select"
// import NUMBERLIST from "@/components/base/Form/selectItemList"

// export default function ComponentsGuide() {
//   // const [num, setNum] = useState(3)
//   // const [num1, setNum1] = useState(0)
//   // const [fixedText, setFixedText] = useState("")
//   // const [fixedSelect, setFixedSelect] = useState("")
//   const [apiTest, setApiTest] = useState(null)

//   // const addSelectValue = (value: string) => {
//   //   setFixedSelect(value)
//   // }
//   // const addInputValue = (value: string) => {
//   //   setFixedText(value)
//   // }
//   // const increamentCount = () => {
//   //   setNum((prev) => prev + 1)
//   // }

//   // const increamentCount1 = () => {
//   //   setNum1((prev) => prev + 1)
//   // }

//   // API TEST용
//   async function fetchTestData() {
//     try {
//       const result = await fetch("https://kubetest.devsj.site/test", {
//         method: "GET",
//       })
//       setApiTest(result)
//     } catch (error) {
//       console.error("Error fetching data:", error)
//     }
//   }

//   useEffect(() => {
//     fetchTestData()
//   }, [])

//   return (
//     <section className="contents__wrap">
//       <div className="guide__wrap">
//         {/* <BaseButton onClick={increamentCount}>버튼 1</BaseButton>
//         <BaseButton
//           buttonProps={{
//             theme: "SECONDARY",
//             size: "MEDIUM",
//             // disabled: true,
//           }}
//           onClick={increamentCount1}
//         >
//           버튼 2
//         </BaseButton>
//       </div>

//       <div className="guide__wrap">
//         <BaseInput value={addInputValue} placeholder="Test Text" />
//       </div>

//       <div className="guide__wrap">
//         <BaseSelect
//           itemList={NUMBERLIST}
//           addSelect={addSelectValue}
//           // onChange={textInputValue}
//           // value={inputValue}
//           // placeholder="Test Text"
//         />
//       </div>

//       <Map /> */}
//         {/* <p>버튼 1: {num}</p>
//       <p>버튼 2: {num1}</p>
//       <p>사용자 텍스트 : {fixedText}</p>
//       <p>선택 된 값 : {fixedSelect}</p> */}
//         <p>API test : {apiTest}</p>
//       </div>
//     </section>
//   )
// }

export default function Page() {
  return <>안녕</>
}
