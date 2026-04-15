import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-serif">La Cuisine</div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-8">
            <button onClick={() => scrollToSection('home')} className="hover:text-amber-700 transition-colors">
              Home
            </button>
            <button onClick={() => scrollToSection('about')} className="hover:text-amber-700 transition-colors">
              About
            </button>
            <button onClick={() => scrollToSection('menu')} className="hover:text-amber-700 transition-colors">
              Menu
            </button>
            <button onClick={() => scrollToSection('gallery')} className="hover:text-amber-700 transition-colors">
              Gallery
            </button>
            <button onClick={() => scrollToSection('contact')} className="hover:text-amber-700 transition-colors">
              Contact
            </button>
          </nav>

          <button 
            onClick={() => scrollToSection('contact')} 
            className="hidden md:block px-6 py-2 bg-amber-700 text-white rounded hover:bg-amber-800 transition-colors"
          >
            Reserve Table
          </button>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 flex flex-col gap-4">
            <button onClick={() => scrollToSection('home')} className="text-left hover:text-amber-700 transition-colors">
              Home
            </button>
            <button onClick={() => scrollToSection('about')} className="text-left hover:text-amber-700 transition-colors">
              About
            </button>
            <button onClick={() => scrollToSection('menu')} className="text-left hover:text-amber-700 transition-colors">
              Menu
            </button>
            <button onClick={() => scrollToSection('gallery')} className="text-left hover:text-amber-700 transition-colors">
              Gallery
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-left hover:text-amber-700 transition-colors">
              Contact
            </button>
            <button 
              onClick={() => scrollToSection('contact')} 
              className="px-6 py-2 bg-amber-700 text-white rounded hover:bg-amber-800 transition-colors text-left"
            >
              Reserve Table
            </button>
          </nav>
        )}
      </div>
    </header>
  );
}
