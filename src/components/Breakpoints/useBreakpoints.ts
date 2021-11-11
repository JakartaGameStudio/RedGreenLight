import { useEffect, useState } from 'react';

import points from './Breakpoints.module.scss';

export function useBreakpoints() {
  const [current, setCurrent] = useState([]);

  function filter(mediaList) {
    return mediaList.filter(({ media }) => media.matches).map(({ name }) => name);
  }

  useEffect(() => {
    const mediaList = Object.entries(points).map(([name, screen]) => {
      const media = window.matchMedia(`(min-width: ${screen})`);

      media.onchange = () => setCurrent(filter(mediaList));

      return { name, media };
    });

    setCurrent(filter(mediaList));

    return function () {
      mediaList.forEach(({ media }) => (media.onchange = null));
    };
  }, []);

  return current;
}
