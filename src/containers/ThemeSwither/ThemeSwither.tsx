import { Switcher } from 'components/Switcher/Switcher';
import { useChangeColorScheme } from 'hooks/useChangeColorScheme';
import { useIdentify } from 'hooks/useIdentify';
import { useLocalThemeId } from 'hooks/useLocalThemeId';
import { memo, useEffect } from 'react';
import { userApi } from 'services/redux';
import { UserResponseKeys } from 'types/Api';
import { Themes } from 'types/Themes';

export function ThemeSwitherUnMemo() {
  const [userData] = useIdentify();
  const serverThemeId = userData ? userData[UserResponseKeys.themeId] : undefined;
  const [changeServerThemeId] = userApi.useChangeThemeIdMutation();
  const [localThemeId, setLocalThemeId] = useLocalThemeId();
  const changeColorScheme = useChangeColorScheme();
  const updateThemeId = (themeId: number) => {
    if (userData) {
      changeServerThemeId({ themeId });
    }

    setLocalThemeId(themeId);
  };

  useEffect(() => {
    changeColorScheme(localThemeId);
  }, [changeColorScheme, localThemeId]);

  useEffect(() => {
    if (serverThemeId !== undefined) {
      setLocalThemeId(serverThemeId);
    }
  }, [serverThemeId, setLocalThemeId]);

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

  return <Switcher activeId={localThemeId} items={items} />;
}

export const ThemeSwither = memo(ThemeSwitherUnMemo);
