import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
    <div className=" mt-5 p-6 md:p-10">

      {/* Heading */}
      <div className="flex flex-col md:flex-row items-center md:items-start gap-3 md:pl-8">
        <h1 className="text-3xl md:text-5xl ">About Me</h1>
        <div className="hidden md:flex w-[70%] h-1 rounded bg-gray-700 ml-3 mt-5"></div>
        <div className="hidden md:flex h-4 w-4 bg-gray-700 rounded-full mt-4"></div>
      </div>

      {/* Icons Section (always visible) */}
      <div className="flex justify-center items-center gap-5 mt-6 flex-wrap md:hidden">
        <Image height={45} width={45} src="/html.png" alt="HTML" />
        <Image height={45} width={45} src="/css.png" alt="CSS" />
        <Image height={45} width={45} src="/js.png" alt="JavaScript" />
        <Image height={45} width={45} src="/vscode.png" alt="VSCode" />
      </div>

      {/* Main Content */}
      <div className="mt-2 md:mt-20 rounded-xl p-6 relative overflow-hidden">

        {/* Floating icons (desktop only, larger) */}
        <div className="hidden md:block relative">
          <Image
            height={60}
            width={70}
            src="/projectsimg/html.png"
            alt="HTML"
            className="absolute left-20 lg:left-56 top-4 lg:top-0"
          />
          <Image
            height={60}
            width={70}
            src="/projectsimg/css.png"
            alt="CSS"
            className="absolute right-20 lg:right-40 top-4 lg:top-0"
          />
          <Image
            height={60}
            width={70}
            src="/projectsimg/js.png"
            alt="JavaScript"
            className="absolute right-20 lg:right-40 top-36 lg:top-50"
          />
          <Image
            height={60}
            width={70}
            src="/projectsimg/vscode.png"
            alt="VSCode"
            className="absolute left-20 lg:left-40 top-36 lg:top-50"
          />
        </div>

        {/* Text Content */}
        <div className="text-center md:px-16 lg:px-40 mt-5 md:mt-8">
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-medium mb-8">
            [ I design & build experiences ]
          </h1>
          <p className="text-sm md:text-base lg:text-xl leading-relaxed">
            Crafting seamless digital journeys that captivate users. Delivering innovative
            solutions that combine creativity with functionality. Ensuring intuitive interfaces
            that enhance user interaction and satisfaction. Bridging the gap between design and
            development to create memorable web experiences. Passionate about transforming ideas
            into visually appealing and efficient digital platforms.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About
