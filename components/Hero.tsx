import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link'
import Image from 'next/image'
import car from '../public/assets/images/hero-main-ba.png'
import Svg from './ui/Svg'

const Hero = () => {
    return (
        <section className='text-white-300 px-12 -mt-26 overflow-hidden relative'>
            <div className="mx-auto *:py-20">
                <div className="grid justify-center custom-response mt-26">
                    <div className='custom-response-image w-full her-car-image-parent'>
                        <Image
                            className='w-full sm:w-full hero-car-image '
                            src={car}
                            width={350}
                            alt='white car'
                        />
                    </div>
                    <svg
                        className='-z-40 absolute -mt-52 -ml-12'
                        height="200" width="200" xmlns="http://www.w3.org/2000/svg">
                        <circle r="150" cx="50" cy="50" fill="#161C28" />
                    </svg>
                    <Svg w='1050' cls='-bottom-64 -right-96 lg:w-[550rem] xl:w-[2000px] xl:-right-[34rem] xl:-bottom-96' />
                    <Svg w='100' cls='top-0 right-22 sm:right-32 sm:mt-20 lg:mr-[28rem]' />
                    <Svg w='350' cls='lg:mt-[23rem] -ml-4 lg:w-[9rem]' />
                    <div className="customresponse-text space-y-8 max-w-[420px] lg:max-w-[35rem] xl:px-6">
                        <h1 className="text-5xl seris-font sm:text-6xl lg:text-8xl duration-200 ease-in-out">
                            Find Your
                            Dream Car
                        </h1>
                        <p className="text-2xl mb-8 opacity-90  text-[#CACACA] duration-200 ease-in-out">
                            Lorem Ipsum has been the industry,s standard dummy text ever since
                        </p>
                        <div className="mx-auto sm:mx-0 w-40 md:w-42 h-14 md:h-16">
                            <Button className='border-3 sm:text-[20px] w-full h-full text-center duration-200 ease-in-out hover:bg-neutral-900'>
                                <Link className='h-full w-full flex justify-center items-centr leading-10' href={'/'}>Read More</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero
