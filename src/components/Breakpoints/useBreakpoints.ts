import { useEffect, useState } from 'react';

import points from './Breakpoints.module.scss';

export function useBreakpoints() {
  const [current, setCurrent] = useState([]);

  function filter(mediaList) {
    return mediaList.reduce((result, { name, media }) => {
      if (media.matches) {
        return [...result, name];
      }
      return result;
    }, []);
  }

  useEffect(() => {
    const mediaList = Object.entries(points).map(([name, screen]) => {
      const media = window.matchMedia(`(min-width: ${screen})`);
      media.onchange = () => setCurrent(filter(mediaList));
      return { name, media };
    });
    setCurrent(filter(mediaList));
  }, []);

  return [current];
}
