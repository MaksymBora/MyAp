import axios from 'axios';

const BASE_URL =
  'https://tasty-treats-backend.p.goit.global/api/recipes?limit=30';

export async function getRecipes() {
  try {
    const response = await axios.get(BASE_URL);
    return response.data.results;
  } catch (error) {
    console.error(error);
  }
}
