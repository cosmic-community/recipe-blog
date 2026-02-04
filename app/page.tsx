import { getRecipes, getCategories } from '@/lib/cosmic';
import HeroSection from '@/components/HeroSection';
import RecipeGrid from '@/components/RecipeGrid';
import CategoryFilter from '@/components/CategoryFilter';
import FeaturedRecipe from '@/components/FeaturedRecipe';

export const revalidate = 60;

export default async function HomePage() {
  const [recipes, categories] = await Promise.all([
    getRecipes(),
    getCategories(),
  ]);

  const featuredRecipe = recipes[0];
  const otherRecipes = recipes.slice(1);

  return (
    <div className="min-h-screen">
      <HeroSection />
      
      {featuredRecipe && (
        <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-dark-50 mb-8">
            <span className="gradient-text">Featured Recipe</span>
          </h2>
          <FeaturedRecipe recipe={featuredRecipe} />
        </section>
      )}

      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
          <h2 className="text-3xl font-bold text-dark-50">
            All <span className="gradient-text">Recipes</span>
          </h2>
          <CategoryFilter categories={categories} />
        </div>
        <RecipeGrid recipes={otherRecipes.length > 0 ? otherRecipes : recipes} />
      </section>
    </div>
  );
}