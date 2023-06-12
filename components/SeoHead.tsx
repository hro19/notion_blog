import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

export type MetaTypes = {
  title?: string;
  titleTemplate?: string;
  description?: string;
};

const SeoHead = ({ title, titleTemplate, description }: MetaTypes) => {
  const router = useRouter();
  const siteUrl = 'https://notion-blog-ecru-gamma.vercel.app';
  const Url = `${siteUrl}${router.asPath}`;
  const siteTitle = `${title} - ${titleTemplate}`;
  return (
    <Head>
      <meta name='viewport' content={'width=device-width, initial-scale=1'} />
      <title>{siteTitle}</title>
      <link href={Url} rel='canonical' />
      <meta name='twitter:card' content={'summary_large_image'} />
      <meta property='og:image' content={`${siteUrl}/ogimage.jpg`} />
      <meta property='og:title' content={siteTitle} />
      <meta property='og:url' content={Url} />
      <meta name='description' content={description} />
      <meta property='og:description' content={description} />
      <meta property='og:type' content='website' />
      <link rel='icon' type='image/svg+xml' href={'/samplelogo.svg'} />
    </Head>
  );
};

export default SeoHead;
