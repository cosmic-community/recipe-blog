'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Recipe } from '@/types';

interface FeaturedRecipeProps {
  recipe: Recipe;
}

export default function FeaturedRecipe({ recipe }: FeaturedRecipeProps) {
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
      transition={{ duration: 0.6 }}
      whileHover={{ y: -5 }}
      className="group"
    >
      <Link href={`/recipes/${slug}`} className="block">
        <div className="bg-dark-900 rounded-3xl overflow-hidden border border-dark-800 card-hover">
          <div className="grid lg:grid-cols-2 gap-0">
            {/* Image */}
            <div className="relative aspect-[16/10] lg:aspect-auto overflow-hidden">
              {featured_image?.imgix_url ? (
                <img
                  src={`${featured_image.imgix_url}?w=1200&h=800&fit=crop&auto=format,compress`}
                  alt={title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              ) : (
                <div className="w-full h-full bg-dark-800 flex items-center justify-center min-h-[300px]">
                  <span className="text-8xl opacity-50">🍽️</span>
                </div>
              )}
              
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-dark-950/50 to-transparent lg:hidden" />
            </div>

            {/* Content */}
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              {/* Badges */}
              <div className="flex flex-wrap items-center gap-3 mb-4">
                {category && (
                  <span className="px-3 py-1 bg-accent-500/20 text-accent-400 rounded-full text-xs font-medium border border-accent-500/30">
                    {category.title}
                  </span>
                )}
                {difficulty && (
                  <span className={`px-3 py-1 rounded-full text-xs font-medium border ${difficultyColors[difficulty.value] || difficultyColors.Easy}`}>
                    {difficulty.value}
                  </span>
                )}
                <span className="px-3 py-1 bg-dark-700/50 text-dark-300 rounded-full text-xs font-medium border border-dark-600">
                  ⭐ Featured
                </span>
              </div>

              <h3 className="text-2xl lg:text-3xl font-bold text-dark-50 mb-4 group-hover:text-accent-400 transition-colors">
                {title}
              </h3>
              
              <p className="text-dark-300 text-base lg:text-lg mb-6 line-clamp-3">
                {description}
              </p>

              {/* Meta info */}
              <div className="flex flex-wrap items-center gap-6 text-dark-400">
                {prep_time && (
                  <div className="flex items-center gap-2">
                    <span className="text-lg">⏱️</span>
                    <div>
                      <p className="text-xs text-dark-500">Prep</p>
                      <p className="text-sm font-medium text-dark-200">{prep_time}</p>
                    </div>
                  </div>
                )}
                {cook_time && (
                  <div className="flex items-center gap-2">
                    <span className="text-lg">🔥</span>
                    <div>
                      <p className="text-xs text-dark-500">Cook</p>
                      <p className="text-sm font-medium text-dark-200">{cook_time}</p>
                    </div>
                  </div>
                )}
                {servings && (
                  <div className="flex items-center gap-2">
                    <span className="text-lg">👥</span>
                    <div>
                      <p className="text-xs text-dark-500">Servings</p>
                      <p className="text-sm font-medium text-dark-200">{servings}</p>
                    </div>
                  </div>
                )}
              </div>

              {/* CTA */}
              <div className="mt-8">
                <span className="inline-flex items-center gap-2 text-accent-400 font-medium group-hover:text-accent-300 transition-colors">
                  View Recipe
                  <motion.span
                    className="inline-block"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}