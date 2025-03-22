"use client";
import Navbar from '@/components/Navbar'
import React, { ReactNode } from 'react'

const layout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className='h-full w-full'>
      <Navbar />
      <main className='h-full flex w-full flex-col pt-16'>
        {children}
      </main>
    </div>
  )
}

export default layout