import React, { useState } from 'react';
import { Button } from './Button';
import { LeadFormData } from '../types';

interface LeadFormProps {
  onSubmit?: (data: LeadFormData) => void;
  title?: string;
  showWhatsApp?: boolean;
}

export const LeadForm: React.FC<LeadFormProps> = ({
  onSubmit,
  title = 'Register to Explore',
  showWhatsApp = true,
}) => {
  const [formData, setFormData] = useState<LeadFormData>({
    name: '',
    phone: '',
    email: '',
    message: '',
    consent: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      if (onSubmit) {
        onSubmit(formData);
      }
      alert('Thank you for your interest! We will contact you soon.');
      setFormData({
        name: '',
        phone: '',
        email: '',
        message: '',
        consent: false,
      });
      setIsSubmitting(false);
    }, 1000);
  };

  const whatsappNumber = '+919876543210'; // Replace with actual number
  const whatsappMessage = encodeURIComponent('Hello, I am interested in your projects.');
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl p-6 md:p-8 border border-white/20">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">{title}</h2>
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
            Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-200 bg-gray-50 focus:bg-white"
            placeholder="Enter your name"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
            Phone <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-200 bg-gray-50 focus:bg-white"
            placeholder="Enter your phone number"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-200 bg-gray-50 focus:bg-white"
            placeholder="Enter your email"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-200 bg-gray-50 focus:bg-white resize-none"
            placeholder="Tell us about your requirements"
          />
        </div>

        <div className="flex items-start">
          <input
            type="checkbox"
            id="consent"
            name="consent"
            required
            checked={formData.consent}
            onChange={handleChange}
            className="mt-1 mr-3 w-5 h-5 text-primary border-gray-300 rounded focus:ring-primary focus:ring-2"
          />
          <label htmlFor="consent" className="text-sm text-gray-600">
            I have read and agree to the{' '}
            <a href="/privacy-policy" className="text-primary hover:underline font-semibold">
              Privacy Policy
            </a>
          </label>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <Button
            type="submit"
            variant="primary"
            disabled={isSubmitting}
            className="flex-1"
          >
            {isSubmitting ? 'Submitting...' : 'Submit'}
          </Button>
          {showWhatsApp && (
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1"
            >
              <Button
                type="button"
                variant="secondary"
                className="w-full"
              >
                WhatsApp Us
              </Button>
            </a>
          )}
        </div>
      </form>
    </div>
  );
};
