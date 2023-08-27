import styled from 'styled-components';

export const WeatherWrapper = styled.div`
  width: 50%;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  padding: 10px;
  align-items: center;
  align-content: end;
  text-align: center;
  border-top: 1px solid rgb(20 158 202);
  border-bottom: 1px solid rgb(20 158 202);
  border-radius: 12px;
  box-shadow: -1px 9px 10px -9px rgba(255, 255, 255, 0.75);
  cursor: pointer;
`;

export const Location = styled.div`
  font-size: 18px;
`;

export const CurrentTemp = styled.p`
  display: flex;
  align-items: center;
`;

export const LocationName = styled.h2`
  font-size: 18px;
`;

export const Temperature = styled.p`
  font-size: 16px;
`;

export const FeelsLike = styled.p`
  font-size: 16px;
`;

export const MinMaxTemp = styled.p`
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 16px;
`;
