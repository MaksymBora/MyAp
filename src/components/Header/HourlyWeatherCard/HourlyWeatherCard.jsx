import Modal from 'react-modal';
// import { CiTempHigh } from "react-icons/ci";
import {FaTemperatureArrowUp, FaTemperatureArrowDown, FaCloud, FaCloudShowersHeavy, FaCloudRain, FaSun, FaCloudSun} from 'react-icons/fa6'
import {Wrapper, HourlyCard, CurrentTemp, Forecast, LocationName, MinMaxTemp, Temperature, FeelsLike} from './HourlyWeatherCard.styled'

const { useState } = require('react');

export const useToggle = () => {
  const [isOpen, setIsOpen] = useState(false);
  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);
  const toggle = () => setIsOpen(isOpen => !isOpen);

  return { isOpen, open, close, toggle };
};


const customStyles = {
  content: {
    top: '52%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    padding: '0',
    border: 'none',
    maxWidth: 'calc (100vw - 48px)',
    maxHeight: 'calc(100vh - 24px)',
		overflow: 'none',
	backgroundColor: 'rgb(35, 39, 47)',
		minWidth: '290px',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    zIndex: '999999',
  },
};

Modal.setAppElement('#root');

function weatherIcon (weather) {
	switch (weather) {
		case 'Clouds':
			return <FaCloud size={ 24 } color={'#d3d3d3'} />;
			
		case 'Moderate rain':
			return <FaCloudShowersHeavy size={24} color={'#d3d3d3'}/>;
			
		case 'Light rain':
			return <FaCloudRain size={24} color={'#d3d3d3'}/>;
			
		case 'Clear sky':
			return <FaSun size={ 24 } color={'yellow'}/>;
		
		case 'Clear':
			return <FaSun size={24} color={'yellow'}/>;
			
		case 'Broken clouds':
			return <FaCloudSun size={24} color={'#d3d3d3'}/>;
			
		default:
			return <FaSun size={ 24 } color={'yellow'} />;
			
	}
};

export const HourlyWeatherCard = ({weatherData}) => {

	const { city, tempFeelsLike, tempMax, tempMin, temperature, weatherState, pressure, humidity, forecasteList } = weatherData;
	const { isOpen, open, close } = useToggle();


	console.log(forecasteList[2].dt_txt);
	return (
		<>
			<button onClick={ open }>Modal</button>
			{forecasteList[0] && <Modal
				isOpen={isOpen}
				onRequestClose={close}
				style={customStyles}
				contentLabel="Weather Modal"
				>
				<Wrapper>
					<HourlyCard>
						<CurrentTemp>
							<LocationName>{ city }</LocationName>
							<p>{ weatherIcon(weatherState) } {weatherState}</p>
							<Temperature> { temperature.toFixed(0) }°C</Temperature>
							<p>Pressure: { pressure } | Humidity: {humidity}</p>
						</CurrentTemp>
						<Forecast>
							<table>
								<tbody>
									<tr>
										<td>Now</td>
										<td>{new Date(forecasteList[1].dt * 1000).getUTCHours() === 0 ? '24' : new Date(forecasteList[1].dt * 1000).getUTCHours()}</td>
										<td>{new Date(forecasteList[2].dt * 1000).getUTCHours() === 0 ? '24' : new Date(forecasteList[2].dt * 1000).getUTCHours()}</td>
										<td>{new Date(forecasteList[3].dt * 1000).getUTCHours() === 0 ? '24' : new Date(forecasteList[3].dt * 1000).getUTCHours()}</td>
										<td>{new Date(forecasteList[4].dt * 1000).getUTCHours() === 0 ? '24' : new Date(forecasteList[4].dt * 1000).getUTCHours()}</td>
										<td>{new Date(forecasteList[5].dt * 1000).getUTCHours() === 0 ? '24' : new Date(forecasteList[5].dt * 1000).getUTCHours()}</td>
									</tr>
									<tr>
										<td>{weatherIcon(weatherState)}</td>
										<td>{weatherIcon(forecasteList[1].weather[0].main)}</td>
										<td>{weatherIcon(forecasteList[2].weather[0].main)}</td>
										<td>{weatherIcon(forecasteList[3].weather[0].main)}</td>
										<td>{weatherIcon(forecasteList[4].weather[0].main)}</td>
										<td>{weatherIcon(forecasteList[5].weather[0].main)}</td>
									</tr>
									<tr>
										<td>{temperature.toFixed(0)}°</td>
										<td>{forecasteList[1].main.temp.toFixed(0)}°</td>
										<td>{forecasteList[2].main.temp.toFixed(0)}°</td>
										<td>{forecasteList[3].main.temp.toFixed(0)}°</td>
										<td>{forecasteList[4].main.temp.toFixed(0)}°</td>
										<td>{forecasteList[5].main.temp.toFixed(0)}°</td>
									</tr>
								</tbody>
							</table>
						</Forecast>
						
					</HourlyCard>
				</Wrapper>
			</Modal>}
		</>
	);
}

{/* <FeelsLike>Feels like: { tempFeelsLike.toFixed(0) }°C</FeelsLike>
<MinMaxTemp><FaTemperatureArrowUp size={ 21 } /> { tempMax.toFixed(0) }°C  <FaTemperatureArrowDown size={ 21 } /> { tempMin.toFixed(0) }°C</MinMaxTemp> */}