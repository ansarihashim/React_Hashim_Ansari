import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchRecipeById } from '../features/recipes/recipesApi';

const RecipeDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadRecipe = async () => {
      try {
        setLoading(true);
        const data = await fetchRecipeById(id);
        setRecipe(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadRecipe();
  }, [id]);

  const getIngredients = () => {
    if (!recipe) return [];
    const ingredients = [];
    for (let i = 1; i <= 20; i++) {
      const ingredient = recipe[`strIngredient${i}`];
      const measure = recipe[`strMeasure${i}`];
      if (ingredient && ingredient.trim()) {
        ingredients.push({ ingredient, measure });
      }
    }
    return ingredients;
  };

  const getInstructions = () => {
    if (!recipe || !recipe.strInstructions) return [];
    const text = recipe.strInstructions;
    const steps = text.split(/\r?\n/).filter(step => step.trim().length > 0);
    return steps.map((step, index) => ({
      number: index + 1,
      text: step.trim()
    }));
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center py-20">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-[#2F6F4E]"></div>
      </div>
    );
  }

  if (error || !recipe) {
    return (
      <div className="text-center py-20">
        <div className="text-red-500 text-lg font-semibold mb-2">Recipe not found</div>
        <button
          onClick={() => navigate('/')}
          className="mt-4 px-6 py-2 bg-[#2F6F4E] text-white rounded-full hover:bg-[#25593D] transition-colors"
        >
          Back to Home
        </button>
      </div>
    );
  }

  const ingredients = getIngredients();
  const instructions = getInstructions();

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#F7FBF8]">
      {/* Decorative Background Blobs */}
      <div className="absolute top-10 left-0 w-96 h-[500px] bg-green-200 rounded-full opacity-40 blur-3xl -translate-x-1/4"></div>
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-green-100 rounded-full opacity-50 blur-3xl translate-x-1/4"></div>
      <div className="absolute bottom-10 left-20 w-64 h-64 bg-green-200 rounded-full opacity-30 blur-3xl"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-8 py-10">
        <button
          onClick={() => navigate(-1)}
          className="mb-6 flex items-center text-[#2F6F4E] hover:text-[#25593D] font-medium transition-colors"
        >
        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        Back
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* LEFT COLUMN */}
        <div className="space-y-6">
          {/* Recipe Image */}
          <div className="rounded-3xl overflow-hidden shadow-lg">
            <img
              src={recipe.strMealThumb}
              alt={recipe.strMeal}
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Ingredients Card */}
          <div className="bg-[#E8F5EC] rounded-3xl p-6 shadow-md">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-2">
                <div className="bg-[#2F6F4E] p-2 rounded-lg">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-[#2F6F4E]">Ingredients</h2>
              </div>
              <span className="bg-[#2F6F4E] text-white px-4 py-1 rounded-full text-sm font-medium">
                {ingredients.length} items
              </span>
            </div>

            <div className="space-y-3">
              {ingredients.map((item, index) => (
                <div key={index} className="flex items-center justify-between bg-white rounded-xl p-3 shadow-sm">
                  <div className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      className="w-5 h-5 rounded border-2 border-[#2F6F4E] text-[#2F6F4E] focus:ring-[#2F6F4E]"
                    />
                    <span className="text-gray-800 font-medium">{item.ingredient}</span>
                  </div>
                  <span className="text-gray-600 text-sm">{item.measure}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="space-y-6">
          {/* Title and Meta */}
          <div>
            <h1 className="text-4xl font-bold text-[#2F6F4E] mb-4">{recipe.strMeal}</h1>
            
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-4 py-2 bg-[#E3F3E9] text-[#2F6F4E] rounded-full text-sm font-medium flex items-center">
                <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                  <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                </svg>
                {recipe.strCategory}
              </span>
              <span className="px-4 py-2 bg-[#E3F3E9] text-[#2F6F4E] rounded-full text-sm font-medium flex items-center">
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {recipe.strArea}
              </span>
            </div>

            <p className="text-gray-700 text-lg leading-relaxed line-clamp-3">
              {recipe.strInstructions.split('.')[0]}.
            </p>
          </div>

          {/* Add to Meal Plan Button */}
          <button className="w-full bg-[#2F6F4E] hover:bg-[#25593D] text-white py-4 rounded-full font-medium text-lg transition-colors shadow-md flex items-center justify-center space-x-2">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            <span>Add to Meal Plan</span>
          </button>

          {/* Instructions */}
          <div className="bg-white rounded-3xl p-6 shadow-md">
            <h2 className="text-2xl font-bold text-[#2F6F4E] mb-6">Instructions</h2>
            
            <div className="space-y-6">
              {instructions.map((step, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-full border-2 border-[#2F6F4E] bg-white flex items-center justify-center">
                      <span className="text-[#2F6F4E] font-bold">{step.number}</span>
                    </div>
                    {index < instructions.length - 1 && (
                      <div className="w-0.5 h-full bg-[#E3F3E9] mx-auto mt-2"></div>
                    )}
                  </div>
                  <div className="flex-1 pb-4">
                    <p className="text-gray-700 leading-relaxed">{step.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default RecipeDetailPage;
