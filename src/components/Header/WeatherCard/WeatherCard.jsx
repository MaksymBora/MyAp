import {  FaCloud, FaCloudShowersHeavy, FaCloudRain, FaSun, FaCloudSun, FaLocationDot } from "react-icons/fa6";
import { WeatherWrapper, Location, CurrentTemp } from './WeatherCard.style'
import { HourlyWeatherCard } from "../HourlyWeatherCard/HourlyWeatherCard";


function weatherIcon (weather) {
	switch (weather) {
		case 'Clouds':
			return <FaCloud size={ 24 } color={'#d3d3d3'} />;
			
		case 'Moderate rain':
			return <FaCloudShowersHeavy size={24} color={'#d3d3d3'}/>;
			
		case 'Light rain':
			return <FaCloudRain size={24} color={'#d3d3d3'}/>;
			
		case 'Clear sky':
			return <FaSun size={24}/>;
			
		case 'Broken clouds':
			return <FaCloudSun size={24} color={'#d3d3d3'}/>;
			
		default:
			return <FaSun size={ 24 } color={'yellow'} />;
			
	}
};

export const WeatherCard = ({ items: { city,
    temperature,
    tempFeelsLike,
    tempMax,
    tempMin,
	weatherState } }) => {

	const weatherData = { city, tempFeelsLike, tempMax, tempMin, temperature, weatherState };
	return (
		<>
			<WeatherWrapper >
				<Location><FaLocationDot size={ 18 } /></Location>
				<CurrentTemp>{ temperature.toFixed(0) }°C</CurrentTemp>
				<p>{ weatherIcon(weatherState) }</p>
				
				<HourlyWeatherCard weatherData={ weatherData} />
			</WeatherWrapper>
		</>
	)
};




