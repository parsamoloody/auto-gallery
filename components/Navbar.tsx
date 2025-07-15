import Image from 'next/image'
import React from 'react'
import logo from '../public/assets/images/logo.png'
import Link from 'next/link'
import { AiOutlineMenu } from 'react-icons/ai'
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from './ui/sheet'
import { Button } from './ui/button'

const Navbar = () => {
  return (
    <div className='flex bg-transparent z-50 justify-between font-sans relative font xl:text-lg items-center h-26 max-w-[1240px] mx-auto px-4 text-white'>
      {/* logo */}
      <Image src={logo} alt='Site Logo' width={185} height={185} />

      <ul className="hidden sm:flex space-x-8 font-semibold text-white-300 mr-[12%]">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/services">Services</Link>
        <Link href="/contact">Contact</Link>
      </ul>

      <div className="sm:hidden flex items-center space-x-4 ease-in-out duration-500">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="default" className="sm:hidden">
              <AiOutlineMenu className='text-white-300' />
            </Button>
          </SheetTrigger>

          <SheetContent side="left" className='bg-main-500'>
            <SheetTitle className="sr-only" >Main Navigation</SheetTitle>
            <ul className="flex flex-col space-y-4 mt-4 font-semibold text-white-300 ">
              <Link href="/">Home</Link>
              <Link href="/about">About</Link>
              <Link href="/services">Services</Link>
              <Link href="/contact">Contact</Link>
            </ul>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  )
}

export default Navbar
