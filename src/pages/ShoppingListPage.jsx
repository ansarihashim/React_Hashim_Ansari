import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { generateShoppingList, togglePurchased, clearShoppingList } from '../features/shoppingList/shoppingListSlice';

const ShoppingListPage = () => {
  const dispatch = useDispatch();
  const mealPlan = useSelector((state) => state.recipes.mealPlan);
  const shoppingList = useSelector((state) => state.shoppingList);

  useEffect(() => {
    // Generate shopping list from meal plan whenever component mounts or meal plan changes
    dispatch(generateShoppingList(mealPlan));
  }, [dispatch, mealPlan]);

  const handleTogglePurchased = (ingredientName) => {
    dispatch(togglePurchased(ingredientName));
  };

  const handleClearList = () => {
    dispatch(clearShoppingList());
  };

  const isPurchased = (ingredientName) => {
    return shoppingList.purchasedItems.includes(ingredientName);
  };

  const hasItems = shoppingList.items.length > 0;

  return (
    <div className="min-h-screen bg-[#F7FBF8] py-10">
      <div className="max-w-7xl mx-auto px-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold text-[#2F6F4E] mb-1">Shopping List</h1>
            <p className="text-[#2F6F4E] text-sm opacity-70">
              Ingredients needed for your planned meals
            </p>
          </div>
          {hasItems && (
            <button
              onClick={handleClearList}
              className="border-2 border-[#2F6F4E] text-[#2F6F4E] px-6 py-2 rounded-full font-medium hover:bg-[#2F6F4E] hover:text-white transition-colors"
            >
              Clear List
            </button>
          )}
        </div>

        {/* Shopping List Card */}
        <div className="bg-[#E8F5EC] rounded-xl border border-[#D0E8D8] p-6 shadow-sm">
          {hasItems ? (
            <div className="space-y-3">
              {shoppingList.items.map((item, index) => {
                const purchased = isPurchased(item.name);
                return (
                  <div
                    key={index}
                    className={`flex items-center justify-between bg-white rounded-lg p-4 shadow-sm transition-all ${
                      purchased ? 'opacity-60' : ''
                    }`}
                  >
                    <div className="flex items-center space-x-4 flex-1">
                      <input
                        type="checkbox"
                        checked={purchased}
                        onChange={() => handleTogglePurchased(item.name)}
                        className="w-5 h-5 rounded border-2 border-[#2F6F4E] text-[#2F6F4E] focus:ring-[#2F6F4E] cursor-pointer"
                      />
                      <span
                        className={`text-gray-800 font-medium ${
                          purchased ? 'line-through' : ''
                        }`}
                      >
                        {item.name}
                      </span>
                    </div>
                    <span className="text-gray-600 text-sm ml-4">
                      {item.quantity}
                    </span>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-16">
              <svg
                className="w-20 h-20 text-[#2F6F4E] opacity-30 mb-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                />
              </svg>
              <p className="text-[#2F6F4E] opacity-60 font-medium text-lg mb-1">
                No items in your shopping list
              </p>
              <p className="text-[#2F6F4E] opacity-50 text-sm">
                Plan meals to generate ingredients
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ShoppingListPage;
