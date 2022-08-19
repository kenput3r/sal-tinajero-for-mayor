/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import logo from '@images/sal-tinajero-for-mayor-dark-theme.svg';
import NavigationLink, { Title } from '@customTypes/navigation-link';
import { useAppContext } from '@components/Context/AppContext';
import navigationLinks from './NavigationLinks';
import NavigationDrawer from './NavigationDrawer';
import styles from './Header.module.css';

const Header = () => {
  const [showDrawer, setShowDrawer] = useState<boolean>(false);
  const { language, setLanguage } = useAppContext();
  const [toggleText, setToggleText] = useState<keyof Title>(
    language === 'english' ? 'spanish' : 'english',
  );

  const toggleLanguage = () => {
    const newToggleText = language;
    setLanguage(toggleText);
    setToggleText(newToggleText);
  };
  return (
    <>
      <header className="bg-black flex flex-row items-center justify-between fixed top-0 w-full p-3 text-white z-20">
        <div>
          <Image
            src={logo}
            alt="Sal Tinajero For Mayor"
            width={150}
            height={51.81}
            loading="eager"
          />
        </div>
        <nav>
          <ul className="flex flex-row items-center">
            {navigationLinks.map((navigationLink: NavigationLink) => {
              if (navigationLink.primary) {
                if (!navigationLink.isExternal) {
                  return (
                    <li className="d:ml-3" key={navigationLink.title[language]}>
                      <Link href={navigationLink.path}>
                        <a className={`block p-3 ${navigationLink.classes}`}>
                          {navigationLink.title[language]}
                        </a>
                      </Link>
                    </li>
                  );
                }
                return (
                  <li className="d:ml-3" key={navigationLink.title[language]}>
                    <a className={`block p-3 ${navigationLink.classes}`} href={navigationLink.path}>
                      {navigationLink.title[language]}
                    </a>
                  </li>
                );
              }
              return null;
            })}
            <li className="d:ml-3">
              <button type="button" onClick={toggleLanguage} className="block capitalize mr-3 p-3">
                {toggleText}
              </button>
            </li>
            <li className="hidden ml-3 mr-3 md:block">
              <a
                className="bg-st-yellow text-black rounded-[5px] block p-2"
                href="https://www.efundraisingconnections.com/c/SalTinajeroforMayor/"
                target="_blank"
                rel="noreferrer"
              >
                {language === 'english' ? 'Donate' : 'Donación'}
              </a>
            </li>
            <li className="flex items-center ml-1.5 d:ml-3">
              <button
                type="button"
                className={`${styles.burger} ${showDrawer ? styles.open : ''}`}
                onClick={() => setShowDrawer(!showDrawer)}
              >
                <div />
                <div />
                <div />
              </button>
            </li>
          </ul>
        </nav>
      </header>
      <NavigationDrawer showDrawer={showDrawer} setShowDrawer={setShowDrawer} />
    </>
  );
};

export default Header;
