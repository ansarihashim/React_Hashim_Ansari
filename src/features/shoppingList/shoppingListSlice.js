import { createSlice } from '@reduxjs/toolkit';

const loadFromLocalStorage = () => {
  try {
    const saved = localStorage.getItem('shoppingList');
    return saved ? JSON.parse(saved) : { items: [], purchasedItems: [] };
  } catch (error) {
    return { items: [], purchasedItems: [] };
  }
};

const saveToLocalStorage = (state) => {
  try {
    localStorage.setItem('shoppingList', JSON.stringify(state));
  } catch (error) {
    console.error('Failed to save shopping list:', error);
  }
};

const initialState = loadFromLocalStorage();

const shoppingListSlice = createSlice({
  name: 'shoppingList',
  initialState,
  reducers: {
    generateShoppingList: (state, action) => {
      const mealPlan = action.payload;
      const ingredientsMap = new Map();

      // Helper function to parse quantity
      const parseQuantity = (measure) => {
        if (!measure || !measure.trim()) return { value: 0, unit: '' };
        
        const trimmed = measure.trim();
        const match = trimmed.match(/^([\d.\/]+)\s*(.*)$/);
        
        if (match) {
          let value = match[1];
          // Handle fractions like 1/4
          if (value.includes('/')) {
            const parts = value.split('/');
            value = parseFloat(parts[0]) / parseFloat(parts[1]);
          } else {
            value = parseFloat(value);
          }
          return {
            value: isNaN(value) ? 0 : value,
            unit: match[2].trim()
          };
        }
        
        // No number found, treat entire string as unit
        return { value: 1, unit: trimmed };
      };

      // Extract all meals from all days
      Object.values(mealPlan).forEach(dayMeals => {
        dayMeals.forEach(meal => {
          // Extract ingredients from meal
          for (let i = 1; i <= 20; i++) {
            const ingredient = meal[`strIngredient${i}`];
            const measure = meal[`strMeasure${i}`];
            
            if (ingredient && ingredient.trim()) {
              const ingredientKey = ingredient.trim().toLowerCase();
              const ingredientName = ingredient.trim();
              const parsed = parseQuantity(measure);
              
              if (ingredientsMap.has(ingredientKey)) {
                // Add to existing
                const existing = ingredientsMap.get(ingredientKey);
                ingredientsMap.set(ingredientKey, {
                  name: ingredientName,
                  totalValue: existing.totalValue + parsed.value,
                  unit: existing.unit || parsed.unit
                });
              } else {
                // Create new entry
                ingredientsMap.set(ingredientKey, {
                  name: ingredientName,
                  totalValue: parsed.value,
                  unit: parsed.unit
                });
              }
            }
          }
        });
      });

      // Convert map to array with formatted quantities
      state.items = Array.from(ingredientsMap.values()).map(item => ({
        name: item.name,
        quantity: item.totalValue > 0 
          ? `${item.totalValue} ${item.unit}`.trim()
          : item.unit
      }));
      saveToLocalStorage(state);
    },
    
    togglePurchased: (state, action) => {
      const ingredientName = action.payload;
      const index = state.purchasedItems.indexOf(ingredientName);
      
      if (index > -1) {
        state.purchasedItems.splice(index, 1);
      } else {
        state.purchasedItems.push(ingredientName);
      }
      saveToLocalStorage(state);
    },
    
    clearShoppingList: (state) => {
      state.items = [];
      state.purchasedItems = [];
      saveToLocalStorage(state);
    }
  }
});

export const { generateShoppingList, togglePurchased, clearShoppingList } = shoppingListSlice.actions;
export default shoppingListSlice.reducer;
