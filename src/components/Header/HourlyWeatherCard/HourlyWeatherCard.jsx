import Modal from 'react-modal';
import { FaEllipsis} from 'react-icons/fa6'
import {ForecastBtn, Wrapper, HourlyCard, CurrentTemp, Forecast, LocationName, WeatherStateInfo, TimeTable, TempTable, FutureForecast, ForecastItem,  Temperature} from './HourlyWeatherCard.styled'

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
		case 'clear sky':
			return <img src={ 'https://openweathermap.org/img/wn/01d@2x.png' } alt={weather} width={ 80 } />;
		
		case 'few clouds':
			return <img src={ 'https://openweathermap.org/img/wn/02d@2x.png' } alt={ weather } width={ 80 } />;
		
		case 'scattered clouds':
			return <img src={ 'https://openweathermap.org/img/wn/03d@2x.png' } alt={ weather } width={ 80 } />;
		
		case 'broken clouds':
		return <img src={ 'https://openweathermap.org/img/wn/04d@2x.png' } alt={weather} width={ 80 } />;
			
		case 'shower rain':
			return <img src={ 'https://openweathermap.org/img/wn/09d@2x.png' } alt={weather} width={ 80 } />;
			
		case 'rain':
			return <img src={ 'https://openweathermap.org/img/wn/10d@2x.png' } alt={ weather } width={ 80 } />;
		
		case 'thunderstorm':
			return <img src={ 'https://openweathermap.org/img/wn/11d@2x.png' } alt={ weather } width={ 80 } />;
		
		case 'snow':
			return <img src={ 'https://openweathermap.org/img/wn/13d@2x.png' } alt={ weather } width={ 80 } />;
		
		case 'mist':
			return <img src={ 'https://openweathermap.org/img/wn/50d@2x.png' } alt={ weather } width={ 80 } />;
		
			
		default:
			return <img src={ 'https://openweathermap.org/img/wn/01d@2x.png' } alt={weather} width={ 80 } />;
			
	}
};

export const HourlyWeatherCard = ({ weatherData }) => {

	const { city, tempMax, temperature, weatherState, pressure, humidity, forecasteList } = weatherData;
	const { isOpen, open, close } = useToggle();

	const daysOfWeek = ['Su', 'Mo', 'Tue', 'Wen', 'Thu', 'Fr', 'Sa'];
	return (
		<>
			<ForecastBtn onClick={ open }><FaEllipsis size={24}/></ForecastBtn>
			{ forecasteList[0] && <Modal
				isOpen={ isOpen }
				onRequestClose={ close }
				style={ customStyles }
				contentLabel="Weather Modal">
				<Wrapper>
					<HourlyCard>
						<CurrentTemp>
							<LocationName>{ city }</LocationName>
							<WeatherStateInfo>{ weatherIcon(weatherState) } { weatherState }</WeatherStateInfo>
							<Temperature> { temperature.toFixed(0) }°C</Temperature>
							<p>Pressure: { pressure } | Humidity: { humidity }</p>
						</CurrentTemp>
						<Forecast>
							<table>
								<tbody>
									<TimeTable>
										<td>Now</td>
										<td>{ new Date(forecasteList[1].dt * 1000).getUTCHours() === 0 ? '24' : new Date(forecasteList[1].dt * 1000).getUTCHours() }</td>
										<td>{ new Date(forecasteList[2].dt * 1000).getUTCHours() === 0 ? '24' : new Date(forecasteList[2].dt * 1000).getUTCHours() }</td>
										<td>{ new Date(forecasteList[3].dt * 1000).getUTCHours() === 0 ? '24' : new Date(forecasteList[3].dt * 1000).getUTCHours() }</td>
										<td>{ new Date(forecasteList[4].dt * 1000).getUTCHours() === 0 ? '24' : new Date(forecasteList[4].dt * 1000).getUTCHours() }</td>
										<td>{ new Date(forecasteList[5].dt * 1000).getUTCHours() === 0 ? '24' : new Date(forecasteList[5].dt * 1000).getUTCHours() }</td>
									</TimeTable>
									<tr>
										<td>{ weatherIcon(weatherState) }</td>
										<td>{ weatherIcon(forecasteList[1].weather[0].main) }</td>
										<td>{ weatherIcon(forecasteList[2].weather[0].main) }</td>
										<td>{ weatherIcon(forecasteList[3].weather[0].main) }</td>
										<td>{ weatherIcon(forecasteList[4].weather[0].main) }</td>
										<td>{ weatherIcon(forecasteList[5].weather[0].main) }</td>
									</tr>
									<TempTable>
										<td>{ temperature.toFixed(0) }°</td>
										<td>{ forecasteList[1].main.temp.toFixed(0) }°</td>
										<td>{ forecasteList[2].main.temp.toFixed(0) }°</td>
										<td>{ forecasteList[3].main.temp.toFixed(0) }°</td>
										<td>{ forecasteList[4].main.temp.toFixed(0) }°</td>
										<td>{ forecasteList[5].main.temp.toFixed(0) }°</td>
									</TempTable>
								</tbody>
							</table>
						</Forecast>
						<div>
							<FutureForecast>
								<ForecastItem>
									<p>Now</p>
									<p>{ tempMax.toFixed(0) }°</p>
								</ForecastItem>
								<ForecastItem>
									<p>{ new Date(forecasteList[5].dt * 1000).getUTCHours() === 0 ? '24' : daysOfWeek[new Date(forecasteList[5].dt * 1000).getUTCDay()] }</p>
									<p>{ forecasteList[5].main.temp_max.toFixed(0) }°</p>
								</ForecastItem>
								<ForecastItem>
									<p>{ new Date(forecasteList[13].dt * 1000).getUTCHours() === 0 ? '24' : daysOfWeek[new Date(forecasteList[13].dt * 1000).getUTCDay()] }</p>
									<p>{ forecasteList[13].main.temp_max.toFixed(0) }°</p>
								</ForecastItem>
								<ForecastItem>
									<p>{ new Date(forecasteList[21].dt * 1000).getUTCHours() === 0 ? '24' : daysOfWeek[new Date(forecasteList[21].dt * 1000).getUTCDay()] }</p>
									<p>{ forecasteList[21].main.temp_max.toFixed(0) }°</p>
								</ForecastItem>
								<ForecastItem>
									<p>{ new Date(forecasteList[29].dt * 1000).getUTCHours() === 0 ? '24' : daysOfWeek[new Date(forecasteList[29].dt * 1000).getUTCDay()] }</p>
									<p>{ forecasteList[29].main.temp_max.toFixed(0) }°</p>
								</ForecastItem>
								<ForecastItem>
									<p>{ new Date(forecasteList[37].dt * 1000).getUTCHours() === 0 ? '24' : daysOfWeek[new Date(forecasteList[37].dt * 1000).getUTCDay()] }</p>
									<p>{ forecasteList[37].main.temp_max.toFixed(0) }°</p>
								</ForecastItem>
							</FutureForecast>
						</div>
					</HourlyCard>
				</Wrapper>
			</Modal> }
		</>
	);
};
