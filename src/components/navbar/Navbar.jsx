"use client"
import React from 'react'
import Links from './links/Links'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className='flex z-10 h-16  justify-between  md:items-center'>
      
      <Link href="/" className='font-bold text-white text-2xl'>Lama</Link>
      <div>
        <Links/>
      </div>
    </div>
  )
}

export default Navbar