import React, { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ThemeToggle() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={toggleTheme}
      style={{
        position: 'fixed',
        top: '2rem',
        right: '2rem',
        zIndex: 1000,
        background: 'var(--surface-glass)',
        border: '1px solid var(--surface-border)',
        borderRadius: '50%',
        width: '50px',
        height: '50px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        color: 'var(--text-primary)',
        boxShadow: 'var(--shadow-soft)',
        backdropFilter: 'blur(8px)'
      }}
    >
      {theme === 'light' ? <Moon size={24} /> : <Sun size={24} />}
    </motion.button>
  );
}
