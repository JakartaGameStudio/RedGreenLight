import { useEffect, useState } from 'react';

export const useLocalThemeId = () => {
  const [localThemeId, setLocalThemeId] = useState<number | undefined>();

  useEffect(() => {
    setLocalThemeId(+localStorage.getItem('themeId') || 0);
  }, []);
  useEffect(() => {
    localStorage.setItem('themeId', localThemeId?.toString());
  }, [localThemeId]);

  return [localThemeId, setLocalThemeId] as const;
};
