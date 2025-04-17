"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const pathname = usePathname();
  
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Experience', path: '/experience' },
    { name: 'Education', path: '/education' },
    { name: 'Projects', path: '/projects' },
    { name: 'Skills', path: '/skills' },
  ];

  return (
    <header className="bg-white dark:bg-gray-900 shadow-md sticky top-0 z-10">
      <div className="container mx-auto px-4">
        <nav className="flex flex-wrap items-center justify-between py-4">
          <div className="text-2xl font-bold">
            <Link href="/" className="text-blue-600 hover:text-blue-800">
              Julius Henriques
            </Link>
          </div>
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link 
                key={item.path} 
                href={item.path}
                className={`text-base font-medium ${
                  pathname === item.path 
                    ? 'text-blue-600 border-b-2 border-blue-600' 
                    : 'text-gray-600 dark:text-gray-300 hover:text-blue-600'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="md:hidden">
            <button className="text-gray-600 dark:text-gray-300 hover:text-blue-600">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
} 