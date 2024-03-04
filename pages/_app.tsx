import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from '../components/Layout';
import '../public/image-gallery.css';
import 'animate.css';
import { UIProvider } from '@yamada-ui/react';
import { Noto_Sans_JP } from "next/font/google";

const noto = Noto_Sans_JP({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <UIProvider>
      <main className={noto.className}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </main>
    </UIProvider>
  );
}
