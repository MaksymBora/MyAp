import { useState, useEffect } from 'react';

export function usePosition() {
  const [position, setPosition] = useState(null);

  useEffect(() => {
    let defaultPosition = null;

    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        currentPosition => {
          const { latitude, longitude } = currentPosition.coords;
          setPosition({ latitude, longitude });
        },
        geolocationError => {
          const defaultLatitude = 50.417;
          const defaultLongitude = 30.517;
          setPosition({
            latitude: defaultLatitude,
            longitude: defaultLongitude,
          });
        }
      );
    } else {
      const defaultLatitude = 50.417;
      const defaultLongitude = 30.517;
      defaultPosition = {
        latitude: defaultLatitude,
        longitude: defaultLongitude,
      };
    }

    if (defaultPosition) {
      setPosition(defaultPosition);
    }
  }, []);

  return { position };
}
