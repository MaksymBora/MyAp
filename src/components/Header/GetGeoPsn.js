import { useState, useEffect } from 'react';

export function usePosition() {
  const [position, setPosition] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        currentPosition => {
          const { latitude, longitude } = currentPosition.coords;
          setPosition({ latitude, longitude });
        },
        geolocationError => {
          setError(geolocationError);
        }
      );
    } else {
      setError(new Error('Geolocation is not available in this browser.'));
    }
  }, []);

  return { position, error };
}
