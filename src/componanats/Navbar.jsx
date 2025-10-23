import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='rounded-full bg-amber-100 h-10 w-full px-60 flex justify-between items-center mt-2 text-2xl'>
     <h2>Portfolio</h2>
     <div className='flex gap-10 mr-2'>
       <Link href="/">Home</Link>
       <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
        <Link href="resume">Resume</Link>
     </div>
    </div>
  )
}

export default Navbar