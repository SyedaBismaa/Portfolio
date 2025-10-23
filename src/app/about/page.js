import React from 'react'

const About = () => {
  return (
    <div className='bg-red-200 mt-5 p-10'> 

     <div className='flex flex-row gap-3 pl-8 '>
          <h1 className='text-5xl '>
           About Me 
          </h1>
          <div className='w-[70%] h-2 rounded  bg-gray-500 ml-3 mt-5'></div>
           <div  className='h-4 w-4 bg-gray-500 rounded-full mt-4'></div>
     </div>

     <div className='mt-15  bg-red-400'>
         <h1 className='flex justify-center items-center text-4xl'> [ I design & build experiences ] </h1>
         <p className='mt-8 px-66 flex items-center justify-center'>Crafting seamless digital journeys that captivate users. Delivering innovative solutions that combine creativity with  functionality. Ensuring intuitive interfaces that enhance user interaction and satisfaction. Bridging the gap between design and development to create memorable web experiences. Passionate about transforming ideas into visually appealing and efficient digital platforms.</p>
     </div>

      
    </div>
  )
}

export default About