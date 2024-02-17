import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from '../components/Layout';
import '../public/image-gallery.css';
import 'animate.css';
import { UIProvider } from '@yamada-ui/react';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <UIProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </UIProvider>
  );
}
