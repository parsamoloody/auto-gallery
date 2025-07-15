import React from 'react'
import { IoArrowBackSharp } from 'react-icons/io5'
import { Button } from './ui/button'
import Image from 'next/image'
import frImage from '../public/assets/images/Rectangle 148.png'
import secImage from '../public/assets/images/Rectangle 150.png'

const Services = () => {
    return (
        <div className='flex justify-center bg-white-300 pb-36'>
            <div className="Top-categories pt-24 px-3 max-w-[1240px] xl:mt-16">
                <h1 className='text-4xl w-full text-center seris-font mb-12 '>Our Services</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="grid bg-box-500 items-center justify-center text-white-300 rounded-xl sm:rounded-lg py-4 px-6 lg:px-12 2xl:px-14">
                        <div className="space-y-2 lg:space-y-5 xl:space-y-6">
                            <h3 className='text-[1.9rem] seris-font font-extrabold lg:text-4xl xl:text-5xl'>All Brands</h3>
                            <div className='text-lg lg:text-[1.25rem] space-y-3 text-gray-300'>
                                <p>Lorem Ipsum has been the industrys standard dummy text ever since.</p>
                                <p>Lorem Ipsum has been the industrys standard dummy text ever since.</p>
                            </div>
                            <div className="flex items-center">

                                <Button className='text-lg group/hov border-b-2 mt-4 p-0 rounded-none text-gray-300 cursor-pointer'>
                                    <span>Learn More</span>
                                    <IoArrowBackSharp className='-rotate-90 md:rotate-180 group-hover/hov:text-sky-400 duration-200' />
                                </Button>
                            </div>
                        </div>
                    </div>
                    {/*  */}
                    <div className="grid relative bg-box-500 text-white-300 rounded-xl sm:rounded-lg">
                        <Image
                            src={frImage}
                            alt='service'
                            className='w-full h-full object-cover'
                        />
                    </div>
                    {/*  */}
                    <div className="grid bg-box-500 items-center justify-center sm:order-2 text-white-300 rounded-xl sm:rounded-lg py-4 px-6 lg:px-12 2xl:px-14">
                        <div className="space-y-2 lg:space-y-5 xl:space-y-6">
                            <h3 className='text-[1.9rem] seris-font font-extrabold lg:text-4xl xl:text-5xl'>All Brands</h3>
                            <div className='text-lg lg:text-[1.25rem] space-y-3 text-gray-300'>
                                <p>Lorem Ipsum has been the industrys standard dummy text ever since.</p>
                                <p>Lorem Ipsum has been the industrys standard dummy text ever since.</p>
                            </div>
                            <div className="flex items-center">

                                <Button className='text-lg group/hov border-b-2 mt-4 p-0 rounded-none text-gray-300 cursor-pointer'>
                                    <span className='md:order-2'>Learn More</span>
                                    <IoArrowBackSharp className='-rotate-90 md:rotate-none group-hover/hov:text-sky-400 duration-200' />
                                </Button>
                            </div>
                        </div>
                    </div>
                    {/*  */}
                    <div className="grid bg-box-500 sm:order-1 text-white-300 rounded-xl sm:rounded-lg">
                        <Image
                            src={secImage}
                            alt='service'
                            className='w-full h-full object-cover'
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services
