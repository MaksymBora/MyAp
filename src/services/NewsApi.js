import axios from 'axios';

const BASIC_URL = 'https://gnews.io/api/v4/search';
const API_KEY = '8be01aea27c0ace063a75957dc708c6b';

export async function getNews() {
  const keywords = [
    'IT',
    'money',
    'Ukraine',
    'technology',
    'cars',
    'sport',
    'business',
    'science',
    'sex',
    'climate',
  ];
  const queryString = keywords.join(' OR ');

  try {
    const response = await axios.get(
      `${BASIC_URL}?q=${queryString}&apikey=${API_KEY}&lang=en`
    );
    return response.data.articles;
  } catch (error) {
    console.error(error);
  }
}
