import styled from 'styled-components';

export const ForecastBtn = styled.div`
  margin-left: auto;
  background-color: transparent;
  cursor: pointer;
`;

export const Wrapper = styled.div`
  display: flex;
`;

export const HourlyCard = styled.div`
  width: 100%;
  border-radius: 8px;

  background-color: #fff;
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
  font-size: 22px;
`;

export const Temperature = styled.p`
  font-size: 36px;
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
`;
