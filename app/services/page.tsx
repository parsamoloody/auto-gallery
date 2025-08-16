import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Services | Auto Gallery',
  description: 'Explore our comprehensive automotive services including sales, maintenance, detailing, and financing options.',
  keywords: ['auto services', 'car maintenance', 'vehicle detailing', 'auto financing', 'car sales'],
}

const services = [
  {
    title: "Vehicle Sales",
    description: "Browse our exclusive collection of luxury and performance vehicles. New and pre-owned options available.",
    icon: "🚗"
  },
  {
    title: "Vehicle Maintenance",
    description: "Factory-certified technicians providing comprehensive maintenance services for all luxury brands.",
    icon: "🔧"
  },
  {
    title: "Professional Detailing",
    description: "Premium detailing services to keep your vehicle looking showroom-fresh.",
    icon: "✨"
  },
  {
    title: "Financing Solutions",
    description: "Flexible financing options tailored to your needs with competitive rates.",
    icon: "💳"
  },
  {
    title: "Vehicle Trade-In",
    description: "Get the best value for your current vehicle with our fair trade-in program.",
    icon: "🔄"
  },
  {
    title: "Custom Orders",
    description: "Customize your dream vehicle with our specialized ordering service.",
    icon: "📋"
  }
]

export default async function ServicesPage() {
  return (
    <main className="bg-black min-h-screen text-white">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-12">Our Services</h1>
        <p className="text-lg text-center max-w-3xl mx-auto mb-16 text-gray-300">
          At Auto Gallery, we offer a comprehensive range of automotive services
          designed to meet all your vehicle needs with the highest standards of quality and luxury.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-gray-900 p-6 rounded-lg hover:bg-gray-800 transition-colors duration-300"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h2 className="text-xl font-semibold mb-3">{service.title}</h2>
              <p className="text-gray-400">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold mb-4">Need Assistance?</h2>
          <p className="text-gray-300 mb-6">
            Contact our team to learn more about our services or schedule an appointment.
          </p>
          <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg transition-colors duration-300">
            Contact Us
          </button>
        </div>
      </div>
    </main>
  )
}