"use client";
import Image from "next/image";
import React from "react";
import mine from "/public/mine.jpg";
import { MoveRight, Download } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

import About from "./about/page";
import Projects from "./projects/page";
import TechStack from "./stack/page";
import Conatct from "./contact/page";
import Services from "./services/page";
import Achive from "./achive/page";

const Page = () => {
  return (
    <div className="text-base sm:text-xl flex flex-col justify-center items-center overflow-x-hidden  ">
      {/* ===== HERO SECTION ===== */}
      <div className="section1 flex flex-col md:flex-row justify-around items-center p-6 md:p-10 h-auto md:h-[70vh] w-full mt-6">
        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="left flex flex-col gap-3 pt-10 md:pt-20 p-3 md:p-5 w-full md:w-[50%]"
        >
          <motion.h3
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-2xl sm:text-3xl font-medium"
          >
            Hi There 👋
          </motion.h3>
          <motion.div
            className="h-1 w-16 sm:w-20 rounded bg-yellow-300"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          ></motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-3xl sm:text-5xl font-semibold "
          >
            I’m Syeda Bisma
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="hidden sm:block text-base sm:text-xl w-full sm:w-[65%] rounded-full mt-3 py-1 px-2 border-dotted border border-gray-400 text-blue-500 text-center shadow-md backdrop-blur-sm"
          >
            Building creative digital experiences
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="block sm:hidden text-base w-full rounded-full mt-3 py-1 px-2 border border-dotted border-gray-400 text-blue-500 text-center shadow-md backdrop-blur-sm"
          >
            Frontend Developer || Design Engineer
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="leading-relaxed mt-4"
          >
            I love crafting clean, responsive, and visually appealing web
            interfaces using React, Next.js, and Tailwind CSS. My focus is on
            creating smooth user experiences that combine creativity and logic.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 mt-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.8 }}
          >
            <Link
              href="/contact"
              className="border border-gray-500 w-full sm:w-1/3 text-base sm:text-lg rounded-2xl py-2 px-4 font-medium flex items-center justify-center gap-2 bg-transparent hover:bg-gray-900 hover:text-white hover:scale-105 transition-all duration-300"
            >
              Contact Me
              <MoveRight size={20} strokeWidth={1.8} />
            </Link>

            <a
              href="/Resume/Resume2.pdf"
              download="Resume2.pdf"
              className="border border-gray-500 w-full sm:w-1/3 text-base sm:text-lg rounded-2xl py-2 px-4 font-medium flex items-center justify-center gap-2 bg-transparent hover:bg-gray-900  hover:text-white hover:scale-105 transition-all duration-300"
            >
              Download Resume
              <Download size={20} strokeWidth={1.8} />
            </a>
          </motion.div>
        </motion.div>

      </div>

      {/* ===== OTHER SECTIONS ===== */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="mt-10 w-full px-4 md:px-16"
      >
        <TechStack />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="mt-10 w-full px-4 md:px-16"
      >
        <Services />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="mt-10 w-full px-4 md:px-16"
      >
        <About />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="mt-10 w-full px-4 md:px-16"
      >
        <Projects limit={3} />
        <Link
          href="/projects"
          className="flex text-xl underline justify-center items-center gap-3 hover:gap-5 transition-all mt-2"
        >
          View More Here <MoveRight size={25} strokeWidth={1.8} />
        </Link>
        <div className="border rounded border-gray-600 mt-8 flex gap-4 justify-center items-center text-xl p-3">
          <Link href={"https://github.com/SyedaBismaa"}>
            View All Projects On Github{" "}
          </Link>
          <Image height={40} width={40} src={"/skills/githubimg.png"} alt="Github" />
        </div>
      </motion.div>

      {/* Achievements */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="mt-10 w-full px-4 md:px-16"
      >
        <Achive />
      </motion.div>

      {/* Contact */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="mt-10 w-full px-4 md:px-16 mb-16"
      >
        <Conatct />
      </motion.div>
    </div>
  );
};

export default Page;
