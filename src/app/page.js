import Image from 'next/image'
import React from 'react'
import mine from "/public/mine.jpg"
import Navbar from '@/componanats/Navbar'
import { MoveRight } from 'lucide-react'
import Link from 'next/link'
import About from './about/page'

const Page = () => {
  return (
    <div className='text-xl flex justify-center  flex-col'>
      <Navbar />

      <div className='section1 flex justify-around   p-10 h-[80vh] w-full mt-6 '>

        {/* Left Section */}
        <div className='left flex flex-col gap-3 pt-20 p-5 h-full  w-[50%]'>

          <h3 className='text-3xl  font-medium'>Hi There 👋</h3>
          <div className='h-2 w-20 rounded bg-yellow-300'></div>

          <h1 className='text-5xl font-semibold'>
            I’m Syeda Bisma
          </h1>

          <div className='text-xl w-[65%] rounded-full mt-3  py-1 px-2 border-dotted border-2 border-black text-blue-900'>
          Building creative & user-focused digital experiences
          </div>

          <div>
            <p className=' leading-relaxed mt-4'>
              I love crafting clean, responsive, and visually appealing web
              interfaces using React, Next.js, and Tailwind CSS. My focus is on
              creating smooth user experiences that combine creativity and logic.
            </p>
          </div>

         <button className="border w-1/4 text-xl rounded-2xl py-1 px-4 font-medium mt-5 flex items-center gap-2">
           Contact Me
          <MoveRight size={20} strokeWidth={1.8} />
        </button>
        </div>

        {/* Right Section */}
        <div className='right h-full w-[40%] flex justify-center items-center overflow-hidden '>
          <div className='large h-[80%] w-[80%] rounded-full border-2 flex justify-center items-center mt-10'>
            <div className='img h-[90%] w-[90%] rounded-full overflow-hidden'>
              <Image
                height={100}
                width={100}
                src={mine}
                alt="Syeda Bisma"
                className='object-cover h-full w-full'
              />
            </div>
          </div>
        </div>

      </div>

      <div className='mt-10'>
       <About/>
      </div>
    </div>
  )
}

export default Page
