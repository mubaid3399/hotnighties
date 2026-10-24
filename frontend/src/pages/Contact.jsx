import { useState } from 'react';
import useSEO from '../utils/useSEO';
import { notify } from '../utils/toast';
import { MessageCircle, Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react';

const Contact = () => {
  useSEO({
    title: 'Contact Us | Customer Support',
    description: 'Get in touch with Hotnighties customer support. Chat on WhatsApp at 0306 5363744 or email Help@hotnighties.pk for order inquiries and sizing assistance.',
    canonical: 'https://hotnighties.pk/contact',
  });

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    comment: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.email.trim() || !formData.comment.trim()) {
      notify('Please enter your email and comment', 'error');
      return;
    }

    setIsSubmitting(true);

    // Simulate sending message
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      notify('Message sent! Our team will contact you shortly.', 'success');
      setFormData({ name: '', phone: '', email: '', comment: '' });
    }, 600);
  };

  return (
    <div className="w-full bg-white pb-20 pt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col lg:flex-row justify-between gap-12 lg:gap-20">
          
          {/* Left Column: Contact Form */}
          <div className="flex-1 w-full">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Send us a Message</h1>
            <p className="text-sm text-gray-600 mb-8">
              Ask us anything about sizing, discreet deliveries, or orders. We are here to help.
            </p>

            {submitted ? (
              <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-8 text-center max-w-lg">
                <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-3">
                  <CheckCircle2 size={28} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-1">Thank You!</h3>
                <p className="text-gray-600 text-sm mb-6">
                  Your message has been received. Our support team will get back to you via email or WhatsApp within a few hours.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="px-5 py-2.5 bg-[#501524] text-white rounded-lg text-xs font-semibold hover:bg-[#3a0f1a] transition-colors cursor-pointer"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name */}
                <div className="flex flex-col">
                  <label htmlFor="name" className="text-sm font-medium text-gray-700 mb-1">
                    Your Name
                  </label>
                  <input 
                    type="text" 
                    id="name" 
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Ayesha Khan"
                    className="w-full border border-gray-300 rounded-lg px-3.5 py-2.5 text-sm focus:outline-none focus:border-[#501524] focus:ring-1 focus:ring-[#501524] transition-colors"
                  />
                </div>

                {/* Phone Number */}
                <div className="flex flex-col">
                  <label htmlFor="phone" className="text-sm font-medium text-gray-700 mb-1">
                    Phone / WhatsApp Number
                  </label>
                  <input 
                    type="tel" 
                    id="phone" 
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="e.g. 0300 1234567"
                    className="w-full border border-gray-300 rounded-lg px-3.5 py-2.5 text-sm focus:outline-none focus:border-[#501524] focus:ring-1 focus:ring-[#501524] transition-colors"
                  />
                </div>

                {/* Email */}
                <div className="flex flex-col">
                  <label htmlFor="email" className="text-sm font-medium text-gray-700 mb-1">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input 
                    type="email" 
                    id="email" 
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="name@example.com"
                    className="w-full border border-gray-300 rounded-lg px-3.5 py-2.5 text-sm focus:outline-none focus:border-[#501524] focus:ring-1 focus:ring-[#501524] transition-colors"
                  />
                </div>

                {/* Comment */}
                <div className="flex flex-col">
                  <label htmlFor="comment" className="text-sm font-medium text-gray-700 mb-1">
                    Message / Question <span className="text-red-500">*</span>
                  </label>
                  <textarea 
                    id="comment" 
                    rows="5"
                    required
                    value={formData.comment}
                    onChange={handleChange}
                    placeholder="How can we assist you today?"
                    className="w-full border border-gray-300 rounded-lg px-3.5 py-2.5 text-sm focus:outline-none focus:border-[#501524] focus:ring-1 focus:ring-[#501524] transition-colors resize-none"
                  ></textarea>
                </div>
                
                {/* Submit Button */}
                <div className="flex items-center gap-3 pt-2">
                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="bg-[#501524] cursor-pointer text-white px-7 py-3 text-sm font-medium rounded-lg hover:bg-[#3a0f1a] transition-all flex items-center gap-2 shadow-sm disabled:opacity-50"
                  >
                    <Send size={15} />
                    <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                  </button>

                  <a
                    href="https://wa.me/923065363744?text=Hi%20Hotnighties%2C%20I%20have%20an%20inquiry"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-3 rounded-lg border border-emerald-500 text-emerald-700 hover:bg-emerald-50 text-xs sm:text-sm font-semibold transition-colors"
                  >
                    <MessageCircle size={16} /> Instant WhatsApp
                  </a>
                </div>
              </form>
            )}
          </div>

          {/* Right Column: Live Help / Info */}
          <div className="flex-1 w-full bg-[#FAFAFA] p-8 sm:p-10 rounded-2xl border border-gray-100 h-fit">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Direct Support</h2>
            
            <p className="text-sm text-gray-600 mb-6 leading-relaxed">
              We value your discretion and peace of mind. Feel free to contact our customer representatives directly.
            </p>

            {/* Contact Details */}
            <div className="space-y-4 mb-8 text-sm text-gray-700">
              <div className="flex items-center gap-3">
                <Phone size={18} className="text-[#501524]" />
                <div>
                  <span className="font-bold text-gray-900 block">Phone Support:</span>
                  <a href="tel:03065363744" className="hover:text-[#501524] transition-colors">
                    0306 5363744
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <MessageCircle size={18} className="text-emerald-600" />
                <div>
                  <span className="font-bold text-gray-900 block">WhatsApp Desk:</span>
                  <a
                    href="https://wa.me/923065363744?text=Hi%20Hotnighties%2C%20I%20have%20an%20inquiry"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-emerald-600 hover:underline"
                  >
                    0306 5363744
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Mail size={18} className="text-[#501524]" />
                <div>
                  <span className="font-bold text-gray-900 block">Email:</span>
                  <a href="mailto:Help@hotnighties.pk" className="hover:text-[#501524] transition-colors">
                    Help@hotnighties.pk
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-[#501524] mt-0.5" />
                <div>
                  <span className="font-bold text-gray-900 block">Dispatch Hub:</span>
                  <span>Plot 3/321 Behan MCHS, Karachi, Pakistan</span>
                </div>
              </div>
            </div>

            {/* Operating Hours */}
            <div className="border-t border-gray-200/80 pt-6">
              <h3 className="font-bold text-gray-900 text-sm mb-3">Customer Desk Hours</h3>
              <div className="space-y-2 text-xs text-gray-600 leading-relaxed">
                <p><strong>Monday to Saturday:</strong> 10:30 AM – 9:00 PM</p>
                <p><strong>Friday:</strong> 3:00 PM – 9:00 PM</p>
                <p><strong>Sunday:</strong> Off (WhatsApp messages answered in order)</p>
              </div>
            </div>
            
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Contact;