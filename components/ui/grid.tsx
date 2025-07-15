import React from 'react';
import { Brands, ProductContent } from '@/types/type';
import Image from 'next/image';
import { CiStar } from 'react-icons/ci'
import { Button } from './button';


type GridProps = {
    items: ProductContent[][]
    cover: Brands
};

function GridLayout({ items, cover }: GridProps) {
   const data : ProductContent[] = items.flat().slice(0,4)
    return (
        <div className='flex flex-col space-y-3 bg-white-300 w-full max-w-[1240px]'>

            <div className='relative rounded-2xl sm:rounded-lg overflow-hidden h-44 md:h-auto'>
                <Image
                    src={cover.image.url}
                    alt={cover.image.alt || cover.name}
                    className='w-full h-full object-cover'
                />
                <div className="flex-col h-full flex space-y-2 sm:space-y-3 items-center justify-center text-center bottom-0 absolute top-0 left-0 sm:ml-[21px] text-white font-bold px-4 rounded">
                    <h2 className='text-xl seris-font sm:text-3xl md:text-4xl lg:text-5xl'>
                        {cover.name}
                    </h2>
                    <Button variant={'outline'} className='md:h-12 md:w-32 lg:h-14 lg:w-36' >Learn more</Button>
                </div>
            </div>

            <div className="w-full grid gap-3 sm:grid-cols-2 md:grid-cols-4">
                {
                    // data.map(inArray =>
                        data.map((a, i) => (
                            <div
                            className='bg-box-500 text-white-300 rounded-2xl sm:rounded-lg overflow-hidden'
                            key={i}
                        >
                            <Image
                                className='w-full bg-cover'
                                src={a.images[0]}
                                alt={a.name}
                            />
                            <div className="grid grid-cols-2 space-y-1.3 pb-2 pt-1.5 px-5 sm:px-1.5 md:px-3 xl:px-5">
                                <p className='text-[1.8rem] md:text-[1.2rem] tracking-wider'>{a.name}</p>
                                <p className='text-right font-bold text-[1.65rem] md:text-[1rem]'>${a.price.rent}</p>
                                <div className="grid grid-cols-3 col-span-2">
                                    <p className='text-[#AAAAAA] grid-span col-span-2 text-[1.3rem] md:text-[1.1rem]'>{a.description}</p>
                                    <p className='text-[#AAAAAA] flex flex-row-reverse text-3xl md:text-2xl'><CiStar color='#AAAAAA' /></p>
                                </div>
                            </div>
                        </div>
                        ))
                    // )
                }
            </div>
        </div>
    );
};

export default GridLayout;
