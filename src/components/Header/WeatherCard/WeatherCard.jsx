import { CiTempHigh } from "react-icons/ci";
import { FaTemperatureArrowUp, FaTemperatureArrowDown, FaCloud, FaCloudShowersHeavy, FaCloudRain, FaSun, FaCloudSun } from "react-icons/fa6";
import {WeatherWrapper} from './WeatherCard.style'

function weatherIcon (weather) {
	switch (weather) {
		case 'Clouds':
			return <FaCloud />;
			
		case 'Moderate rain':
			return <FaCloudShowersHeavy />;
			
		case 'Light rain':
			return <FaCloudRain />;
			
		case 'Clear sky':
			return <FaSun />;
			
		case 'Broken clouds':
			return <FaCloudSun />;
			
		default:
			return <FaSun />;
			
	}
};

export const WeatherCard = ({ items: { city,
    temperature,
    tempFeelsLike,
    tempMax,
    tempMin,
    weatherState}}) => {
	return (
		<>
			<WeatherWrapper>
				<h2>{ city }</h2>
				<CiTempHigh size={24}/>
				<p> {temperature.toFixed(0)}°C</p>
				<p>Feels like: {tempFeelsLike.toFixed(0)}°C</p>
				<p><FaTemperatureArrowUp size={24}/> {tempMax.toFixed(0)}°C | <FaTemperatureArrowDown size={24}/> {tempMin.toFixed(0)}°C</p>
				<p>{weatherIcon(weatherState)}</p>
			</WeatherWrapper>
		</>
	)
};
