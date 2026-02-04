import { createBucketClient } from '@cosmicjs/sdk';
import { Recipe, Category } from '@/types';

export const cosmic = createBucketClient({
  bucketSlug: process.env.COSMIC_BUCKET_SLUG as string,
  readKey: process.env.COSMIC_READ_KEY as string,
});

function hasStatus(error: unknown): error is { status: number } {
  return typeof error === 'object' && error !== null && 'status' in error;
}

export async function getRecipes(): Promise<Recipe[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'recipes' })
      .props(['id', 'title', 'slug', 'metadata', 'created_at'])
      .depth(1);
    return response.objects as Recipe[];
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return [];
    }
    throw new Error('Failed to fetch recipes');
  }
}

export async function getRecipeBySlug(slug: string): Promise<Recipe | null> {
  try {
    const response = await cosmic.objects
      .findOne({ type: 'recipes', slug })
      .props(['id', 'title', 'slug', 'metadata', 'created_at'])
      .depth(1);
    return response.object as Recipe;
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return null;
    }
    throw new Error('Failed to fetch recipe');
  }
}

export async function getCategories(): Promise<Category[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'categories' })
      .props(['id', 'title', 'slug', 'metadata']);
    return response.objects as Category[];
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return [];
    }
    throw new Error('Failed to fetch categories');
  }
}

export async function getRecipesByCategory(categoryId: string): Promise<Recipe[]> {
  try {
    const response = await cosmic.objects
      .find({ 
        type: 'recipes',
        'metadata.category': categoryId 
      })
      .props(['id', 'title', 'slug', 'metadata', 'created_at'])
      .depth(1);
    return response.objects as Recipe[];
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return [];
    }
    throw new Error('Failed to fetch recipes by category');
  }
}