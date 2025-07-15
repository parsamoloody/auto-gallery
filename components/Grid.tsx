'use client'
import React, { useCallback, useEffect, useState } from 'react'
import GridLayout from './ui/grid'
import filter from '@/api/filters'
import { db } from '@/api/database'
import { Brands, Product, ProductContent } from '@/types/type'
import { cn } from '@/lib/utils'

const Grid = () => {
    const [productContent, setProductContent] = useState<ProductContent[][]>([])
    const [productData, setProductData] = useState<Product[]>([])
    const [topBrand, SetTopBrand] = useState<Brands>()
    const [isActive, setIsActive] = useState(0)

    const handleDataFetching = useCallback(async (code: number) => {
        try {
            const brandData = await db.brands.findById(String(code))
            switch (code) {
                case 0:
                    setProductData(await filter.product.byStock(true))
                    break
                case 1:
                    setProductData(await filter.product.byNew(false))
                    break
                case 2:
                    setProductData(await db.product.findMany())
                    break
                case 3:
                    setProductData(await filter.product.byDiscount(true))
                    break
                case 4:
                    setProductData(await filter.product.byPrice({ min: 0, max: 10000000 }))
                    break
                default:
                    throw new Error('Invalid filter code')
            }
            SetTopBrand(brandData)
            setIsActive(code)
        } catch (error) {
            console.error('Error fetching data:', error)
        }
    }, [])

    useEffect(() => {
        handleDataFetching(0)
    })

    useEffect(() => {
        if (productData.length) {
            const mapped = productData.map(p => p.content)
            setProductContent(mapped)

        }
    }, [productData])

    const TopFilters = [
        { title: 'In Stock', code: 0 },
        { title: 'Used Cars', code: 1 },
        { title: 'Any Modals', code: 2 },
        { title: 'Discounts', code: 3 },
        { title: 'All Prices', code: 4 }
    ]

    return (
        <>
            <ul className='flex flex-wrap justify-center space-x-6 pt-7 mb-8 border-b border-gray-500'>
                {TopFilters.map((filter, i) => (
                    <li
                        key={i}
                        onClick={() => handleDataFetching(filter.code)}
                        className={cn('cursor-pointer pb-2', (isActive === filter.code) ? 'border-b-2' : '')}
                    >
                        {filter.title}
                    </li>
                ))}
            </ul>

            <div className='flex justify-center'>
                {
                    topBrand && (
                        <GridLayout cover={topBrand} items={productContent} />
                    )
                }
            </div>
        </>
    )
}

export default Grid
