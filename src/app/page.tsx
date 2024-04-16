import type { Metadata } from 'next';
// import BaseButton from '../components/base/Button';
// import BaseSelect from '../components/base/Select';
// import BaseInput from '../components/base/Input';
import BaseInput from '@/components/base/Input';
import BaseSelect from '@/components/base/Select';
import BaseButton from '@/components/base/Button';
export const metadata: Metadata = {
  title: 'Free-Market',
  description: '프리마켓에 오신걸 환영합니다.',
  icons: {
    icon: '/assets/images/jjangu.jpg',
  },
};

export default function MainPage() {
  return (
    <section>
      <h1>리브 안녕??</h1>
      <BaseInput />
      <BaseSelect />
      <BaseButton />
    </section>
  );
}
