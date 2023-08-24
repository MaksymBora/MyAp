import axios from 'axios';

const API_KEY = 'a829fc8311722c22dee1b574ddc9d5b1';

axios.defaults.baseURL = `https://api.openweathermap.org/data/2.5/weather?`;

export const fetchWeather = async query => {
  try {
    const response = await axios.get('', {
      params: {
        appid: API_KEY,
        q: query,
        lang: 'en',
        units: 'metric',
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
