import React from 'react'
import { categories } from '@/api/database'
import Image from 'next/image'
import Link from 'next/link'
import Grid from './Grid'

const Category = async () => {
  const category = categories

  return (
    <div className='mt-4 pt-16 z-60 bg-white-300 category-parent ease-out duration-200 w-full px-3'>
      <div className="grid max-w-[930px] bg-white-300 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:mt-14 gap-y-4 gap-x-8 px-2 mx-auto relative">
        {category.map((a, index) => (
          <Link
            key={index}
            href={`https://auto-gallery-kxqa.vercel.app/`}
            className='group border-[2px] border-[#D9D9D9] rounded-lg mx-auto p-2 flex flex-col justify-center items-center text-center hover:bg-gray-200 hover:scale-105 duration-150 ease-in-out'
          >
            <Image
              className='mb-2 p-4'
              src={a.imageUrl}
              alt={a.catName}
              width={160}
              height={100}
            />
            <h6 className="group-hover:text-blue-600 transition-colors">{a.catName}</h6>
          </Link>
        ))}
      </div>
      <div className="Top-categories pt-24">
        <h1 className='text-4xl w-full text-center seris-font'>Top Categoreis</h1>
      <div className="flex flex-col justify-center">
        <Grid />
      </div>
      </div>
      <div>
      </div>

    </div>
  )
}

export default Category
