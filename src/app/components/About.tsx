import { ImageWithFallback } from './figma/ImageWithFallback';
import { Award, Clock, Users } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-serif mb-6">Our Story</h2>
            <p className="text-gray-700 mb-4">
              Since 1995, La Cuisine has been serving exceptional cuisine crafted from the finest 
              seasonal ingredients. Our passionate chefs combine traditional techniques with 
              innovative flavors to create unforgettable dining experiences.
            </p>
            <p className="text-gray-700 mb-8">
              We believe in the art of fine dining, where every dish tells a story and every 
              ingredient is carefully selected to ensure the highest quality and freshness.
            </p>
            
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <Award className="mx-auto mb-2 text-amber-700" size={32} />
                <div className="font-semibold">Award Winning</div>
                <div className="text-sm text-gray-600">Michelin Star</div>
              </div>
              <div className="text-center">
                <Clock className="mx-auto mb-2 text-amber-700" size={32} />
                <div className="font-semibold">29 Years</div>
                <div className="text-sm text-gray-600">Experience</div>
              </div>
              <div className="text-center">
                <Users className="mx-auto mb-2 text-amber-700" size={32} />
                <div className="font-semibold">Expert Team</div>
                <div className="text-sm text-gray-600">Master Chefs</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1622021142947-da7dedc7c39a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGVmJTIwY29va2luZyUyMGtpdGNoZW58ZW58MXx8fHwxNzc2MTk4NDI5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Chef cooking in kitchen"
              className="w-full h-[500px] object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
