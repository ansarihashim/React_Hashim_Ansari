const RecipeCard = ({ recipe }) => {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 border-2 border-transparent hover:border-[#2F6F4E]">
      <div className="aspect-square overflow-hidden">
        <img
          src={recipe.strMealThumb}
          alt={recipe.strMeal}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-lg text-gray-800 mb-2 line-clamp-2">
          {recipe.strMeal}
        </h3>
        <p className="text-sm text-gray-500 mb-2">
          Category: <span className="text-[#2F6F4E] font-medium">{recipe.strCategory}</span>
        </p>
        <span className="inline-block px-3 py-1 bg-[#E3F3E9] text-[#2F6F4E] rounded-full text-xs font-medium">
          {recipe.strCategory}
        </span>
      </div>
    </div>
  );
};

export default RecipeCard;
