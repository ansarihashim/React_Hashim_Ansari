import { useSelector, useDispatch } from 'react-redux';
import { removeFromMealPlan, clearDay, clearAllMeals } from '../features/recipes/recipesSlice';

const MealPlannerPage = () => {
  const dispatch = useDispatch();
  const mealPlan = useSelector((state) => state.recipes.mealPlan);

  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

  const getTotalMeals = () => {
    return Object.values(mealPlan).reduce((total, dayMeals) => total + dayMeals.length, 0);
  };

  const handleRemoveMeal = (day, recipeId) => {
    dispatch(removeFromMealPlan({ day, recipeId }));
  };

  const handleClearDay = (day) => {
    dispatch(clearDay(day));
  };

  const handleClearAll = () => {
    dispatch(clearAllMeals());
  };

  return (
    <div className="min-h-screen bg-[#F7FBF8] py-10">
      <div className="max-w-7xl mx-auto px-8">
        <div className="bg-[#E9F3EC] rounded-2xl p-6 shadow-sm">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-3xl font-bold text-[#2F6F4E] mb-1">Weekly Meal Planner</h1>
              <p className="text-[#2F6F4E] text-sm">
                Plan your meals for the week ({getTotalMeals()} meals planned)
              </p>
            </div>
            <button
              onClick={handleClearAll}
              className="bg-[#D4E8DD] hover:bg-[#C4D8CD] text-[#2F6F4E] p-3 rounded-full transition-colors shadow-sm"
              title="Clear all meals"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
            </button>
          </div>

          {/* Days Section */}
          <div className="space-y-6">
            {days.map((day) => {
              const dayMeals = mealPlan[day] || [];
              
              return (
                <div key={day} className="space-y-3">
                  {/* Day Header */}
                  <div className="flex items-center justify-between bg-[#2F6F4E] text-white px-4 py-2 rounded-lg">
                    <span className="font-semibold">{day}</span>
                    {dayMeals.length > 0 && (
                      <button
                        onClick={() => handleClearDay(day)}
                        className="hover:bg-[#25593D] p-1 rounded transition-colors"
                        title={`Clear ${day}`}
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                      </button>
                    )}
                  </div>

                  {/* Meals Grid */}
                  {dayMeals.length === 0 ? (
                    <div className="flex flex-col items-center justify-center py-12 bg-white rounded-xl">
                      <svg className="w-16 h-16 text-[#2F6F4E] opacity-30 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                      <p className="text-[#2F6F4E] opacity-60 font-medium">No meal planned</p>
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                      {dayMeals.map((meal) => (
                        <div key={meal.idMeal} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                          <div className="relative h-40">
                            <img
                              src={meal.strMealThumb}
                              alt={meal.strMeal}
                              className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                            <div className="absolute bottom-0 left-0 right-0 p-3">
                              <h3 className="text-white font-semibold text-sm line-clamp-2">{meal.strMeal}</h3>
                            </div>
                            <button
                              onClick={() => handleRemoveMeal(day, meal.idMeal)}
                              className="absolute top-2 right-2 bg-white/90 hover:bg-white p-1.5 rounded-full transition-colors shadow-md"
                            >
                              <svg className="w-4 h-4 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                              </svg>
                            </button>
                          </div>
                          <div className="p-3 flex items-center justify-between">
                            <span className="inline-block px-3 py-1 bg-[#E3F3E9] text-[#2F6F4E] rounded-full text-xs font-medium">
                              {meal.mealType || 'Meal'}
                            </span>
                            <button className="text-gray-400 hover:text-red-500 transition-colors">
                              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                              </svg>
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MealPlannerPage;
