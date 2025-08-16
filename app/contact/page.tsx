import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us | Auto Gallery',
  description: 'Get in touch with Auto Gallery. Contact us for inquiries about our vehicles, services, or to schedule an appointment.',
  keywords: ['contact', 'auto gallery', 'car dealership contact', 'automotive inquiries'],
}

export default function ContactPage() {
  return (
    <main className="bg-black min-h-screen text-white py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">Contact Us</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-gray-900 p-8 rounded-lg">
            <h2 className="text-2xl font-semibold mb-6">Send us a message</h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full p-3 bg-gray-800 rounded-lg focus:ring-2 focus:ring-red-600 outline-none"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full p-3 bg-gray-800 rounded-lg focus:ring-2 focus:ring-red-600 outline-none"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full p-3 bg-gray-800 rounded-lg focus:ring-2 focus:ring-red-600 outline-none"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full p-3 bg-gray-800 rounded-lg focus:ring-2 focus:ring-red-600 outline-none"
                  required
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg transition-colors duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
          
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-gray-900 p-8 rounded-lg">
              <h2 className="text-2xl font-semibold mb-6">Business Hours</h2>
              <div className="space-y-3 text-gray-300">
                <p>Monday - Friday: 9:00 AM - 7:00 PM</p>
                <p>Saturday: 10:00 AM - 6:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
            
            <div className="bg-gray-900 p-8 rounded-lg">
              <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
              <div className="space-y-3 text-gray-300">
                <p>📍 123 Auto Gallery Drive</p>
                <p>📱 (555) 123-4567</p>
                <p>✉️ info@autogallery.com</p>
              </div>
            </div>
            
            <div className="bg-gray-900 p-8 rounded-lg">
              <h2 className="text-2xl font-semibold mb-6">Follow Us</h2>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-300 hover:text-red-600">Facebook</a>
                <a href="#" className="text-gray-300 hover:text-red-600">Instagram</a>
                <a href="#" className="text-gray-300 hover:text-red-600">Twitter</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}