export interface CosmicObject {
  id: string;
  slug: string;
  title: string;
  content?: string;
  metadata: Record<string, unknown>;
  type: string;
  created_at: string;
  modified_at: string;
  thumbnail?: string;
}

export interface Category extends CosmicObject {
  type: 'categories';
  metadata: {
    name: string;
    description?: string;
  };
}

export interface Recipe extends CosmicObject {
  type: 'recipes';
  metadata: {
    description: string;
    featured_image?: {
      url: string;
      imgix_url: string;
    };
    prep_time?: string;
    cook_time?: string;
    servings?: number;
    difficulty?: {
      key: string;
      value: string;
    };
    ingredients: string;
    instructions: string;
    category?: Category;
  };
}

export type Difficulty = 'Easy' | 'Medium' | 'Hard';