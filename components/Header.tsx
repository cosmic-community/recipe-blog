'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Header() {
  return (
    <motion.header 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 bg-dark-950/80 backdrop-blur-xl border-b border-dark-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-3 group">
            <motion.span 
              className="text-3xl"
              whileHover={{ rotate: [0, -10, 10, 0] }}
              transition={{ duration: 0.5 }}
            >
              🍳
            </motion.span>
            <span className="text-xl font-bold text-dark-50 group-hover:text-accent-400 transition-colors">
              Recipe Blog
            </span>
          </Link>
          
          <nav className="hidden sm:flex items-center gap-6">
            <Link 
              href="/" 
              className="text-dark-300 hover:text-accent-400 transition-colors font-medium"
            >
              Home
            </Link>
            <Link 
              href="/#recipes" 
              className="text-dark-300 hover:text-accent-400 transition-colors font-medium"
            >
              Recipes
            </Link>
          </nav>
        </div>
      </div>
    </motion.header>
  );
}