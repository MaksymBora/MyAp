import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/movie/popular';
const BASE_KEY = 'f45906a67bb4f8755162511f0bc0ffc5';

export async function getMovies() {
  try {
    const response = await axios.get(`${BASE_URL}?api_key=${BASE_KEY}`);
    return response.data.results;
  } catch (error) {
    console.error(error);
  }
}
