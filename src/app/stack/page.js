import Image from "next/image";
import React from "react";

const TechStack = () => {
  const techLogos = [
    "/skills/htmlcssjs.png",
    "/skills/react.png",
    "/skills/nextjs.png",
    "/skills/tailwind.png",
    "/skills/expre.png",
    "/skills/node.png",
    "/skills/mongodb.png",
    "/skills/soketio.png",
    "/skills/typescri.png",
    "/skills/gsap.png",
    "/skills/git.png",
    "/skills/githubimg.png",
    "/skills/vercel.png",
    "/skills/Renderimg.png",
    "/skills/postmann.png",
    "/skills/canva.png",
  ];

  return (
    <div className="p-8">
      {/* Title Section */}
      <div className="flex flex-col md:flex-row items-center gap-3 mb-12">
        <h1 className="text-4xl md:text-4xl font-semibold text-gray-800">Skills</h1>
        <div className="hidden md:flex w-[70%] h-1 rounded bg-gray-700 ml-3 mt-2 md:mt-4"></div>
        <div className="hidden md:flex h-4 w-4 bg-gray-700 rounded-full mt-4"></div>
      </div>

      {/* Tech Icons Grid */}
      <div className="grid grid-cols-3 sm:grid-cols-4 p-5 md:grid-cols-5 lg:grid-cols-8 gap-6 justify-items-center">
        {techLogos.map((logo, index) => (
          <div
            key={index}
            className="transition-transform transform hover:scale-110 hover:rotate-3"
          >
            <Image
              src={logo}
              alt={`tech-${index}`}
              width={90}
              height={90}
              className="object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechStack;
