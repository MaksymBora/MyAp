import axios from 'axios';

const BASIC_URL = 'https://newsapi.org/v2/everything';

export async function getNews() {
  const keywords = [
    'IT',
    'Ukraine',
    'technology',
    'car',
    'sport',
    'business',
    'science',
    'future',
  ];
  const queryString = keywords.join(' OR ');

  const params = {
    apiKey: '15a02b4161eb4df2bc84f6211734c445',
    q: queryString,
  };

  try {
    const response = await axios.get(BASIC_URL, { params });
    return response.data.articles;
  } catch (error) {
    console.error(error);
  }
}
