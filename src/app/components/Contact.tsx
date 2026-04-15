import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { useState, FormEvent } from 'react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '2',
    message: ''
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // In a real application, this would send the reservation to a backend
    alert(`Thank you ${formData.name}! Your reservation request has been received. We'll contact you shortly to confirm.`);
    setFormData({
      name: '',
      email: '',
      phone: '',
      date: '',
      time: '',
      guests: '2',
      message: ''
    });
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif mb-4">Reserve a Table</h2>
          <p className="text-gray-600">Join us for an unforgettable dining experience</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-serif mb-6">Contact Information</h3>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <MapPin className="text-amber-700 flex-shrink-0 mt-1" size={24} />
                <div>
                  <h4 className="font-semibold mb-1">Address</h4>
                  <p className="text-gray-600">123 Gourmet Avenue<br />New York, NY 10001</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="text-amber-700 flex-shrink-0 mt-1" size={24} />
                <div>
                  <h4 className="font-semibold mb-1">Phone</h4>
                  <p className="text-gray-600">(555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Mail className="text-amber-700 flex-shrink-0 mt-1" size={24} />
                <div>
                  <h4 className="font-semibold mb-1">Email</h4>
                  <p className="text-gray-600">reservations@lacuisine.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Clock className="text-amber-700 flex-shrink-0 mt-1" size={24} />
                <div>
                  <h4 className="font-semibold mb-1">Hours</h4>
                  <p className="text-gray-600">
                    Monday - Friday: 5:00 PM - 10:00 PM<br />
                    Saturday - Sunday: 12:00 PM - 11:00 PM
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-100 p-6 rounded-lg">
              <h4 className="font-semibold mb-2">Special Events</h4>
              <p className="text-gray-600 text-sm">
                Interested in hosting a private event? Contact us to discuss our private dining 
                options and customized menus for your special occasion.
              </p>
            </div>
          </div>

          {/* Reservation Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block mb-2 font-medium">Name *</label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-amber-700"
                  placeholder="Your full name"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="email" className="block mb-2 font-medium">Email *</label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-amber-700"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block mb-2 font-medium">Phone *</label>
                  <input
                    type="tel"
                    id="phone"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-amber-700"
                    placeholder="(555) 123-4567"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="date" className="block mb-2 font-medium">Date *</label>
                  <input
                    type="date"
                    id="date"
                    required
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-amber-700"
                  />
                </div>

                <div>
                  <label htmlFor="time" className="block mb-2 font-medium">Time *</label>
                  <input
                    type="time"
                    id="time"
                    required
                    value={formData.time}
                    onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-amber-700"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="guests" className="block mb-2 font-medium">Number of Guests *</label>
                <select
                  id="guests"
                  required
                  value={formData.guests}
                  onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-amber-700"
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                    <option key={num} value={num}>
                      {num} {num === 1 ? 'Guest' : 'Guests'}
                    </option>
                  ))}
                  <option value="10+">10+ Guests (Private Event)</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block mb-2 font-medium">Special Requests</label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-amber-700 resize-none"
                  placeholder="Dietary restrictions, allergies, special occasions..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-amber-700 text-white rounded hover:bg-amber-800 transition-colors"
              >
                Submit Reservation
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
