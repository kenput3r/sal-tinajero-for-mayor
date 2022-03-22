import React, {
  useContext,
  createContext,
  useState,
  useMemo,
  useEffect,
  ReactElement,
  Dispatch,
  SetStateAction,
} from 'react';
import { useRouter } from 'next/router';
import { Title } from '@customTypes/navigation-link';

interface AppContextInterface {
  language: keyof Title;
  setLanguage: Dispatch<SetStateAction<keyof Title>> | any;
}

const AppContext = createContext<AppContextInterface>({
  language: 'english',
  setLanguage: () => {},
});

export const AppWrapper = ({ children }: { children: ReactElement }) => {
  const [language, setLanguage] = useState<keyof Title>('english');

  const memoizedState = useMemo(() => ({ language, setLanguage }), [language]);

  const router = useRouter();

  useEffect(() => {
    if (router.query.language && router.query.language === 'spanish') {
      setLanguage('spanish');
    }
  }, [router]);

  return <AppContext.Provider value={memoizedState}>{children}</AppContext.Provider>;
};

export function useAppContext() {
  return useContext(AppContext);
}
