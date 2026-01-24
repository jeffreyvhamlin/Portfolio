import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800 py-8 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col items-center space-y-4">
          <p className="text-gray-600 dark:text-gray-400 text-center flex items-center gap-2">
            Designed & Built with <Heart className="h-4 w-4 text-emerald-600 dark:text-emerald-400 fill-current" /> by Jeffrey Hamlin Vinod
          </p>
          <p className="text-gray-500 dark:text-gray-500 text-sm">
            © {currentYear} Jeffrey Hamlin Vinod. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-500">
            <span>Built with React • Tailwind CSS • Shadcn UI</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;