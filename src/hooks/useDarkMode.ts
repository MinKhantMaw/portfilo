import { useLayoutEffect, useState } from 'react';

function getInitialTheme() {
  if (typeof window === 'undefined') {
    return false;
  }

  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') return true;
  if (savedTheme === 'light') return false;

  return window.matchMedia('(prefers-color-scheme: dark)').matches;
}

export function useDarkMode() {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(getInitialTheme);

  useLayoutEffect(() => {
    const root = window.document.documentElement;
    root.classList.toggle('dark', isDarkMode);
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  const toggleDarkMode = () => setIsDarkMode((prevMode) => !prevMode);

  return { isDarkMode, toggleDarkMode };
}
