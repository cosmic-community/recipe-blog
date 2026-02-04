export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-dark-900 border-t border-dark-800 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <span className="text-3xl">🍳</span>
            <span className="text-xl font-bold text-dark-50">Recipe Blog</span>
          </div>
          
          <p className="text-dark-400 text-sm text-center md:text-right">
            © {currentYear} Recipe Blog. Crafted with love and delicious ingredients.
          </p>
        </div>
      </div>
    </footer>
  );
}