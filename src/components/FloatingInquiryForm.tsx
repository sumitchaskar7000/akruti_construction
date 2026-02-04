import React, { useState } from 'react';
import { LeadFormData } from '../types';
import { Button } from './Button';

interface FloatingInquiryFormProps {
  onClose: () => void;
}

export const FloatingInquiryForm: React.FC<FloatingInquiryFormProps> = ({ onClose }) => {
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

    setTimeout(() => {
      alert('Thank you for your inquiry! We will contact you soon.');
      setFormData({
        name: '',
        phone: '',
        email: '',
        message: '',
        consent: false,
      });
      setIsSubmitting(false);
      onClose();
    }, 1000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fade-in">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md max-h-[90vh] overflow-y-auto animate-slide-up">
        <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-gray-900">Quick Inquiry</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
            aria-label="Close"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div>
            <label htmlFor="floating-name" className="block text-sm font-semibold text-gray-700 mb-2">
              Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="floating-name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-200 bg-gray-50 focus:bg-white"
              placeholder="Enter your name"
            />
          </div>

          <div>
            <label htmlFor="floating-phone" className="block text-sm font-semibold text-gray-700 mb-2">
              Phone <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              id="floating-phone"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-200 bg-gray-50 focus:bg-white"
              placeholder="Enter your phone number"
            />
          </div>

          <div>
            <label htmlFor="floating-email" className="block text-sm font-semibold text-gray-700 mb-2">
              Email
            </label>
            <input
              type="email"
              id="floating-email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-200 bg-gray-50 focus:bg-white"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label htmlFor="floating-message" className="block text-sm font-semibold text-gray-700 mb-2">
              Message
            </label>
            <textarea
              id="floating-message"
              name="message"
              rows={3}
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-200 bg-gray-50 focus:bg-white resize-none"
              placeholder="Tell us about your requirements"
            />
          </div>

          <div className="flex items-start">
            <input
              type="checkbox"
              id="floating-consent"
              name="consent"
              required
              checked={formData.consent}
              onChange={handleChange}
              className="mt-1 mr-3 w-5 h-5 text-primary border-gray-300 rounded focus:ring-primary focus:ring-2"
            />
            <label htmlFor="floating-consent" className="text-sm text-gray-600">
              I have read and agree to the{' '}
              <a href="/privacy-policy" className="text-primary hover:underline font-semibold">
                Privacy Policy
              </a>
            </label>
          </div>

          <div className="flex gap-3 pt-2">
            <Button
              type="submit"
              variant="primary"
              disabled={isSubmitting}
              className="flex-1"
            >
              {isSubmitting ? 'Submitting...' : 'Submit'}
            </Button>
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-8 py-4 rounded-xl font-semibold border-2 border-gray-300 text-gray-700 hover:bg-gray-100 transition-all duration-300"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

