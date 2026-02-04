// app/recipes/[slug]/page.tsx
import { notFound } from 'next/navigation';
import { getRecipeBySlug, getRecipes } from '@/lib/cosmic';
import RecipeDetail from '@/components/RecipeDetail';

interface RecipePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const recipes = await getRecipes();
  return recipes.map((recipe) => ({
    slug: recipe.slug,
  }));
}

export async function generateMetadata({ params }: RecipePageProps) {
  const { slug } = await params;
  const recipe = await getRecipeBySlug(slug);
  
  if (!recipe) {
    return {
      title: 'Recipe Not Found',
    };
  }

  return {
    title: `${recipe.title} | Recipe Blog`,
    description: recipe.metadata.description,
    openGraph: {
      title: recipe.title,
      description: recipe.metadata.description,
      images: recipe.metadata.featured_image?.imgix_url 
        ? [`${recipe.metadata.featured_image.imgix_url}?w=1200&h=630&fit=crop&auto=format,compress`]
        : undefined,
    },
  };
}

export default async function RecipePage({ params }: RecipePageProps) {
  const { slug } = await params;
  const recipe = await getRecipeBySlug(slug);

  if (!recipe) {
    notFound();
  }

  return <RecipeDetail recipe={recipe} />;
}