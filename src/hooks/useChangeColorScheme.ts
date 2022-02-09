import { useCallback } from 'react';
import { Themes } from 'types/Themes';

const lightStyles = document.querySelectorAll(
  'link[data-style=light]',
) as NodeListOf<HTMLLinkElement>;
const darkStyles = document.querySelectorAll(
  'link[data-style=dark]',
) as NodeListOf<HTMLLinkElement>;

export const useChangeColorScheme = () => {
  return useCallback((themeId: number) => {
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

    lightStyles.forEach((link: HTMLLinkElement) => {
      link.media = lightMedia;
    });

    darkStyles.forEach((link: HTMLLinkElement) => {
      link.media = darkMedia;
    });
  }, []);
};
