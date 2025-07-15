import Image from 'next/image'
import logo from '../public/assets/images/logo.png'
import React from 'react'
import Link from 'next/link'

const Footer = () => {
    return (
        <footer className='bg-main-500 text-white-300 flex md:pt-14 justify-center'>
            <div className="grid grid-cols-1 md:grid-cols-3 space-y-12">
                <Image src={logo} alt='Site Logo' width={230} height={230} />
                <ul className='flex flex-col lg:flex-row lg:-mt-20 lg:space-x-6 items-center text-2xl leading-11'>
                    <Link className='hover:text-gray-300' href="/">Home</Link>
                    <Link className='hover:text-gray-300' href="/about">About</Link>
                    <Link className='hover:text-gray-300' href="/services">Services</Link>
                    <Link className='hover:text-gray-300' href="/contact">Contact</Link>
                </ul>
                <ul className='flex flex-col items-center text-lg leading-8'>
                    <li className='text-2xl'>(021)789-12301</li>
                    <li>info@parsa.co.uk</li>
                    <li>Iran Tehran</li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer
