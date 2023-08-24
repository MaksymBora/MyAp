export const WeatherCard = ({items : {city,
    temperature,
    tempFeelsLike,
    tempMax,
    tempMin,
    weatherState}}) => {
	return (
		<>
			<div>
				<h2>{city}</h2>
				<p>Current temperature: {temperature.toFixed(0)}°C</p>
				<p>Feels like: {tempFeelsLike.toFixed(0)}°C</p>
				<p>Max: {tempMax.toFixed(0)}°C | Min: {tempMin.toFixed(0)}°C</p>
				<p>{weatherState}</p>
			</div>
		</>
	)
};
