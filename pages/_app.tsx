import React from 'react';
import Layout from '@components/Layout/Layout';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { AppWrapper } from '@components/Context/AppContext';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <AppWrapper>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </AppWrapper>
);

export default MyApp;
