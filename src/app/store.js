import { configureStore } from '@reduxjs/toolkit';
import recipesReducer from '../features/recipes/recipesSlice';
import shoppingListReducer from '../features/shoppingList/shoppingListSlice';

export const store = configureStore({
  reducer: {
    recipes: recipesReducer,
    shoppingList: shoppingListReducer,
  },
});
