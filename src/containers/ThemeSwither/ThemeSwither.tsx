import { Switcher } from 'components/Switcher/Switcher';
import { useChangeColorScheme } from 'hooks/useChangeColorScheme';
import { useLocalThemeId } from 'hooks/useLocalThemeId';
// eslint-disable-next-line import/no-unresolved
import Cookies from 'js-cookie';
import { memo, useEffect } from 'react';
import { themesApi } from 'services/redux/api/themesApi';
import { Themes } from 'types/Themes';

export function ThemeSwitherUnMemo() {
  const isLoginIn = !!Cookies.get('access_token');
  const [updateServerTheme] = themesApi.useChangeMutation();
  const { data } = themesApi.useGetQuery();
  const serverThemeId = data;
  const [localThemeId, setLocalThemeId] = useLocalThemeId();
  const changeColorScheme = useChangeColorScheme();
  const updateThemeId = (themeId: number) => {
    if (isLoginIn) {
      updateServerTheme({ themeId });
    }

    setLocalThemeId(themeId.toString());
  };
  const themeId = isLoginIn ? serverThemeId : +localThemeId;

  useEffect(() => {
    changeColorScheme(themeId);
  }, [changeColorScheme, themeId]);

  const items = [
    {
      onClick: updateThemeId,
      text: 'Светлая',
      value: Themes.light,
    },
    {
      onClick: updateThemeId,
      text: 'Системная',
      value: Themes.default,
    },
    {
      onClick: updateThemeId,
      text: 'Темная',
      value: Themes.dark,
    },
  ];

  return <Switcher activeId={themeId} items={items} />;
}

export const ThemeSwither = memo(ThemeSwitherUnMemo);
