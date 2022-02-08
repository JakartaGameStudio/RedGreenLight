import { useEffect, useState } from 'react';

export function useHostName() {
  const [hostName, setHostName] = useState<string>();

  useEffect(() => {
    const { hostname, protocol } = window.location;

    setHostName(`${protocol}//${hostname}`);
  }, []);

  return hostName;
}
