'use client';

import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent-900/20 via-dark-950 to-dark-950" />
      
      {/* Animated background elements */}
      <motion.div 
        className="absolute top-20 left-10 w-72 h-72 bg-accent-500/10 rounded-full blur-3xl"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ 
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute bottom-10 right-10 w-96 h-96 bg-accent-600/10 rounded-full blur-3xl"
        animate={{ 
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{ 
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="relative max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-6xl sm:text-7xl mb-6 block">🍳</span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-dark-50 mb-6 text-balance">
            Discover{' '}
            <span className="gradient-text">Delicious</span>
            {' '}Recipes
          </h1>
          <p className="text-lg sm:text-xl text-dark-300 max-w-2xl mx-auto mb-8 text-balance">
            From comforting Italian pasta to healthy salads and indulgent desserts. 
            Find your next favorite recipe and bring joy to your kitchen.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <div className="flex items-center gap-2 px-4 py-2 bg-dark-800/50 rounded-full border border-dark-700">
            <span>🥗</span>
            <span className="text-dark-200 text-sm">Healthy</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-dark-800/50 rounded-full border border-dark-700">
            <span>🍝</span>
            <span className="text-dark-200 text-sm">Italian</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-dark-800/50 rounded-full border border-dark-700">
            <span>🍰</span>
            <span className="text-dark-200 text-sm">Desserts</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}