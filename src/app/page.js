import Image from 'next/image'
import React from 'react'
import mine from "/public/mine.jpg"
import Navbar from '@/componanats/Navbar'
import {  MoveRight  } from 'lucide-react'
import About from './about/page'
import Projects from './projects/page'
import Link from 'next/link'
import TechStack from './stack/page'

const Page = () => {
  return (
    <div className='text-base sm:text-xl flex flex-col justify-center items-center'>

      <div className='section1 flex flex-col md:flex-row justify-around p-6 md:p-10 h-auto md:h-[70vh] w-full mt-6'>

        {/* Left Section */}
        <div className='left flex flex-col gap-3 pt-10 md:pt-20 p-3 md:p-5 w-full md:w-[50%]'>

          <h3 className='text-2xl sm:text-3xl font-medium'>Hi There 👋</h3>
          <div className='h-1 w-16 sm:w-20 rounded bg-yellow-300'></div>

          <h1 className='text-3xl sm:text-5xl font-semibold'>
            I’m Syeda Bisma
          </h1>

         {/* Desktop / Tablet */}
      <div className='hidden sm:block text-base sm:text-xl w-full sm:w-[65%] rounded-full mt-3 py-1 px-2 border-dotted border-2 border-black text-blue-900 text-center'>
          Building creative & user-focused digital experiences
        </div>

{/* Mobile */}
            <div className='block sm:hidden text-base w-full rounded-full mt-3 py-1 px-2 border-dotted border-2 border-black text-blue-900 text-center'>
             Frontend Developer || Design Engineer
            </div>


          <p className='leading-relaxed mt-4 text-gray-700'>
            I love crafting clean, responsive, and visually appealing web
            interfaces using React, Next.js, and Tailwind CSS. My focus is on
            creating smooth user experiences that combine creativity and logic.
          </p>

          <button className="border w-1/2 sm:w-1/4 text-base sm:text-xl rounded-2xl py-1 px-4 font-medium mt-5 flex items-center justify-center gap-2">
            Contact Me
            <MoveRight size={20} strokeWidth={1.8} />
          </button>
        </div>

        {/* Right Section */}
        <div className='right h-auto md:h-full w-full md:w-[40%] flex justify-center items-center overflow-hidden mt-10 md:mt-0'>
          <div className='large h-[60vw] max-h-[400px] md:h-[80%] w-[80%] rounded-full border-2 flex justify-center items-center'>
            <div className='img h-[90%] w-[90%] rounded-full overflow-hidden'>
              <Image
                height={400}
                width={400}
                src={mine}
                alt="Syeda Bisma"
                className='object-cover h-full w-full'
              />
            </div>
          </div>
        </div>

      </div>

      <div className='mt-10 w-full px-4 md:px-16'>
       <About/>
      </div>
      <div className='mt-10 w-full px-4 md:px-16'>
     <Projects limit={3}/>
      <Link  href="/projects" className='flex text-2xl underline justify-center items-center gap-4'>View More <MoveRight size={25} strokeWidth={1.8}/> </Link>
      </div>
      <div className='mt-10 w-full px-4 md:px-16'>
       <TechStack/>
      </div>
    </div>
  )
}

export default Page
