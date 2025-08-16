import React from 'react';
import { Brands, ProductContent } from '@/types/type';
import Image from 'next/image';
import { CiStar } from 'react-icons/ci';
import { Button } from './button';
import { cn } from '@/lib/utils';
import Link from 'next/link';


type GridProps = {
    items: ProductContent[][]
    cover: Brands
};

const ProductCard = ({ product }: { product: ProductContent }) => (
    <div className='group bg-box-500 text-white-300 rounded-2xl sm:rounded-lg overflow-hidden'>
        <div className='relative aspect-[16/9] overflow-hidden'>
            <Image
                className='w-full h-full object-cover'
                src={product.images[0]}
                alt={product.name}
                width={400}
                height={225}
                priority
                loading="eager"
            />
        </div>
        <div className="p-4 space-y-2">
            <div className="flex justify-between items-center">
                <h3 className='text-lg md:text-xl font-semibold truncate'>{product.name}</h3>
                <p className='font-bold text-lg md:text-xl text-red-500'>${product.price.rent}</p>
            </div>
            <div className="flex justify-between items-center">
                <p className='text-gray-400 text-sm md:text-base line-clamp-1'>{product.description}</p>
                <CiStar className="text-2xl text-gray-400 hover:text-yellow-500 cursor-pointer" />
            </div>
        </div>
    </div>
);

const CoverSection = ({ cover }: { cover: Brands }) => (
    <div className='relative rounded-2xl sm:rounded-lg overflow-hidden h-[300px] md:h-[400px]'>
        <Image
            src={cover.image.url}
            alt={cover.image.alt || cover.name}
            className='w-full h-full object-cover'
            fill
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
        />
        <div className={cn(
            "absolute inset-0 flex flex-col items-center justify-center",
            "bg-gradient-to-t from-black/70 to-transparent"
        )}>
            <h2 className='text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 seris-font'>
                {cover.name}
            </h2>
            <Link href="/products">
                <Button
                    variant="outline"
                    className='md:h-12 md:w-32 lg:h-14 text-gray-300 lg:w-36 backdrop-blur-sm border-gray-600 cursor-pointer'
                >
                    Learn more
                </Button>
            </Link>
        </div>
    </div>
);

function GridLayout({ items, cover }: GridProps) {
    const data: ProductContent[] = React.useMemo(() =>
        items.flat().slice(0, 5),
        [items]
    );

    return (
        <section className='space-y-6 w-full max-w-[1240px] mx-auto px-4'>
            <CoverSection cover={cover} />

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
                {data.map((product, index) => (
                    <ProductCard key={index} product={product} />
                ))}
            </div>
        </section>
    );
}

export default React.memo(GridLayout);
