/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Link from 'next/link';
import {
  RiInstagramFill as Instagram,
  RiFacebookFill as Facebook,
  RiYoutubeFill as Youtube,
  RiTwitterFill as Twitter,
} from 'react-icons/ri';

const Footer = () => (
  <footer className="flex flex-col-reverse justify-between items-center bg-black text-white px-3 py-6 d:p-6 d:flex-row">
    <div className="mb-3 d:mb-0">
      Paid for by Committee to Elect{' '}
      <Link href="/">
        <a className="text-st-yellow">Sal Tinajero for Mayor </a>
      </Link>
      2022 #1449567
    </div>

    <div className="flex text-st-yellow text-lg mb-3 d:mb-0">
      <a
        href="https://www.facebook.com/Sal-Tinajero-for-Mayor-110281714958516"
        target="_blank"
        rel="noreferrer"
        className="p-3 ml-3"
      >
        <Facebook />
      </a>
      <a
        href="https://www.instagram.com/saltinajeroformayor/"
        target="_blank"
        rel="noreferrer"
        className="p-3 ml-3"
      >
        <Instagram />
      </a>
      <a
        href="https://twitter.com/SalTinajeroSA"
        target="_blank"
        rel="noreferrer"
        className="p-3 ml-3"
      >
        <Twitter />
      </a>
      <a
        href="https://www.youtube.com/channel/UCoVRuFd19gztRfGSBnOAU9A"
        target="_blank"
        rel="noreferrer"
        className="p-3 ml-3 mr-3 d:mr-0"
      >
        <Youtube />
      </a>
    </div>
  </footer>
);

export default Footer;
