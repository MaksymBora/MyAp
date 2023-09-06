import styled from 'styled-components';

export const WeatherWrapper = styled.div`
  min-width: 33%;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  padding: 10px;
  align-items: center;
  text-align: center;
  border-top: 1px solid rgb(20 158 202);
  border-bottom: 1px solid rgb(20 158 202);
  border-radius: 12px;
  box-shadow: -1px 9px 10px -9px rgba(255, 255, 255, 0.75);
`;

export const Location = styled.div`
  font-size: 18px;
`;

export const CurrentTemp = styled.p`
  display: flex;
  align-items: center;
`;
