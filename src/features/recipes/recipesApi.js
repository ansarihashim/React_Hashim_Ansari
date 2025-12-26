const API_BASE_URL = 'https://www.themealdb.com/api/json/v1/1';

export const searchRecipes = async (query) => {
  const response = await fetch(`${API_BASE_URL}/search.php?s=${query}`);
  if (!response.ok) {
    throw new Error('Failed to fetch recipes');
  }
  const data = await response.json();
  return data.meals || [];
};

export const fetchRandomRecipes = async (count = 8) => {
  const promises = Array.from({ length: count }, () =>
    fetch(`${API_BASE_URL}/random.php`).then((res) => res.json())
  );
  const results = await Promise.all(promises);
  return results.map((result) => result.meals[0]).filter(Boolean);
};

export const fetchRecipeById = async (id) => {
  const response = await fetch(`${API_BASE_URL}/lookup.php?i=${id}`);
  if (!response.ok) {
    throw new Error('Failed to fetch recipe details');
  }
  const data = await response.json();
  return data.meals ? data.meals[0] : null;
};
