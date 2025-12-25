const API_BASE_URL = 'https://www.themealdb.com/api/json/v1/1';

export const searchRecipes = async (query) => {
  const response = await fetch(`${API_BASE_URL}/search.php?s=${query}`);
  if (!response.ok) {
    throw new Error('Failed to fetch recipes');
  }
  const data = await response.json();
  return data.meals || [];
};
