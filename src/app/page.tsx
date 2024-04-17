import type { Metadata } from "next";
import BaseInput from "@/components/base/Form/Input";
import BaseSelect from "@/components/base/Form/Select";
import BaseButton from "@/components/base/Button/Button";
import ButtonGuide from "@/components/ButtonGuide";
export const metadata: Metadata = {
  title: "Free-Market",
  description: "프리마켓에 오신걸 환영합니다.",
  icons: {
    icon: "/assets/images/jjangu.jpg",
  },
};

export default function MainPage() {
  return (
    <section>
      {/* <BaseInput />
      <BaseSelect /> */}
      <ButtonGuide />
    </section>
  );
}
