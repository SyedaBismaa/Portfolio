import React from "react";
import { Code2, Server, Sparkles, Rocket } from "lucide-react";

const Services = () => {
  const services = [
  {
    id: 1,
    title: "Frontend Development",
    icon: <Code2 className="w-10 h-10 text-gray-800" />,
    desc: "I specialize in building dynamic, responsive, and visually engaging user interfaces using React.js, Next.js, Tailwind CSS, and TypeScript. My focus is on writing clean, reusable code and ensuring smooth, high-performance user experiences across all devices.",
  },
  {
    id: 2,
    title: "Backend Development",
    icon: <Server className="w-10 h-10 text-gray-800" />,
    desc: "I create secure, efficient, and scalable server-side applications using Node.js and Express.js. From building RESTful APIs to integrating databases like MongoDB and managing authentication, I ensure seamless data handling and strong backend architecture.",
  },
  {
    id: 3,
    title: "Animations & Interactions",
    icon: <Sparkles className="w-10 h-10 text-gray-800" />,
    desc: "I transform static designs into interactive experiences using GSAP, Framer Motion, and Lenis. From smooth scroll effects to creative micro-interactions, I ensure every interface feels alive, polished, and engaging for the user.",
  },
  {
    id: 4,
    title: "Deployment & Optimization",
    icon: <Rocket className="w-10 h-10 text-gray-800" />,
    desc: "I manage end-to-end deployment using Vercel, Render, and GitHub Pages while focusing on site performance, SEO optimization, and responsive scalability. Every project is optimized for speed, accessibility, and maintainability.",
  },
];


  return (
    <section className="py-16 px-6 md:px-16">
      {/* Heading */}
      <div className="flex flex-col md:flex-row items-center gap-3 mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
          What I Do
        </h1>
        <div className="hidden md:flex w-[70%] h-1 rounded bg-gray-700 ml-3 mt-2 md:mt-4"></div>
        <div className="hidden md:flex h-4 w-4 bg-gray-700 rounded-full mt-4"></div>
      </div>

      {/* Service Boxes */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service) => (
          <div
            key={service.id}
            className="border border-gray-300 rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300 bg-white"
          >
            <div className="flex justify-center mb-4">{service.icon}</div>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">
              {service.title}
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed">{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
