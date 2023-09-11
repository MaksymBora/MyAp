import { WeatherCard } from './WeatherCard/WeatherCard';
import { fetchWeather } from 'services/WeatherApi';
import { usePosition } from './GetGeoPsn';
import { StyledHeaderWrapper } from './Header.styled';
import { Quotes } from 'components/Header/Quotes/Quotes';
import { Link } from 'react-router-dom';

const { useState, useEffect } = require('react');

export const Header = () => {
  const [city, setCity] = useState('');
  const [temperature, setTemperature] = useState(0);
  const [tempFeelsLike, setTempFeelsLike] = useState(0);
  const [tempMax, setTempMax] = useState(0);
  const [tempMin, setTempMin] = useState(0);
  const [pressure, setPressure] = useState(0);
  const [humidity, setHumidity] = useState(0);
  const [forecasteList, setForecasteList] = useState([]);
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
        const { temp, feels_like, temp_max, temp_min, pressure, humidity } = weatherResult.list[0].main;
        
        if (weatherResult) {
          setCity(weatherResult.city.name);
          setTemperature(temp);
          setTempFeelsLike(feels_like);
          setTempMax(temp_max);
          setTempMin(temp_min);
          setWeatherState(weatherResult.list[0].weather[0].description);
          setPressure(pressure);
          setHumidity(humidity);
          setForecasteList(weatherResult.list)
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
    pressure,
    humidity,
    forecasteList,
  };

  return (
    <StyledHeaderWrapper>
      {/* {!position ? <p>Loading...</p> : <WeatherCard items={weatherProps} />} */ }
      <WeatherCard items={ weatherProps } psn={ position} />
      <Quotes />
      <Link to="login">Log In</Link>
    </StyledHeaderWrapper>
  );
};
