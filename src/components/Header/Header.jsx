import { SearchBar } from "./SearchBar/SearchBar";
import { WeatherCard } from "./SearchBar/WeatherCard/WeatherCard";
import { fetchWeather } from "services/WeatherApi";
import { usePosition } from './GetGeoPsn'

const { useState, useEffect } = require("react");

export const Header = () => {
  // const [query, setQuery] = useState('');
  const [city, setCity] = useState('');
  const [temperature, setTemperature] = useState(0);
  const [tempFeelsLike, setTempFeelsLike] = useState(0);
  const [tempMax, setTempMax] = useState(0);
  const [tempMin, setTempMin] = useState(0);
  const [weatherState, setWeatherState] = useState('');
  // const [stateIcon, setStateIcon] = useState({});
  
  const { position, error } = usePosition();



  useEffect(() => {
    // if (query === '') return;

    if (error) {
      console.log(error.message);
      return;
    }

    if (!position) {
      return console.log('Loading user location..');
    }

    const loadResult = async () => {
      const lat = parseFloat(position.latitude.toFixed(2));
      const lon = parseFloat(position.longitude.toFixed(2));
      console.log(lat, 'lat')
      console.log(lon, 'long')
      try {
        const weatherResult = await fetchWeather(lat, lon);
        const { temp, feels_like, temp_max, temp_min } = weatherResult.main;

        if (weatherResult) {
          setCity(weatherResult.name);
          setTemperature(temp)
          setTempFeelsLike(feels_like)
          setTempMax(temp_max)
          setTempMin(temp_min)
          setWeatherState(weatherResult.weather[0].main)
        }
      } catch (error) {
        console.log(error)
      }
    }
    loadResult();

  }, [ city, temperature, tempFeelsLike, tempMax, tempMin, weatherState, error, position]);
  
  const handleSubmit = (e) => {
    e.preventDefault();

    // setQuery(e.target.elements.query.value);

    e.target.reset();
  };

 const weatherProps = {
    city,
    temperature,
    tempFeelsLike,
    tempMax,
    tempMin,
    weatherState,
 };
  

  
  return (
    
    <div>
      <SearchBar onSubmit={ handleSubmit} />
      <WeatherCard items={ weatherProps } />
    </div>
  );
};
