import { FaLocationDot } from "react-icons/fa6";
import { WeatherWrapper, Location, CurrentTemp } from './WeatherCard.style'
import { HourlyWeatherCard } from "../HourlyWeatherCard/HourlyWeatherCard";


function weatherIcon (weather) {
	switch (weather) {
		case 'clear sky':
			return <img src={ 'https://openweathermap.org/img/wn/01d@2x.png' } alt={weather} width={ 50 } />;
		
		case 'few clouds':
			return <img src={ 'https://openweathermap.org/img/wn/02d@2x.png' } alt={ weather } width={ 50 } />;
		
		case 'scattered clouds':
			return <img src={ 'https://openweathermap.org/img/wn/03d@2x.png' } alt={ weather } width={ 50 } />;
		
		case 'broken clouds':
		return <img src={ 'https://openweathermap.org/img/wn/04d@2x.png' } alt={weather} width={ 50 } />;
			
		case 'shower rain':
			return <img src={ 'https://openweathermap.org/img/wn/09d@2x.png' } alt={weather} width={50} />;
			
		case 'rain':
			return <img src={ 'https://openweathermap.org/img/wn/10d@2x.png' } alt={ weather } width={ 50 } />;
		
		case 'thunderstorm':
			return <img src={ 'https://openweathermap.org/img/wn/11d@2x.png' } alt={ weather } width={ 50 } />;
		
		case 'snow':
			return <img src={ 'https://openweathermap.org/img/wn/13d@2x.png' } alt={ weather } width={ 50 } />;
		
		case 'mist':
			return <img src={ 'https://openweathermap.org/img/wn/50d@2x.png' } alt={ weather } width={ 50 } />;
		
			
		default:
			return <img src={ 'https://openweathermap.org/img/wn/01d@2x.png' } alt={weather} width={ 50 } />;
			
	}
};

export const WeatherCard = ({ items: { city,
    temperature,
    tempFeelsLike,
    tempMax,
    tempMin,
	weatherState, pressure, humidity, forecasteList }, psn }) => {

	const weatherData = { city, tempFeelsLike, tempMax, tempMin, temperature, weatherState, pressure, humidity, forecasteList };
	return (
		<>
			<WeatherWrapper >
				{ !psn ? <p>Loading...</p> : 
					<>
					<Location><FaLocationDot size={ 18 } /></Location>
						<CurrentTemp>{ temperature.toFixed(0) }°C</CurrentTemp>
						<p>{ weatherIcon(weatherState) }</p>
						<HourlyWeatherCard weatherData={ weatherData} />
					</> }
			</WeatherWrapper>
		</>
	)
};




