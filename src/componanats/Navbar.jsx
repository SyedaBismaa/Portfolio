import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav className=' rounded-full w-full px-4 sm:px-10 md:px-16 py-2 flex justify-between items-center mt-2'>
      <h2 className='text-xl sm:text-2xl font-semibold'>Portfolio</h2>

      <div className='hidden md:flex gap-6 lg:gap-10 text-lg sm:text-xl'>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/resume">Resume</Link>
      </div>

      {/* Mobile menu icon */}
      <div className='md:hidden'>
        {/* You can add a hamburger menu here later if you want */}
        <button className='text-lg'>☰</button>
      </div>
    </nav>
  )
}

export default Navbar
