import { WeatherCard } from './WeatherCard/WeatherCard';
import { fetchWeather } from 'services/WeatherApi';
import { usePosition } from './GetGeoPsn';
import { StyledHeaderWrapper } from './Header.styled';
import { Quotes } from 'components/Header/Quotes/Quotes';

const { useState, useEffect } = require('react');

export const Header = () => {
  const [city, setCity] = useState('');
  const [temperature, setTemperature] = useState(0);
  const [tempFeelsLike, setTempFeelsLike] = useState(0);
  const [tempMax, setTempMax] = useState(0);
  const [tempMin, setTempMin] = useState(0);
  const [weatherState, setWeatherState] = useState('');

  const { position, error } = usePosition();

  useEffect(() => {
    if (error) {
      console.log(error.message);
      return;
    }

    if (!position) {
      return;
    }

    const lat = parseFloat(position.latitude.toFixed(3));
    const lon = parseFloat(position.longitude.toFixed(3));

    const loadResult = async () => {
      try {
        const weatherResult = await fetchWeather(lat, lon);
        console.log(weatherResult);
        const { temp, feels_like, temp_max, temp_min } = weatherResult.list[0].main;
        
        if (weatherResult) {
          setCity(weatherResult.city.name);
          setTemperature(temp);
          setTempFeelsLike(feels_like);
          setTempMax(temp_max);
          setTempMin(temp_min);
          setWeatherState(weatherResult.list[0].weather[0].main);
        }
      } catch (error) {
        console.log(error);
      }
    };
    loadResult();
  }, [error, position]);

  const weatherProps = {
    city,
    temperature,
    tempFeelsLike,
    tempMax,
    tempMin,
    weatherState,
  };

  return (
    <StyledHeaderWrapper>
      {!position ? <p>Loading...</p> : <WeatherCard items={weatherProps} />}
      <Quotes />
    </StyledHeaderWrapper>
  );
};
