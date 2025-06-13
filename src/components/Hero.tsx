import React from 'react';
import { ChevronDown, Download, Github, Linkedin, Mail } from 'lucide-react';
import Scene3D from './Scene3D';

const Hero: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* 3D Scene */}
      <div className="absolute inset-0 z-10">
        <Scene3D />
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-6 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in leading-tight">
            <span className="block mb-2">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent drop-shadow-2xl">
                Ashok Kumar Reddy
              </span>
            </span>
            <span className="block">
              <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent drop-shadow-2xl animate-pulse">
                Gajjehalli
              </span>
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-gray-300 animate-fade-in-delay font-medium">
            Full Stack Developer & Problem Solver
          </p>
          
          <p className="text-lg mb-12 text-gray-400 max-w-2xl mx-auto animate-fade-in-delay-2 leading-relaxed">
            Passionate about creating innovative web solutions with modern technologies. 
            Specializing in React, Node.js, and building scalable applications that make a difference.
          </p>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-12 animate-fade-in-delay-3">
            <a
              href="https://github.com/ashokccbp"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-purple-500/25"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com/in/ashokccbp"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/25"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="mailto:ashokk97918@gmail.com"
              className="p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-pink-500/25"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-delay-4">
            <button
              onClick={() => scrollToSection('projects')}
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl hover:shadow-purple-500/25"
            >
              View My Work
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-4 border-2 border-white/30 rounded-full font-semibold hover:bg-white/10 transition-all duration-300 hover:scale-105 backdrop-blur-sm hover:border-white/50"
            >
              Get In Touch
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <button
          onClick={() => scrollToSection('about')}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hover:scale-110 transition-transform duration-300"
        >
          <ChevronDown className="w-8 h-8 text-white/70 hover:text-white" />
        </button>
      </div>
    </section>
  );
};

export default Hero;