import styled from 'styled-components';
import clearSky from '../../../img/clear-sky.jpg';
import fewClouds from '../../../img/few-clouds.jpg';
import scattered from '../../../img/scattered-clouds.jpg';
import rain from '../../../img/rain.jpg';
import thunderstorm from '../../../img/thunderstorm.jpg';
import snow from '../../../img/snow.jpg';
import mist from '../../../img/mist.jpg';

export const ForecastBtn = styled.div`
  margin-left: auto;
  background-color: transparent;
  cursor: pointer;
`;

export const Wrapper = styled.div`
  display: flex;
`;

const getWeatherBg = props => {
  switch (props.children[0].props.children[1].props.children[2]) {
    case 'clear sky':
      return clearSky;

    case 'few clouds':
      return fewClouds;

    case 'scattered clouds':
      return scattered;

    case 'broken clouds':
      return fewClouds;

    case 'shower rain':
      return rain;

    case 'rain':
      return rain;

    case 'thunderstorm':
      return thunderstorm;

    case 'snow':
      return snow;

    case 'mist':
      return mist;

    default:
      return clearSky;
  }
};

export const HourlyCard = styled.div`
  min-width: 320px;
  max-width: 340px;
  padding: 20px 10px 20px 10px;
  border-radius: 8px;

  background-color: #fff;
  background-image: url(${getWeatherBg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  color: #000;
`;

export const CurrentTemp = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-bottom: 25px;
`;

export const LocationName = styled.h2`
  text-align: center;
  font-size: 24px;
`;

export const WeatherStateInfo = styled.p`
  text-transform: capitalize;
`;

export const Temperature = styled.p`
  font-size: 36px;
  font-weight: 700;
`;

export const Forecast = styled.div`
  margin-bottom: 15px;
  border-top: 1px solid #000;
  border-bottom: 1px solid #000;
`;

export const FutureForecast = styled.ul``;

export const ForecastItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 3px;
  font-size: 18px;
  line-height: 1.3;
  font-weight: 500;
`;

export const TimeTable = styled.tr`
  text-align: center;
  font-weight: 500;
`;

export const TempTable = styled.tr`
  text-align: center;
  font-weight: 500;
`;
