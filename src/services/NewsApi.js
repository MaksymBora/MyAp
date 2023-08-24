import axios from 'axios';

const BASIC_URL = 'https://newsapi.org/v2/everything';
const API_KEY = '15a02b4161eb4df2bc84f6211734c445';

export async function getNews() {
  try {
    const keywords = [
      'IT',
      'Ukraine',
      'technology',
      'car',
      'sport',
      'business',
      'science',
    ];
    const queryString = keywords.join(' OR ');

    const response = await axios.get(BASIC_URL, {
      params: {
        apiKey: API_KEY,
        q: queryString,
      },
    });
    console.log(response);
  } catch (error) {
    console.error('Error:', error.response.data.message);
    throw error;
  }
}
