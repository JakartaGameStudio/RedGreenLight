import { useEffect, useState } from 'react';

export function useWindowLocation() {
  const [location, setLocation] = useState<Location>();

  useEffect(() => {
    setLocation(window.location);
  }, []);

  return location;
}
