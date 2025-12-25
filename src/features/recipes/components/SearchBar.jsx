import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRecipes, setQuery, clearRecipes } from '../recipesSlice';

const SearchBar = () => {
  const dispatch = useDispatch();
  const query = useSelector((state) => state.recipes.query);
  const timeoutRef = useRef(null);

  const handleSearch = (e) => {
    const value = e.target.value;
    dispatch(setQuery(value));

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    if (value.trim() === '') {
      dispatch(clearRecipes());
      return;
    }

    timeoutRef.current = setTimeout(() => {
      dispatch(fetchRecipes(value));
    }, 400);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="relative">
        <input
          type="text"
          value={query}
          onChange={handleSearch}
          className="w-full h-14 pl-6 pr-16 rounded-full bg-[#E8F5EC] focus:outline-none focus:ring-2 focus:ring-[#2F6F4E] focus:ring-opacity-30 text-gray-700 shadow-sm"
        />
        <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#2F6F4E] hover:bg-[#25593D] text-white p-2.5 rounded-full transition-colors shadow-md">
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
