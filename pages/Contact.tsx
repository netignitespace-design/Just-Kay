import React, { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Logic to send form data would go here
  };

  return (
    <div className="bg-stone-50 min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-serif text-stone-900 mb-4">Get in Touch</h1>
          <p className="text-stone-600">We'd love to hear from you. Here's how you can reach us.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
          
          {/* Contact Info */}
          <div className="space-y-12">
            <div>
                <h3 className="text-xl font-serif text-stone-900 mb-4">Visit Our Showroom</h3>
                <div className="flex items-start gap-4 text-stone-600">
                    <MapPin className="w-6 h-6 flex-shrink-0 mt-1" />
                    <p>Witkoppen Road, Sandton<br />Gauteng, 2191, South Africa</p>
                </div>
            </div>
            
            <div>
                <h3 className="text-xl font-serif text-stone-900 mb-4">Contact Info</h3>
                <div className="space-y-4 text-stone-600">
                    <div className="flex items-center gap-4">
                        <Mail className="w-6 h-6" />
                        <a href="mailto:hello@foamanddecor.com" className="hover:text-stone-900 transition-colors">hello@foamanddecor.com</a>
                    </div>
                    <div className="flex items-center gap-4">
                        <Phone className="w-6 h-6" />
                        <span>+27 60 501 1521</span>
                    </div>
                </div>
            </div>

            <div className="bg-stone-100 p-8 rounded-lg">
                <h3 className="font-serif text-stone-900 mb-2">Opening Hours</h3>
                <ul className="space-y-2 text-sm text-stone-600">
                    <li className="flex justify-between"><span>Mon - Fri</span> <span>10:00 AM - 7:00 PM</span></li>
                    <li className="flex justify-between"><span>Saturday</span> <span>11:00 AM - 6:00 PM</span></li>
                    <li className="flex justify-between"><span>Sunday</span> <span>Closed</span></li>
                </ul>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white p-8 shadow-sm border border-stone-200 rounded-lg">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4">
                    <CheckIcon />
                </div>
                <h3 className="text-2xl font-serif text-stone-900 mb-2">Message Sent</h3>
                <p className="text-stone-600">Thank you for reaching out. We'll get back to you within 24 hours.</p>
                <button onClick={() => setSubmitted(false)} className="mt-8 text-stone-900 underline">Send another message</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-stone-700">Name</label>
                  <input type="text" id="name" required className="mt-1 block w-full border-stone-300 rounded-md shadow-sm focus:ring-stone-500 focus:border-stone-500 bg-stone-50 px-4 py-2" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-stone-700">Email</label>
                  <input type="email" id="email" required className="mt-1 block w-full border-stone-300 rounded-md shadow-sm focus:ring-stone-500 focus:border-stone-500 bg-stone-50 px-4 py-2" />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-stone-700">Subject</label>
                  <select id="subject" className="mt-1 block w-full border-stone-300 rounded-md shadow-sm focus:ring-stone-500 focus:border-stone-500 bg-stone-50 px-4 py-2">
                    <option>General Inquiry</option>
                    <option>Order Status</option>
                    <option>Design Consultation</option>
                    <option>Returns</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-stone-700">Message</label>
                  <textarea id="message" rows={4} required className="mt-1 block w-full border-stone-300 rounded-md shadow-sm focus:ring-stone-500 focus:border-stone-500 bg-stone-50 px-4 py-2"></textarea>
                </div>
                <button type="submit" className="w-full bg-stone-900 text-white py-3 px-4 rounded-none hover:bg-stone-800 transition-colors">
                  Send Message
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </div>
  );
};

const CheckIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
)