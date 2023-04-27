import { createContext, useState } from 'react';

export const langContext = createContext('ua');
const LangContext = ({ children }) => {
  const [lang, setlLang] = useState('en');
  const toggleLang = () =>
    setlLang(prevLang => (prevLang === 'ua' ? 'en' : 'ua'));

  return (
    <langContext.Provider value={{ lang, toggleLang }}>
      {children}
    </langContext.Provider>
  );
};

export default LangContext;
