import { useMemo, useState } from 'react';

export function useLocalSettings() {
  const [notifications, setNotifications] = useState(true);
  const [autoScan, setAutoScan] = useState(true);
  const [darkMode, setDarkMode] = useState(true);
  const [scanFrequency, setScanFrequency] = useState('10 min');

  return useMemo(
    () => ({
      notifications,
      setNotifications,
      autoScan,
      setAutoScan,
      darkMode,
      setDarkMode,
      scanFrequency,
      setScanFrequency,
    }),
    [notifications, autoScan, darkMode, scanFrequency],
  );
}
