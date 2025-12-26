import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import SearchPage from './pages/SearchPage';
import RecipeDetailPage from './pages/RecipeDetailPage';
import MealPlannerPage from './pages/MealPlannerPage';

function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path="/" element={<SearchPage />} />
          <Route path="/recipe/:id" element={<RecipeDetailPage />} />
          <Route path="/meal-planner" element={<MealPlannerPage />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App
