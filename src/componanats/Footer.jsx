import React from 'react'

const Footer = () => {
  return (
    <div className='bg-gray-200'>
       <div className="text-center text-gray-500 text-xl mt-10">
        © {new Date().getFullYear()} Syeda Bisma — All rights reserved.
      </div>
    </div>
  )
}

export default Footer