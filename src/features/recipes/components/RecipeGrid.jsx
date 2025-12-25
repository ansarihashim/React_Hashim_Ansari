import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchRecommendedRecipes } from '../recipesSlice';
import RecipeCard from './RecipeCard';

const RecipeGrid = () => {
  const dispatch = useDispatch();
  const { items, recommendedMeals, loading, error, query } = useSelector((state) => state.recipes);

  useEffect(() => {
    if (!query && recommendedMeals.length === 0) {
      dispatch(fetchRecommendedRecipes());
    }
  }, [dispatch, query, recommendedMeals.length]);

  const displayItems = query ? items : recommendedMeals;
  const showEmptyState = query && items.length === 0;

  if (loading) {
    return (
      <div className="flex justify-center items-center py-20">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-green-600"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-20">
        <div className="text-red-500 text-lg font-semibold mb-2">Oops! Something went wrong</div>
        <p className="text-gray-600">{error}</p>
      </div>
    );
  }

  if (showEmptyState) {
    return (
      <div className="text-center py-20">
        <svg
          className="w-24 h-24 mx-auto mb-4 text-gray-300"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
        <h3 className="text-xl font-semibold text-gray-700 mb-2">No recipes found</h3>
        <p className="text-gray-500">Try searching for a different dish or ingredient</p>
      </div>
    );
  }

  return (
    <div>
      {!query && displayItems.length > 0 && (
        <h2 className="text-2xl font-bold text-[#2F6F4E] text-left mb-8 px-4">Recommended Recipes</h2>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-4 py-8">
        {displayItems.map((recipe) => (
          <RecipeCard key={recipe.idMeal} recipe={recipe} />
        ))}
      </div>
    </div>
  );
};

export default RecipeGrid;
