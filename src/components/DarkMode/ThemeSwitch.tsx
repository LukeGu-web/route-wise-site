'use client';
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { Switch } from '@nextui-org/react';
import { FaSun, FaMoon } from 'react-icons/fa';

export default function ThemeSwitch() {
  const [mounted, setMounted] = useState(false);

  const { theme, setTheme } = useTheme();
  const [isLight, setIsLight] = useState(theme === 'light');
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const handleChange = (value: boolean) => {
    setIsLight(value);
    setTheme(isLight ? 'dark' : 'light');
  };
  return (
    <Switch
      className='capitalize'
      isSelected={isLight}
      size='lg'
      color='warning'
      startContent={<FaSun color='#fff' />}
      endContent={<FaMoon />}
      onValueChange={handleChange}
    />
  );
}
