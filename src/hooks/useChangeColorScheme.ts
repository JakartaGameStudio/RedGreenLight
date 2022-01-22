import { useCallback, useMemo } from 'react';
import { Themes } from 'types/Themes';

export const useChangeColorScheme = () => {
  const lightStyles = useMemo(
    () => document.querySelectorAll('link[data-style=light]') as NodeListOf<HTMLLinkElement>,
    [],
  );
  const darkStyles = useMemo(
    () => document.querySelectorAll('link[data-style=dark]') as NodeListOf<HTMLLinkElement>,
    [],
  );

  return useCallback(
    (themeId: number) => {
      if (themeId === undefined) {
        return;
      }

      let lightMedia = '';
      let darkMedia = '';

      if (themeId === Themes.default) {
        lightMedia = '(prefers-color-scheme: light)';
        darkMedia = '(prefers-color-scheme: dark)';
      } else {
        lightMedia = themeId === Themes.light ? 'all' : 'not all';
        darkMedia = themeId === Themes.dark ? 'all' : 'not all';
      }

      lightStyles.forEach((link) => {
        link.media = lightMedia;
      });

      darkStyles.forEach((link: HTMLLinkElement) => {
        link.media = darkMedia;
      });
    },
    [darkStyles, lightStyles],
  );
};
