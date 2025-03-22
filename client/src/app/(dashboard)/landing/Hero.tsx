"use client";
import { Search } from 'lucide-react'
import Image from 'next/image'
import React, { useState } from 'react'

const Hero = () => {
    const [search,setSearch] = useState("");
    return (
        <div className='relative h-screen'>
            <Image
                src="/Hero.jpg"
                alt='Real Estate'
                className='object-cover object-center'
                fill
                priority
            />
            {/* <div className="absolute inset-0 bg-black/60 bg-opacity-60"></div> */}
            <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center w-full'>
                <div className='max-w-4xl mx-auto px-16 sm:px-22 space-y-2'>
                    <h1 className='text-5xl lg:text-6xl  font-bold text-white'>Start your Journey to finding the perfect place to call home</h1>
                    <p className='text-xl lg:text-xxl font-medium text-white'>Explore our wide range of rental properties tailored to fit your lifestyle and needs!</p>
                    <div className='flex justify-center mt-4'>
                        <div className="relative w-full max-w-lg">
                            {/* Search Icon */}
                            <div className="absolute inset-y-0 left-3 flex items-center">
                                <Search size={24} />
                            </div>
                            <input
                                type="text"
                                value={search}
                                onChange={(e) =>setSearch(e.target.value)}
                                placeholder="Search a city, neighbourhood, place, etc."
                                className="w-full h-12 pl-10 pr-4 text-xl text-black border border-gray-300 rounded-l-md focus:ring-2 focus:ring-red-400 focus:outline-none"
                            />
                        </div>
                        <button className="bg-red-500 hover:bg-red-600 text-white px-4 h-12 rounded-r-md transition">
                            Search
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Hero;
