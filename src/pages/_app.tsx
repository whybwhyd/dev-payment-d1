import '@/styles/globals.css';
import { Inter as FontSans } from 'next/font/google';
import type { AppProps } from 'next/app';
import { cn } from '@/lib/utils';
import { RecoilEnv, RecoilRoot } from 'recoil';

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
});

export default function App({ Component, pageProps }: AppProps) {
  // recoil 중복키 값 오류 방지하기 위한 코드
  RecoilEnv.RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED = false;
  return (
    <RecoilRoot>
      <div className={cn('min-h-screen font-sans antialiased', fontSans.variable)}>
        <Component {...pageProps} />
      </div>
    </RecoilRoot>
  );
}
