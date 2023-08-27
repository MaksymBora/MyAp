import { CiTempHigh } from "react-icons/ci";
import { FaTemperatureArrowUp, FaTemperatureArrowDown, FaCloud, FaCloudShowersHeavy, FaCloudRain, FaSun, FaCloudSun, FaLocationDot } from "react-icons/fa6";
import { WeatherWrapper, Location, CurrentTemp, LocationName, MinMaxTemp, Temperature, FeelsLike } from './WeatherCard.style'

const { useState } = require('react');

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
	const [isShown, setIsShown] = useState(false);

	const toggle = () => setIsShown(isShown => !isShown);

	return (
		<>
			<WeatherWrapper onClick={toggle}>
				{ !isShown ?
					<>
						<Location><FaLocationDot size={ 18 } /></Location>
						<CurrentTemp>{ temperature.toFixed(0) }°C</CurrentTemp>
						<p>{ weatherIcon(weatherState) }</p>
					</> :
					<>
						<LocationName>{ city }</LocationName>
						<CiTempHigh size={ 21 } />
						<Temperature> { temperature.toFixed(0) }°C</Temperature>
						<FeelsLike>Feels like: { tempFeelsLike.toFixed(0) }°C</FeelsLike>
						<MinMaxTemp><FaTemperatureArrowUp size={ 21 } /> { tempMax.toFixed(0) }°C  <FaTemperatureArrowDown size={ 21 } /> { tempMin.toFixed(0) }°C</MinMaxTemp>
						<p>{ weatherIcon(weatherState) }</p>
					</> }
			</WeatherWrapper>
		</>
	)
};


