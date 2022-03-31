import React from 'react';
import Head from 'next/head';
import Header from '@components/Header/Header';
import Footer from '@components/Footer/Footer';
import LayoutProps from './LayoutPropTypes';

const Layout = ({ children }: LayoutProps) => (
  <>
    <Head>
      <title>Sal Tinajero For Mayor | Santa Ana, CA</title>
      <meta name="description" content="Sal Tinajero is running for Mayor of Santa Ana in 2022" />
      <link rel="icon" href="/favicon.png" />
    </Head>
    <Header />
    <main>{children}</main>
    <Footer />
  </>
);

export default Layout;
