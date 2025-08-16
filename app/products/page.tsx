import { Metadata } from 'next'
import Image from 'next/image'
import { db } from '@/api/database'
import { FaRegHeart } from "react-icons/fa"
import { MdNewReleases } from "react-icons/md"
import { IoMdCheckmark, IoMdClose } from "react-icons/io"
import { MdLocalOffer } from "react-icons/md"

export const metadata: Metadata = {
  title: 'Our Vehicles | Auto Gallery',
  description: 'Browse our exclusive collection of luxury and performance vehicles.',
  keywords: ['cars', 'luxury vehicles', 'auto sales', 'premium cars'],
}

const ProductCard = ({ product }: { product: any }) => (
  <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
    <div className="relative">
      <div className="aspect-[16/9] relative overflow-hidden">
        <Image
          src={product.images[0]}
          alt={product.name}
          fill
          className="object-cover"
          priority
        />
      </div>
      <button 
        className="absolute top-3 right-3 p-2 bg-white rounded-full"
        aria-label="Add to favorites"
      >
        <FaRegHeart className="text-gray-600 text-xl" />
      </button>
      {product.isNew && (
        <div className="absolute top-3 left-3 bg-blue-500 text-white px-2 py-1 rounded-full flex items-center gap-1">
          <MdNewReleases />
          <span className="text-sm">New</span>
        </div>
      )}
    </div>

    <div className="p-4 space-y-2">
      <div className="flex justify-between items-start">
        <h3 className="text-xl font-semibold text-gray-800">{product.name}</h3>
        <div className="text-right">
          <p className="text-lg font-bold text-blue-600">${product.price.rent.toLocaleString()}</p>
          {product.price.discount > 0 && (
            <div className="flex items-center text-red-500 gap-1">
              <MdLocalOffer />
              <span className="text-sm">-{product.price.discount}%</span>
            </div>
          )}
        </div>
      </div>
      <p className="text-gray-600">{product.description}</p>
      <div className="flex justify-between items-center pt-2">
        <div className={`flex items-center gap-1 ${product.inStock ? "text-green-600" : "text-red-600"}`}>
          {product.inStock ? <IoMdCheckmark /> : <IoMdClose />}
          <span className="text-sm">{product.inStock ? "In Stock" : "Out of Stock"}</span>
        </div>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
          View Details
        </button>
      </div>
    </div>
  </div>
)

export default async function ProductsPage() {
  const products = await db.product.findMany()
  const allProducts = products.flatMap(product => product.content)

  return (
    <main className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Vehicles</h1>
          <p className="text-gray-600 max-w-2xl">
            Discover our exclusive collection of premium vehicles. Each car has been carefully 
            selected to provide you with the ultimate driving experience.
          </p>
        </div>

        <div className="mb-8 p-4 ">
          <div className="flex flex-wrap gap-4">
            <select className="px-4 py-2 border rounded-md text-gray-700">
              <option value="">Sort by Price</option>
              <option value="low">Lowest first</option>
              <option value="high">Highest first</option>
            </select>
            
            <select className="px-4 py-2 border rounded-md text-gray-700">
              <option value="">Filter by Brand</option>
              <option value="ferrari">Ferrari</option>
              <option value="bmw">BMW</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {allProducts.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
      </div>
    </main>
  )
}