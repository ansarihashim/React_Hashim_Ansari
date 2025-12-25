import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { searchRecipes, fetchRandomRecipes } from './recipesApi';

export const fetchRecipes = createAsyncThunk(
  'recipes/fetchRecipes',
  async (query) => {
    const recipes = await searchRecipes(query);
    return recipes;
  }
);

export const fetchRecommendedRecipes = createAsyncThunk(
  'recipes/fetchRecommendedRecipes',
  async () => {
    const recipes = await fetchRandomRecipes(8);
    return recipes;
  }
);

const recipesSlice = createSlice({
  name: 'recipes',
  initialState: {
    items: [],
    recommendedMeals: [],
    loading: false,
    error: null,
    query: '',
  },
  reducers: {
    setQuery: (state, action) => {
      state.query = action.payload;
    },
    clearRecipes: (state) => {
      state.items = [];
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRecipes.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchRecipes.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchRecipes.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(fetchRecommendedRecipes.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchRecommendedRecipes.fulfilled, (state, action) => {
        state.loading = false;
        state.recommendedMeals = action.payload;
      })
      .addCase(fetchRecommendedRecipes.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { setQuery, clearRecipes } = recipesSlice.actions;
export default recipesSlice.reducer;
