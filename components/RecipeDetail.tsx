'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Recipe } from '@/types';

interface RecipeDetailProps {
  recipe: Recipe;
}

export default function RecipeDetail({ recipe }: RecipeDetailProps) {
  const { title, metadata } = recipe;
  const { description, featured_image, prep_time, cook_time, servings, difficulty, ingredients, instructions, category } = metadata;

  const difficultyColors: Record<string, string> = {
    Easy: 'bg-green-500/20 text-green-400 border-green-500/30',
    Medium: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
    Hard: 'bg-red-500/20 text-red-400 border-red-500/30',
  };

  return (
    <article className="min-h-screen pb-16">
      {/* Hero Image */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="relative h-[50vh] lg:h-[60vh] overflow-hidden"
      >
        {featured_image?.imgix_url ? (
          <img
            src={`${featured_image.imgix_url}?w=2000&h=1200&fit=crop&auto=format,compress`}
            alt={title}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full bg-dark-800 flex items-center justify-center">
            <span className="text-9xl opacity-50">🍽️</span>
          </div>
        )}
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/50 to-transparent" />
        
        {/* Back button */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="absolute top-6 left-6"
        >
          <Link 
            href="/"
            className="flex items-center gap-2 px-4 py-2 bg-dark-950/80 backdrop-blur-sm rounded-full text-dark-200 hover:text-accent-400 transition-colors border border-dark-700"
          >
            <span>←</span>
            <span className="text-sm font-medium">Back to Recipes</span>
          </Link>
        </motion.div>
      </motion.div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-32 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-dark-900 rounded-3xl border border-dark-800 p-8 lg:p-12 shadow-2xl"
        >
          {/* Badges */}
          <div className="flex flex-wrap items-center gap-3 mb-6">
            {category && (
              <span className="px-4 py-1.5 bg-accent-500/20 text-accent-400 rounded-full text-sm font-medium border border-accent-500/30">
                {category.title}
              </span>
            )}
            {difficulty && (
              <span className={`px-4 py-1.5 rounded-full text-sm font-medium border ${difficultyColors[difficulty.value] || difficultyColors.Easy}`}>
                {difficulty.value}
              </span>
            )}
          </div>

          {/* Title */}
          <h1 className="text-3xl lg:text-4xl font-bold text-dark-50 mb-4">
            {title}
          </h1>

          {/* Description */}
          <p className="text-lg text-dark-300 mb-8">
            {description}
          </p>

          {/* Meta info cards */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12">
            {prep_time && (
              <div className="bg-dark-800 rounded-xl p-4 text-center border border-dark-700">
                <span className="text-2xl mb-2 block">⏱️</span>
                <p className="text-xs text-dark-400 mb-1">Prep Time</p>
                <p className="text-sm font-semibold text-dark-100">{prep_time}</p>
              </div>
            )}
            {cook_time && (
              <div className="bg-dark-800 rounded-xl p-4 text-center border border-dark-700">
                <span className="text-2xl mb-2 block">🔥</span>
                <p className="text-xs text-dark-400 mb-1">Cook Time</p>
                <p className="text-sm font-semibold text-dark-100">{cook_time}</p>
              </div>
            )}
            {servings && (
              <div className="bg-dark-800 rounded-xl p-4 text-center border border-dark-700">
                <span className="text-2xl mb-2 block">👥</span>
                <p className="text-xs text-dark-400 mb-1">Servings</p>
                <p className="text-sm font-semibold text-dark-100">{servings}</p>
              </div>
            )}
            {difficulty && (
              <div className="bg-dark-800 rounded-xl p-4 text-center border border-dark-700">
                <span className="text-2xl mb-2 block">📊</span>
                <p className="text-xs text-dark-400 mb-1">Difficulty</p>
                <p className="text-sm font-semibold text-dark-100">{difficulty.value}</p>
              </div>
            )}
          </div>

          {/* Ingredients */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-dark-50 mb-6 flex items-center gap-3">
              <span className="text-3xl">🥘</span>
              Ingredients
            </h2>
            <div className="bg-dark-800/50 rounded-2xl p-6 border border-dark-700">
              <div className="prose-dark">
                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                  {ingredients}
                </ReactMarkdown>
              </div>
            </div>
          </section>

          {/* Instructions */}
          <section>
            <h2 className="text-2xl font-bold text-dark-50 mb-6 flex items-center gap-3">
              <span className="text-3xl">👨‍🍳</span>
              Instructions
            </h2>
            <div className="bg-dark-800/50 rounded-2xl p-6 border border-dark-700">
              <div className="prose-dark">
                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                  {instructions}
                </ReactMarkdown>
              </div>
            </div>
          </section>
        </motion.div>
      </div>
    </article>
  );
}