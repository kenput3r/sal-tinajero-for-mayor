/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Dispatch, SetStateAction } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import {
  RiInstagramFill as Instagram,
  RiFacebookFill as Facebook,
  RiYoutubeFill as Youtube,
  RiTwitterFill as Twitter,
} from 'react-icons/ri';
import NavigationLink from '@customTypes/navigation-link';
import homeIcon from '@images/home-icon.svg';
import aboutIcon from '@images/about-icon.svg';
import announcementIcon from '@images/announcement.svg';
import { useAppContext } from '@components/Context/AppContext';
import navigationLinks from './NavigationLinks';

const icons: any = {
  homeIcon,
  aboutIcon,
  announcementIcon,
};

const NavigationDrawer = ({
  showDrawer,
  setShowDrawer,
}: {
  showDrawer: boolean;
  setShowDrawer: Dispatch<SetStateAction<boolean>>;
}) => {
  const { language } = useAppContext();
  const router = useRouter();

  const handleRouteChange = (route: string) => {
    router.push(route);
    setShowDrawer(false);
  };

  return (
    <nav
      className={`bg-st-yellow text-black flex flex-col h-screen fixed top-0 right-0 pt-28 z-[9] transition-transform ${
        showDrawer ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      <ul>
        {navigationLinks.map((navigationLink: NavigationLink) => {
          if (navigationLink.secondary) {
            if (!navigationLink.isExternal) {
              return (
                <li className="mb-3 d:ml-3 text-right" key={navigationLink.title[language]}>
                  <button type="button" onClick={() => handleRouteChange(navigationLink.path)}>
                    <div className="flex-1 flex justify-end items-center font-bold p-3 text-2xl">
                      <span className="mr-4">{navigationLink.title[language]}</span>
                      <Image
                        src={icons[navigationLink.iconName]}
                        alt={navigationLink.title[language]}
                        className="rounded-full"
                      />
                    </div>
                  </button>
                </li>
              );
            }
            return (
              <li className="mb-3 d:ml-3" key={navigationLink.title[language]}>
                <a
                  className="flex-1 flex justify-end items-center font-bold p-3 text-2xl"
                  href={navigationLink.path}
                >
                  <span className="mr-4">{navigationLink.title[language]}</span>
                  <Image
                    src={icons[navigationLink.iconName]}
                    alt={navigationLink.title[language]}
                    className="rounded-full"
                  />
                </a>
              </li>
            );
          }
          return null;
        })}
        <li className="flex justify-center text-black text-lg mb-3">
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
        </li>
      </ul>
    </nav>
  );
};

export default NavigationDrawer;
