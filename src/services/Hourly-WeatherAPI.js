import axios from 'axios';

const API_KEY = 'a829fc8311722c22dee1b574ddc9d5b1';

axios.defaults.baseURL = `api.openweathermap.org/data/2.5/forecast?`;

export const fetchHourlyWeather = async (lat, lon) => {
  try {
    const response = await axios.get('', {
      params: {
        appid: API_KEY,
        lang: 'en',
        units: 'metric',
        lat: lat,
        lon: lon,
      },
    });
    console.log(response.data, 'hourly');
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
