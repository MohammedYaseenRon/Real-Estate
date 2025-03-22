"use client";
import React, { useState } from 'react'
import { Search, X, Menu, User } from "lucide-react"

const Navbar = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  return (
    <div className='fixed top-0 left-0 w-full z-50 shadow-xl h-16 bg-black'>
      <div className='flex items-center justify-between py-3 px-8'>
        <div className='px-2 lg:px-4 py-2'>
          <h1 className='text-xl lg:text-2xl text-white'>Rent<span className="italic font-xl font-medium">yOUR</span>Apt'S</h1>
        </div>
        <div className='hidden sm:flex w-xxl'>
          <p className='text-xl text-white mr-4'>Discover anything throught our website</p>
        </div>
        <div className='mr-4'>
          <button className='flex items-center gap-2 px-2 border border-white lg:px-4 py-1 lg:py-2 rounded-xl text-white bg-black'>
            <User className='w-4 h-4' />
            SignUp
          </button>
        </div>
        {/* <button className='sm:hidden pr-2' onClick={() => setIsMobileOpen(!isMobileOpen)}>
          {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button> */}
      </div>
    </div>
  )
}

export default Navbar