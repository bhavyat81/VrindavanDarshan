import React, { createContext, useContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('hi');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadLanguage();
  }, []);

  const loadLanguage = async () => {
    try {
      const saved = await AsyncStorage.getItem('language');
      if (saved) setLanguage(saved);
    } catch (e) {
      console.warn('Failed to load language:', e);
    } finally {
      setLoading(false);
    }
  };

  const toggleLanguage = async () => {
    const next = language === 'hi' ? 'en' : 'hi';
    setLanguage(next);
    try {
      await AsyncStorage.setItem('language', next);
    } catch (e) {
      console.warn('Failed to save language:', e);
    }
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, loading }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
