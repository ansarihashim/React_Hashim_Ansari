import SearchBar from '../features/recipes/components/SearchBar';
import RecipeGrid from '../features/recipes/components/RecipeGrid';
import bookImage from '../assets/book.jpeg';

const SearchPage = () => {
  const categories = ['Chicken', 'Pulses', 'Rice', 'Vegetables', 'Desserts'];

  return (
    <div>
      <div className="max-w-5xl mx-auto px-6">
        <div className="relative py-12 overflow-hidden">
          <div className="absolute inset-0 z-0 flex justify-center items-start pt-0 top-[-40px]">
            <img
              src={bookImage}
              alt="Recipe Book Illustration"
              className="w-[850px] h-auto opacity-[0.08] mix-blend-multiply pointer-events-none"
            />
          </div>

          <div className="relative z-10">
            <h1 className="text-5xl md:text-6xl font-bold text-center mb-6 text-[#2F6F4E] tracking-tight">
              Discover Delicious Recipes
            </h1>

            <p className="text-center text-gray-700 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
              Find and organize your favorite recipes in one place
            </p>

            <div className="mb-8">
              <SearchBar />
            </div>

            <div className="flex flex-wrap justify-center gap-3">
            <button className="px-6 py-3 bg-[#2F6F4E] text-white rounded-full text-base font-medium transition-all duration-300 shadow-md hover:shadow-lg">
              Chicken
            </button>
            {categories.slice(1).map((category) => (
              <button
                key={category}
                className="px-6 py-3 bg-[#E3F3E9] hover:bg-[#2F6F4E] hover:text-white text-[#2F6F4E] rounded-full text-base font-medium transition-all duration-300 shadow-md hover:shadow-lg"
              >
                {category}
              </button>
            ))}
            </div>
          </div>
        </div>
      </div>

      <RecipeGrid />
    </div>
  );
};

export default SearchPage;
