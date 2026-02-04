import { Recipe } from '@/types';
import RecipeCard from './RecipeCard';

interface RecipeGridProps {
  recipes: Recipe[];
}

export default function RecipeGrid({ recipes }: RecipeGridProps) {
  if (!recipes || recipes.length === 0) {
    return (
      <div className="text-center py-16">
        <span className="text-6xl mb-4 block">🍽️</span>
        <p className="text-dark-400 text-lg">No recipes found. Check back soon!</p>
      </div>
    );
  }

  return (
    <div id="recipes" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {recipes.map((recipe, index) => (
        <RecipeCard key={recipe.id} recipe={recipe} index={index} />
      ))}
    </div>
  );
}