"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { LinkIcon } from "lucide-react";

const Achieve = () => {
  // State to handle which certificate is currently open in popup
  const [selected, setSelected] = useState(null);

  // Certificate data — add your real image URLs or paths here
  const certificates = [
    {
      id: 1,
      title: "Leetcode bagdes for consistancy",
      img: "/certificates/awards.jpg",
      link:"https://leetcode.com/u/syedabisma_23/"
    },
    {
      id: 2,
      title: "Job Ready Cohort: Web + DSA + Aptitude",
      img: "/certificates/cohort.jpg",
      link:"https://www.sheryians.com/certificate/verify/5037551f"
    },
    {
      id: 3,
      title: "GfG-160 - 160 days of problem solving",
      img: "/certificates/gfg160.jpg",
      link:"https://www.geeksforgeeks.org/certificate/138c7069bf8e582d4bdd1fae41aa7230"
    },
    {
      id: 4,
      title: "Frontend-Focused Hackathon",
      img: "/certificates/hackathon.jpg",
      link:"#"
    },
  ];

  return (
    <div className="min-h-screen w-full  py-16 px-6 md:px-20">
      {/* Section Heading */}
      <div className="flex flex-col md:flex-row items-center gap-3 mb-12">
        <h1 className="text-4xl md:text-5xl font-semibold text-gray-800">
          Certifications
        </h1>
        <div className="hidden md:flex w-[70%] h-1 rounded bg-gray-700 ml-3 mt-2 md:mt-4"></div>
        <div className="hidden md:flex h-4 w-4 bg-gray-700 rounded-full mt-4"></div>
      </div>

      {/* Certificates Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {certificates.map((cert) => (
          <div
            key={cert.id}
            onClick={() => setSelected(cert)} 
            className="group cursor-pointer bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300"
          >
            <div className="relative h-65 w-full overflow-hidden">
              <Image
                src={cert.img}
                alt={cert.title}
                fill
                className="object-contain p-2 group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-4 text-center">
              <h3 className="text-lg font-medium text-gray-800">{cert.title}</h3>
            </div>
          </div>
        ))}
      </div>

      {/* Popup Modal */}
      {selected && (
        <div
          onClick={() => setSelected(null)} // close on outside click
          className="fixed inset-0 bg-[#0a0f2d]/80 flex items-center justify-center z-50"
        >
          <div
            className="relative bg-red-100 p-4 rounded-xl shadow-2xl max-w-3xl w-[90%]"
            onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
          >
            <Image
              src={selected.img}
              alt={selected.title}
              width={1000}
              height={700}
              className="w-full h-auto rounded-lg"
            />
            <h2 className="items-center flex gap-3 justify-center  text-2xl mt-4 font-semibold text-gray-800">
              {selected.title}
              <Link href={selected.link} > <LinkIcon/> </Link>
            </h2>
            

            {/* Close Button */}
            <button
              onClick={() => setSelected(null)}
              className="absolute top-1 right-1 text-gray-600 text-6xl font-bold hover:text-red-400"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Achieve;
