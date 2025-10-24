import React from "react";
import { Mail, Twitter, Globe, Link as LinkIcon, Bird, BiohazardIcon } from "lucide-react"; // using alternative icons
import { Twinkle_Star } from "next/font/google";

const Contact = () => {
  return (
    <section className="py-16 px-6 md:px-16" id="contact">
      {/* Heading */}
      <div className="flex flex-col md:flex-row items-center gap-3 mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
          Let’s Connect
        </h1>
        <div className="hidden md:flex w-[70%] h-1 rounded bg-gray-700 ml-3 mt-2 md:mt-4"></div>
        <div className="hidden md:flex h-4 w-4 bg-gray-700 rounded-full mt-4"></div>
      </div>

      {/* Contact Links */}
      <div className="flex flex-col items-center justify-center text-center gap-6">
        <h2 className="text-2xl font-semibold text-gray-800">Let’s Connect 👋</h2>
        <p className="text-gray-600 max-w-xl">
          I’m always open to new opportunities, collaborations, or just a quick
          chat. Feel free to reach out on any of the platforms below!
        </p>

        <div className="flex flex-wrap justify-center gap-6 mt-6 text-lg">
          {/* Email */}
          <a
            href="mailto:syedabisma173@gmail.com"
            className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition"
          >
            <Mail className="w-5 h-5" />
            syedabisma173@gmail.com
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/SyedaBismaa"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition"
          >
            <Globe className="w-5 h-5" />
            GitHub
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/syeda-bisma-29202428a/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition"
          >
            <LinkIcon className="w-5 h-5" />
            LinkedIn
          </a>

          {/* X (Twitter) */}
          <a
            href="https://x.com/devdairy_"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition"
          >
            <Bird size={40} className="w-5 h-5" />
            X (Twitter)
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
