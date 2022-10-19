import React, { useState, useReducer, MouseEvent } from 'react';
import validateEmail from '@helpers/validateEmail';
import postKlaviyoContact from '@utils/services';
import { useAppContext } from '@components/Context/AppContext';
import HeroFormReducer from './HeroFormReducer';
import heroText from './HeroText';
import styles from './HeroForm.module.css';

const initialState = { fNameError: false, lNameError: false, emailError: false };

const HeroForm = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [showMessage, setShowMessage] = useState<boolean>(false);
  const [fName, setFName] = useState<string>('');
  const [lName, setLName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [formMessage, setFormMessage] = useState<string>('');
  const [state, dispatch] = useReducer(HeroFormReducer, initialState);
  const { language } = useAppContext();

  const handleResponse = (message: string) => {
    setFormMessage(message);
    setIsLoading(false);
    setShowMessage(true);
    setTimeout(() => {
      setShowMessage(false);
    }, 3000);
  };

  const handleSubmit = async (e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => {
    e.preventDefault();
    setIsLoading(true);
    if (fName && lName && validateEmail(email)) {
      const res = await postKlaviyoContact(email, fName, lName);
      if (res.status === 200) {
        handleResponse(heroText.successMessage[language]);
        setFName('');
        setLName('');
        setEmail('');
      } else {
        handleResponse(res.statusText);
      }
    }
  };

  return (
    <div
      className={`bg-black relative p-14 w-full max-w-[100%] lg:top-10 lg:right-10 xl:top-20 xl:right-20 xl:w-[598px] lg:rounded-md phones:py-7 phones:px-3.5 ${styles.container}`}
    >
      <div id="content">
        <div className="text-white text-[45px] font-bold text-center mb-3">
          <span className="inline-block border-y-4 border-st-yellow px-6">
            {heroText.title[language]}
          </span>
        </div>
        <div
          className={`text-st-yellow text-[32px] font-bold text-center mb-3 xl:text-[45px] ${styles.subTitle}`}
        >
          {heroText.subTitle[language]}
        </div>
        <form className="mx-auto md:w-[612px] lg:w-full">
          <div className="flex flex-row justify-between mb-2">
            <div className="w-6/12 pr-1">
              <input
                type="text"
                id="FirstName"
                name="FirstName"
                aria-label={heroText.firstName[language]}
                placeholder={heroText.firstName[language]}
                className={`w-full rounded-md ${
                  state.fNameError ? 'outline-red-600 border-red-600 placeholder:text-red-600' : ''
                }`}
                onChange={(e) => setFName(e.target.value)}
                onBlur={(e) => dispatch({ type: 'FNAME', value: e.target.value })}
                value={fName}
              />
            </div>
            <div className="w-6/12 pl-1">
              <input
                type="text"
                id="LastName"
                name="LastName"
                aria-label={heroText.lastName[language]}
                placeholder={heroText.lastName[language]}
                className={`w-full rounded-md ${
                  state.lNameError ? 'outline-red-600 border-red-600 placeholder:text-red-600' : ''
                }`}
                onChange={(e) => setLName(e.target.value)}
                onBlur={(e) => dispatch({ type: 'LNAME', value: e.target.value })}
                value={lName}
              />
            </div>
          </div>

          <div className="mb-2">
            <input
              type="email"
              id="Email"
              name="Email"
              aria-label={heroText.email[language]}
              placeholder={heroText.email[language]}
              className={`w-full rounded-md ${
                state.emailError
                  ? 'outline-red-600 border-red-600 placeholder:text-red-600 text-red-600'
                  : ''
              }`}
              onChange={(e) => setEmail(e.target.value)}
              onBlur={(e) => dispatch({ type: 'EMAIL', value: e.target.value })}
              value={email}
            />
          </div>
          <p className="text-white mb-6">{heroText.disclaimer[language]}</p>
          <div className="text-center">
            {isLoading || showMessage ? (
              <div
                id="success-message"
                className={
                  isLoading || showMessage
                    ? 'flex justify-center items-center h-12 text-white'
                    : 'hidden'
                }
              >
                {isLoading ? (
                  <div className={styles.dotElastic} />
                ) : (
                  <div className="text-[30px]">{formMessage}</div>
                )}
              </div>
            ) : (
              <button
                type="button"
                onClick={(e) => handleSubmit(e)}
                className="text-black bg-st-yellow px-6 py-3 rounded-md"
              >
                {heroText.submit[language]}
              </button>
            )}
          </div>
        </form>
      </div>
      {/* <div
        id="success-message"
        className={
          isLoading || showMessage
            ? 'flex items-center justify-center text-white absolute w-full h-full top-0 left-0'
            : 'hidden'
        }
      >
        {isLoading ? (
          <div className={styles.dotElastic} />
        ) : (
          <div className="text-[30px]">{formMessage}</div>
        )}
      </div> */}
    </div>
  );
};

export default HeroForm;
