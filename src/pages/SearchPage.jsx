import SearchBar from '../features/recipes/components/SearchBar';
import RecipeGrid from '../features/recipes/components/RecipeGrid';
import bookImage from '../assets/book.jpeg';

const SearchPage = () => {
  const categories = ['Chicken', 'Pulses', 'Rice', 'Vegetables', 'Desserts'];

  return (
    <div>
      <div className="max-w-6xl mx-auto px-6">
        <div className="relative py-16 overflow-hidden rounded-[40px]">
          <div className="absolute inset-0 z-0 flex justify-center items-start pt-0 top-[-40px]">
            <img
              src={bookImage}
              alt="Recipe Book Illustration"
              className="w-[850px] h-auto opacity-25 mix-blend-multiply pointer-events-none"
            />
          </div>

          <div className="relative z-10">
            <h1 className="text-3xl md:text-5xl font-semibold text-center mb-6 text-[#2F6F4E] tracking-tight">
              Discover Delicious Recipes
            </h1>

            <p className="text-center text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
              Find and organize your favorite recipes in one place
            </p>

            <div className="mb-10">
              <SearchBar />
            </div>

            <div className="flex flex-wrap justify-center gap-3 mb-14">
            <button className="px-5 py-2 bg-[#2F6F4E] text-white rounded-full font-medium transition-all duration-300 shadow-sm hover:shadow-md">
              Breakfast
            </button>
            {categories.slice(1).map((category) => (
              <button
                key={category}
                className="px-5 py-2 bg-[#E3F3E9] hover:bg-[#2F6F4E] hover:text-white text-[#2F6F4E] rounded-full font-medium transition-all duration-300 shadow-sm hover:shadow-md"
              >
                {category}
              </button>
            ))}
            <button className="px-5 py-2 bg-[#E3F3E9] hover:bg-[#2F6F4E] hover:text-white text-[#2F6F4E] rounded-full font-medium transition-all duration-300 shadow-sm hover:shadow-md flex items-center space-x-1">
              <span>View all</span>
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
            </div>
          </div>
        </div>
      </div>

      <RecipeGrid />
    </div>
  );
};

export default SearchPage;
