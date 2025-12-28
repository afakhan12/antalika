'use client'

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { NAV_LINKS } from '@/constants';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-white shadow-xl py-3' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <Image 
            src="logo_primary.png" 
            alt="Antalika Logo" 
            width={180} 
            height={70} 
            className={`h-auto transition-all duration-300 ${isScrolled ? 'max-h-[50px]' : 'max-h-[70px]'}`}
            priority
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-xs font-bold uppercase tracking-[0.15em] transition-all hover:text-red-600 ${
                !isScrolled && pathname === '/' ? 'text-white' : 'text-slate-700'
              } ${pathname === link.href ? 'text-red-600' : ''}`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <button 
          className="lg:hidden p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <div className={`w-6 h-0.5 mb-1.5 transition-all ${!isScrolled && pathname === '/' ? 'bg-white' : 'bg-slate-900'}`}></div>
          <div className={`w-6 h-0.5 mb-1.5 transition-all ${!isScrolled && pathname === '/' ? 'bg-white' : 'bg-slate-900'}`}></div>
          <div className={`w-6 h-0.5 transition-all ${!isScrolled && pathname === '/' ? 'bg-white' : 'bg-slate-900'}`}></div>
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden bg-white fixed inset-0 z-[60] p-10 flex flex-col items-center justify-center space-y-8 animate-in fade-in duration-300">
          <button onClick={() => setMobileMenuOpen(false)} className="absolute top-8 right-8 text-3xl">&times;</button>
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-2xl font-black text-slate-900 uppercase tracking-tighter"
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
