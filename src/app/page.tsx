import type { Metadata } from "next";
import BaseInput from "@/components/base/Input";
import BaseSelect from "@/components/base/Select";
import BaseButton from "@/components/base/Button";
import Count from "@/components/Count";
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
      <BaseInput />
      <BaseSelect />
      <Count />
    </section>
  );
}
