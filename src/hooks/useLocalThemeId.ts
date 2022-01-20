import { useEffect, useState } from 'react';

export const useLocalThemeId = () => {
  const [localThemeId, setLocalThemeId] = useState(localStorage.getItem('themeId') || '0');

  useEffect(() => {
    localStorage.setItem('themeId', localThemeId);
  }, [localThemeId]);

  return [localThemeId, setLocalThemeId] as const;
};
