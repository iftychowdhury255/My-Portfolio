import React, { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: 'home' },
    { name: 'About', path: 'about' },
    { name: 'Course', path: 'certification' }, // ID match নিশ্চিত করুন
    { name: 'Projects', path: 'projects' }
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-[#0a192f]/90 backdrop-blur-md py-3 shadow-2xl border-b border-blue-500/10' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-6 lg:px-20 flex justify-between items-center">
        
        {/* Logo Section */}
        <ScrollLink to="home" smooth={true} className="flex items-center gap-2 group cursor-pointer">
          <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-xl group-hover:rotate-12 transition-transform">
            I
          </div>
          <div className="text-xl font-bold tracking-tighter text-white">
            CHOWDHURY<span className="text-blue-500">.</span>
          </div>
        </ScrollLink>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center gap-2">
          {navItems.map((item) => (
            <ScrollLink
              key={item.name}
              to={item.path}
              smooth={true}
              duration={700}
              offset={-80}
              spy={true}
              activeClass="text-blue-400 font-bold"
              className="relative px-4 py-2 text-sm font-medium text-gray-300 hover:text-blue-400 transition-all cursor-pointer group"
            >
              {item.name}
              <span className="absolute bottom-1 left-4 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full group-[.active]:w-full"></span>
            </ScrollLink>
          ))}
          
          <a href="/Resume.pdf" target="_blank" className="ml-4">
            <button className="border border-blue-500 text-blue-400 px-5 py-2 rounded-md text-sm font-semibold hover:bg-blue-500/10 transition-all transform hover:scale-105 active:scale-95">
              Resume
            </button>
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
          className="lg:hidden text-blue-400 focus:outline-none p-2 z-50"
        >
          <div className="w-6 h-5 relative flex flex-col justify-between">
            <span className={`h-0.5 w-full bg-current transform transition-all duration-300 origin-left ${menuOpen ? 'rotate-[42deg] translate-x-1' : ''}`}></span>
            <span className={`h-0.5 w-full bg-current transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`h-0.5 w-full bg-current transform transition-all duration-300 origin-left ${menuOpen ? '-rotate-[42deg] translate-x-1' : ''}`}></span>
          </div>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`lg:hidden fixed inset-0 w-full h-screen bg-[#0a192f] transition-all duration-500 ease-in-out z-40 ${
          menuOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          {navItems.map((item) => (
            <ScrollLink
              key={item.name}
              to={item.path}
              smooth={true}
              duration={700}
              offset={-80}
              spy={true}
              activeClass="text-blue-400 text-3xl"
              onClick={() => setMenuOpen(false)}
              className="text-gray-300 text-2xl font-semibold hover:text-blue-400 transition-colors"
            >
              {item.name}
            </ScrollLink>
          ))}
          <button className="mt-4 border border-blue-500 text-blue-400 px-10 py-3 rounded-md text-lg">
            Resume
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;