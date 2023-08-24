import axios from 'axios';

const BASIC_URL = process.env.REACT_APP_API_URL;
const API_KEY = process.env.REACT_APP_API_KEY;

export async function getNews() {
  try {
    const response = await axios.get(`${BASIC_URL}?access_key=${API_KEY}`);
    console.log(response);
  } catch (error) {
    console.error('Error:', error.response);
  }
}
