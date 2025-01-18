import React, { createContext, useState, useEffect } from 'react';

export const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || (systemPrefersDark ? 'dark' : 'light');
  });

  useEffect(() => {
    const root = document.documentElement;

    // Apply the theme to the root element
    root.setAttribute('data-theme', theme);

    // Save theme to localStorage
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    const handleSystemThemeChange = (e) => {
      if (!localStorage.getItem('theme')) {
        setTheme(e.matches ? 'dark' : 'light');
      }
    };

    const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    darkModeMediaQuery.addEventListener('change', handleSystemThemeChange);

    return () => darkModeMediaQuery.removeEventListener('change', handleSystemThemeChange);
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
