import React from 'react';
import Link from 'next/link';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 z-50 bg-white dark:bg-dark shadow">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="text-3xl font-heading text-primary">Futdrop</Link>
          <nav className="space-x-4 hidden md:block">
            <a href="#retro" className="text-sm hover:text-secondary font-medium">Retro</a>
            <a href="#new" className="text-sm hover:text-secondary font-medium">New Season</a>
          </nav>
          <div className="flex items-center space-x-4">
            <button onClick={() => document.documentElement.classList.toggle('dark')} className="text-sm px-2 py-1 border rounded">🌓</button>
          </div>
        </div>
      </header>
      <main className="flex-1">{children}</main>
      <footer className="bg-dark text-white py-6 text-center text-sm">
        <p>© {new Date().getFullYear()} Futdrop. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Layout;
