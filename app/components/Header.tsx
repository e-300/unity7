"use client";

import { useState, useEffect } from 'react';
import Logo from './Logo';

export default function Header() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const controlNavbar = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down & past 100px threshold
        setIsVisible(false);
      } else {
        // Scrolling up
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', controlNavbar);
    
    return () => {
      window.removeEventListener('scroll', controlNavbar);
    };
  }, [lastScrollY]);

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 px-6 py-4 bg-black/90 backdrop-blur-md text-white transition-transform duration-300 ease-in-out ${
      isVisible ? 'translate-y-0' : '-translate-y-full'
    }`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center space-x-3">
          <div className="flex items-center space-x-0.9">
            <Logo 
              width={100} 
              height={100} 
              className="hover:opacity-80 transition-opacity duration-200" 
            />
            <span className="text-4xl font-bold text-white">Unity7</span>
          </div>
        </div>

        {/* Navigation Menu */}
        <nav className="hidden md:flex items-center space-x-8">
          <a 
            href="#home"
            onClick={(e) => handleSmoothScroll(e, 'home')}
            className="text-white hover:text-green-400 transition-colors duration-200"
          >
            Home
          </a>
          <a 
            href="#services"
            onClick={(e) => handleSmoothScroll(e, 'services')}
            className="text-gray-300 hover:text-green-400 transition-colors duration-200"
          >
            Services
          </a>
          <a 
            href="#process"
            onClick={(e) => handleSmoothScroll(e, 'process')}
            className="text-gray-300 hover:text-green-400 transition-colors duration-200"
          >
            Process
          </a>
          <a 
            href="#industries"
            onClick={(e) => handleSmoothScroll(e, 'industries')}
            className="text-gray-300 hover:text-green-400 transition-colors duration-200"
          >
            Industries
          </a>
          <a 
            href="#support"
            onClick={(e) => handleSmoothScroll(e, 'support')}
            className="text-gray-300 hover:text-green-400 transition-colors duration-200"
          >
            Support
          </a>
        </nav>

        {/* Login | Register */}
        <button 
          onClick={(e) => handleSmoothScroll(e as any, 'support')}
          className="text-gray-300 hover:text-green-400 transition-colors duration-200"
          //onClick={(e) => }
        >
          Login | Register
        </button>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
  );
}