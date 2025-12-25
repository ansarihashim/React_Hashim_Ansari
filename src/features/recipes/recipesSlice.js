import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { searchRecipes } from './recipesApi';

export const fetchRecipes = createAsyncThunk(
  'recipes/fetchRecipes',
  async (query) => {
    const recipes = await searchRecipes(query);
    return recipes;
  }
);

const recipesSlice = createSlice({
  name: 'recipes',
  initialState: {
    items: [],
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
      });
  },
});

export const { setQuery, clearRecipes } = recipesSlice.actions;
export default recipesSlice.reducer;
