import { ImageWithFallback } from './figma/ImageWithFallback';

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative h-screen flex items-center justify-center">
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1769773297747-bd00e31b33aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW5lJTIwZGluaW5nJTIwcmVzdGF1cmFudCUyMGludGVyaW9yfGVufDF8fHx8MTc3NjE5MzUyOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Fine dining restaurant interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
      
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-5xl md:text-7xl font-serif mb-6">Welcome to La Cuisine</h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
          Experience culinary excellence in an elegant atmosphere
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={() => scrollToSection('menu')}
            className="px-8 py-3 bg-amber-700 text-white rounded hover:bg-amber-800 transition-colors"
          >
            View Menu
          </button>
          <button 
            onClick={() => scrollToSection('contact')}
            className="px-8 py-3 bg-white text-amber-900 rounded hover:bg-gray-100 transition-colors"
          >
            Reserve Table
          </button>
        </div>
      </div>
    </section>
  );
}
