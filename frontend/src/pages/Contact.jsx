
const Contact = () => {
  return (
    <div className="w-full bg-white pb-20 pt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb or Title could go here, but reference is very clean */}
        
        <div className="flex flex-col lg:flex-row justify-between gap-12 lg:gap-20">
          
          {/* =========================================
              Left Column: Contact Form
          ========================================== */}
          <div className="flex-1 w-full">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Send us an email</h2>
            <p className="text-sm text-gray-600 mb-8">
              Ask us anything! We're here to help.
            </p>

            <form className="space-y-6">
              {/* Name */}
              <div className="flex flex-col">
                <label htmlFor="name" className="text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-[#501524] transition-colors"
                />
              </div>

              {/* Phone Number */}
              <div className="flex flex-col">
                <label htmlFor="phone" className="text-sm font-medium text-gray-700 mb-1">
                  Phone Number
                </label>
                <input 
                  type="tel" 
                  id="phone" 
                  className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-[#501524] transition-colors"
                />
              </div>

              {/* Email */}
              <div className="flex flex-col">
                <label htmlFor="email" className="text-sm font-medium text-gray-700 mb-1">
                  Email <span className="text-red-500">*</span>
                </label>
                <input 
                  type="email" 
                  id="email" 
                  required
                  className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-[#501524] transition-colors"
                />
              </div>

              {/* Comment */}
              <div className="flex flex-col">
                <label htmlFor="comment" className="text-sm font-medium text-gray-700 mb-1">
                  Comment <span className="text-red-500">*</span>
                </label>
                <textarea 
                  id="comment" 
                  rows="6"
                  required
                  className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-[#501524] transition-colors resize-none"
                ></textarea>
              </div>
              
              {/* Submit Button (Implied, standard) */}
              <button 
                type="submit" 
                className="bg-[#501524] cursor-pointer text-white px-8 py-3 text-sm font-medium hover:bg-[#3a0f1a] transition-colors mt-4"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* =========================================
              Right Column: Live Help / Info
          ========================================== */}
          <div className="flex-1 w-full bg-[#FAFAFA] p-8 sm:p-10 rounded-lg h-fit">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Live Help</h2>
            
            <p className="text-sm text-gray-600 mb-8 leading-relaxed">
              We'd love to hear from you - please use the form to send us your message or ideas.
            </p>

            {/* Contact Details */}
            <div className="space-y-3 mb-10 text-sm text-gray-700 leading-relaxed">
              <p>
                <span className="font-bold text-gray-900">Phone Number:</span>{' '}
                <a href="tel:03065363744" className="hover:text-[#501524] transition-colors">
                  0306 5363744
                </a>
              </p>
              <p>
                <span className="font-bold text-gray-900">WhatsApp:</span>{' '}
                <a
                  href="https://wa.me/923065363744?text=Hi%20Hotnighties%2C%20I%20have%20an%20inquiry"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-[#501524] hover:underline"
                >
                  0306 5363744
                </a>
              </p>
              <p><span className="font-bold text-gray-900">Email:</span> Help@hotnighties.pk</p>
              <p>
                <span className="font-bold text-gray-900">Address:</span> Plot 3/321 Behan MCHS, Karachi<br/>
                or use the form below to send us a message
              </p>
            </div>

            {/* Timings */}
            <div className="space-y-6 text-sm text-gray-700 leading-relaxed">
              <div>
                <p>Hyderi: Monday to Saturday 12 pm to 9 pm</p>
                <p>Friday timings 3 pm to 9 pm</p>
                <p>Sunday Off</p>
              </div>

              <div>
                <p>Clifton: Monday to Saturday</p>
                <p>10:30am to 8:00 pm</p>
                <p>Sunday off</p>
              </div>

              <div>
                <p>Bahadurabad: Monday to Saturday</p>
                <p>10:30Am to 8:00pm</p>
              </div>
            </div>
            
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Contact;