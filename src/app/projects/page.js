import Image from "next/image";
import Link from "next/link";
import React from "react";

const projects = [
  {
    id: 1,
    title: "Beyond Snack",
    desc: "A visually rich, high-performance landing page for a banana chips brand — built with React.js, Tailwind CSS, GSAP, Framer Motion, and Lenis for smooth scroll-based animations, micro-interactions, and a premium user experience.",
    tech: ["React.js", "Tailwind CSS", "GSAP", "Framer Motion", "Lenis"],
    img: "/projectsimg/beyondsnak2.png",
    live: "https://beyond-snack-v1tv.vercel.app/",
    github: "https://github.com/SyedaBismaa/Beyond_Snack.git",
  },
  {
    id: 2,
    title: "Food Delight",
    desc: "A visually appealing recipe explorer built with React.js, GSAP, and Tailwind CSS. It features smooth animations, interactive UI elements, and dynamic recipe cards for a delightful user experience.",
    tech: ["React.js", "Tailwind CSS", "GSAP"],
    img: "/projectsimg/recipe.png",
    live: "https://recipes-sigma-two.vercel.app/",
    github: "https://github.com/SyedaBismaa/Food-Delight.git",
  },
  {
    id: 3,
    title: "Konvox",
    desc: "An advanced GPT clone that lets users chat with an AI assistant in real time. Features include conversation history, clean UI, and OpenAI API integration for intelligent responses.",
    tech: ["React.js", "Node.js", "Gemini API", "Pinecone", "MongoDB", "Socket.io"],
    img: "/projectsimg/konvox.png",
    live: "https://chat-gpt-clone-eta-silk.vercel.app/",
    github: "https://github.com/SyedaBismaa/ChatGpt_Clone.git",
  },
  {
    id: 4,
    title: "SnapCap",
    desc: "AI-based caption generator for your pictures.",
    tech: ["Next.js", "OpenAI API", "Cloudinary"],
    img: "/projectsimg/snapcap.png",
    live: "https://snapcap.vercel.app/",
    github: "https://github.com/SyedaBismaa/Snapcap-your-buddy-for-captions.git",
  },
  {
    id: 5,
    title: "MoodMelody",
    desc: "AI-powered music player that curates playlists based on user mood.",
    tech: ["React", "Express", "MongoDB", "Tailwind"],
    img: "/projectsimg/moodmelody.png",
    live: "https://mood-melody-bice.vercel.app/",
    github: "https://github.com/SyedaBismaa/MoodMelody.git",
  },
  {
    id: 6,
    title: "GitSeeker",
    desc: "A small, functional app to search for GitHub users in real-time. Enter a username and instantly get profile data including bio, repos, and followers. Built using HTML, Tailwind CSS, and JavaScript.",
    tech: ["HTML", "Tailwind CSS", "JavaScript"],
    img: "/projectsimg/gitseeker.png",
    live: "https://lnkd.in/gjmmzPuy",
    github: "https://github.com/SyedaBismaa/GitSeeker.git",
  },
];

const Projects = ({ limit }) => {
  const visibleProjects = limit ? projects.slice(0, limit) : projects;

  return (
    <section className="py-16 px-6 md:px-16">
      {/* Title */}
      <div className="flex flex-col md:flex-row items-center gap-3 mb-12">
        <h1 className="text-4xl md:text-4xl font-semibold text-gray-800">Projects</h1>
        <div className="hidden md:flex w-[70%] h-1 rounded bg-gray-700 ml-3 mt-2 md:mt-4"></div>
        <div className="hidden md:flex h-4 w-4 bg-gray-700 rounded-full mt-4"></div>
      </div>

      {/* Projects Grid */}
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {visibleProjects.map((proj) => (
          <div
            key={proj.id}
            className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
          >
            {/* Project Image */}
            <div className="relative w-full h-52 sm:h-60 md:h-64 lg:h-72 overflow-hidden rounded-t-2xl">
              <Image
                src={proj.img}
                alt={proj.title}
                 fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>

            {/* Project Info */}
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-2 text-gray-800">{proj.title}</h2>
              <p className="text-gray-600 text-sm mb-4">{proj.desc}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {proj.tech.map((t, i) => (
                  <span
                    key={i}
                    className="text-xs bg-gray-200 px-3 py-1 rounded-full"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex gap-3">
                <a
                  href={proj.live}
                  target="_blank"
                  className="px-4 py-2 text-sm bg-gray-800 text-white rounded-lg hover:bg-gray-600 transition"
                >
                  Live Demo
                </a>
                <a
                  href={proj.github}
                  target="_blank"
                  className="px-4 py-2 text-sm border border-gray-800 text-gray-800 rounded-lg hover:bg-gray-800 hover:text-white transition"
                >
                  Code
                </a>
              </div>
            </div>
          
          </div>
          
        ))}
      </div>
    
    </section>
  );
};

export default Projects;
