import React from 'react'
import Links from './links/Links'
import Link from 'next/link'
import { auth } from '@/lib/auth';

const Navbar =async () => {

  const session = await auth();
  return (
    <div className='flex z-10 h-16  justify-between  md:items-center'>
      
      <Link href="/" className='font-bold text-white text-2xl'>Lama</Link>
      <div>
        <Links session={session}/>
      </div>
    </div>
  )
}

export default Navbar