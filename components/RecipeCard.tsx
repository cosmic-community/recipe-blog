'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Recipe } from '@/types';

interface RecipeCardProps {
  recipe: Recipe;
  index: number;
}

export default function RecipeCard({ recipe, index }: RecipeCardProps) {
  const { title, slug, metadata } = recipe;
  const { description, featured_image, prep_time, cook_time, servings, difficulty, category } = metadata;

  const difficultyColors: Record<string, string> = {
    Easy: 'bg-green-500/20 text-green-400 border-green-500/30',
    Medium: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
    Hard: 'bg-red-500/20 text-red-400 border-red-500/30',
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="group"
    >
      <Link href={`/recipes/${slug}`} className="block">
        <div className="bg-dark-900 rounded-2xl overflow-hidden border border-dark-800 card-hover">
          {/* Image */}
          <div className="relative aspect-[4/3] overflow-hidden">
            {featured_image?.imgix_url ? (
              <img
                src={`${featured_image.imgix_url}?w=800&h=600&fit=crop&auto=format,compress`}
                alt={title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            ) : (
              <div className="w-full h-full bg-dark-800 flex items-center justify-center">
                <span className="text-6xl opacity-50">🍽️</span>
              </div>
            )}
            
            {/* Category badge */}
            {category && (
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 bg-dark-950/80 backdrop-blur-sm rounded-full text-xs font-medium text-dark-200 border border-dark-700">
                  {category.title}
                </span>
              </div>
            )}

            {/* Difficulty badge */}
            {difficulty && (
              <div className="absolute top-4 right-4">
                <span className={`px-3 py-1 rounded-full text-xs font-medium border ${difficultyColors[difficulty.value] || difficultyColors.Easy}`}>
                  {difficulty.value}
                </span>
              </div>
            )}
          </div>

          {/* Content */}
          <div className="p-6">
            <h3 className="text-xl font-semibold text-dark-50 mb-2 group-hover:text-accent-400 transition-colors">
              {title}
            </h3>
            <p className="text-dark-400 text-sm line-clamp-2 mb-4">
              {description}
            </p>

            {/* Meta info */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-dark-400">
              {prep_time && (
                <div className="flex items-center gap-1">
                  <span>⏱️</span>
                  <span>Prep: {prep_time}</span>
                </div>
              )}
              {cook_time && (
                <div className="flex items-center gap-1">
                  <span>🔥</span>
                  <span>Cook: {cook_time}</span>
                </div>
              )}
              {servings && (
                <div className="flex items-center gap-1">
                  <span>👥</span>
                  <span>{servings} servings</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}