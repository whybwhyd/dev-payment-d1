import '@/styles/globals.css';
import { Inter as FontSans } from 'next/font/google';
import type { AppProps } from 'next/app';
import { cn } from '@/lib/utils';
import { RecoilEnv, RecoilRoot } from 'recoil';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useState } from 'react';

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
});

export default function App({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient());
  // recoil 중복키 값 오류 방지하기 위한 코드
  RecoilEnv.RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED = false;
  return (
    <RecoilRoot>
      <div className={cn('min-h-screen font-sans antialiased', fontSans.variable)}>
        <QueryClientProvider client={queryClient}>
          <Component {...pageProps} />
        </QueryClientProvider>
      </div>
    </RecoilRoot>
  );
}
