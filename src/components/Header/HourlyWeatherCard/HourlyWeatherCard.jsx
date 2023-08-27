import Modal from 'react-modal';
import { CiTempHigh } from "react-icons/ci";
import {FaTemperatureArrowUp, FaTemperatureArrowDown, FaCloud, FaCloudShowersHeavy, FaCloudRain, FaSun, FaCloudSun} from 'react-icons/fa6'
import {LocationName, MinMaxTemp, Temperature, FeelsLike} from './HourlyWeatherCard.styled'

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
		color: '#000',
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
			return <FaSun size={24}/>;
			
		case 'Broken clouds':
			return <FaCloudSun size={24} color={'#d3d3d3'}/>;
			
		default:
			return <FaSun size={ 24 } color={'yellow'} />;
			
	}
};

export const HourlyWeatherCard = ({weatherData}) => {

	const { city, tempFeelsLike, tempMax, tempMin, temperature, weatherState } = weatherData;
	const { isOpen, open, close } = useToggle();

	return (
		<>
			<button onClick={ open }>Modal</button>
			<Modal
				isOpen={isOpen}
				onRequestClose={close}
				style={customStyles}
				contentLabel="Weather Modal"
				>
				<div>
					<LocationName>{ city }</LocationName>
					<CiTempHigh size={ 21 } />
					<Temperature> { temperature.toFixed(0) }°C</Temperature>
					<FeelsLike>Feels like: { tempFeelsLike.toFixed(0) }°C</FeelsLike>
					<MinMaxTemp><FaTemperatureArrowUp size={ 21 } /> { tempMax.toFixed(0) }°C  <FaTemperatureArrowDown size={ 21 } /> { tempMin.toFixed(0) }°C</MinMaxTemp>
					<p>{ weatherIcon(weatherState) }</p>
				</div>
			</Modal>
		</>
	);
}