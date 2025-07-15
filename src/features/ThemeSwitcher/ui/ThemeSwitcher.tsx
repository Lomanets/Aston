import React from 'react';
import { useTheme } from '@shared/lib/theme/ThemeProvider';
import styles from './ThemeSwitcher.module.css';

export const ThemeSwitcher: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button 
      className={styles.switcher}
      onClick={toggleTheme}
    >
      {theme === 'light' ? '🌙' : '☀️'}
    </button>
  );
};