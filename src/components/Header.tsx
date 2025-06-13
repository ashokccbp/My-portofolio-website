import React, { useState, useEffect } from 'react';
import { Menu, X, Code, User, Briefcase, Mail } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Code className={`w-8 h-8 ${isScrolled ? 'text-purple-600' : 'text-white'}`} />
            <span className={`text-xl font-bold ${isScrolled ? 'text-gray-900' : 'text-white'}`}>
              Ashok Kumar
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('hero')}
              className={`hover:text-purple-600 transition-colors ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className={`hover:text-purple-600 transition-colors ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className={`hover:text-purple-600 transition-colors ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className={`hover:text-purple-600 transition-colors ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              Contact
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden ${isScrolled ? 'text-gray-900' : 'text-white'}`}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 bg-white rounded-lg shadow-lg">
            <div className="flex flex-col space-y-4 px-4">
              <button
                onClick={() => scrollToSection('hero')}
                className="flex items-center space-x-2 text-gray-700 hover:text-purple-600 transition-colors"
              >
                <User className="w-4 h-4" />
                <span>Home</span>
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="flex items-center space-x-2 text-gray-700 hover:text-purple-600 transition-colors"
              >
                <User className="w-4 h-4" />
                <span>About</span>
              </button>
              <button
                onClick={() => scrollToSection('projects')}
                className="flex items-center space-x-2 text-gray-700 hover:text-purple-600 transition-colors"
              >
                <Briefcase className="w-4 h-4" />
                <span>Projects</span>
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="flex items-center space-x-2 text-gray-700 hover:text-purple-600 transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>Contact</span>
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;