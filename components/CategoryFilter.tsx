'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Category } from '@/types';

interface CategoryFilterProps {
  categories: Category[];
}

export default function CategoryFilter({ categories }: CategoryFilterProps) {
  const [isOpen, setIsOpen] = useState(false);

  if (!categories || categories.length === 0) {
    return null;
  }

  const categoryEmojis: Record<string, string> = {
    italian: '🍝',
    desserts: '🍰',
    healthy: '🥗',
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-2 bg-dark-800 hover:bg-dark-700 rounded-xl border border-dark-700 text-dark-200 transition-colors"
      >
        <span>🏷️</span>
        <span className="text-sm font-medium">Categories</span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          ▼
        </motion.span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute right-0 top-full mt-2 w-48 bg-dark-800 rounded-xl border border-dark-700 shadow-xl overflow-hidden z-50"
          >
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setIsOpen(false)}
                className="w-full flex items-center gap-3 px-4 py-3 text-left text-dark-200 hover:bg-dark-700 hover:text-accent-400 transition-colors"
              >
                <span>{categoryEmojis[category.slug] || '📁'}</span>
                <span className="text-sm font-medium">{category.title}</span>
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}