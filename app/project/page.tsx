import React from 'react';
import Link from 'next/link';

const Project = () => {
  return (
    <div className="min-h-screen w-screen bg-gradient-to-br from-black via-gray-900 to-black">
      {/* Main Content */}
      <div className="flex items-center justify-center py-2 px-2 sm:py-28 sm:px-32 md:py-[6rem] md:px-[15rem]">
        <div className="bg-white/95 backdrop-blur-sm w-full h-full rounded-xl shadow-2xl overflow-hidden">
          {/* Navigation Bar */}
          <div className="Nav flex justify-between items-center p-4 border-b border-gray-300 bg-white/50 backdrop-blur-sm">
            <div className="flex space-x-2">
              {['red-500', 'yellow-500', 'green-500'].map((color, index) => (
                <div
                  key={index}
                  className={`w-3 h-3 bg-${color} rounded-full`}
                ></div>
              ))}
            </div>
            <div className="flex space-x-4">
              {['Home', 'About', 'Contact'].map((text, index) => (
                <Link href={`/${text.toLowerCase()}`} passHref key={index}>
                  <button className="text-gray-600 hover:text-black transition-colors">
                    {text}
                  </button>
                </Link>
              ))}
            </div>
          </div>

          {/* Main Content */}
          <div className="flex flex-col md:flex-row h-full w-full">
            {/* Left Section - Project Content */}
            <div className="flex flex-col items-start justify-center h-full px-6 pb-8 md:px-16 md:pb-24 w-full md:w-1/2">
              <h2 className="text-3xl md:text-5xl md:pt-[12rem] pt-12 font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                My Projects
              </h2>
              <p className="mt-4 text-gray-600 w-full max-w-lg leading-relaxed">
                Here are some of the projects I have worked on, showcasing my
                skills in iOS development, AI, and more.
              </p>
            </div>

            {/* Right Section - iPhone Mockup */}
            <div className="flex items-center justify-center w-full md:w-1/2 relative pb-8 md:pb-16 md:pt-24">
              <div className="Mobile h-[30rem] w-[14rem] bg-white rounded-[3rem] shadow-2xl relative overflow-hidden border-4 border-gray-600 p-4">
                {/* Top black bar to simulate iPhone notch */}
                <div className="absolute top-4 left-1/2 transform -translate-x-1/2 h-[1.2rem] w-[4.5rem] bg-black rounded-full"></div>

                {/* Project Mockup Section */}
                <h1 className="text-black pt-6 font-serif text-xl font-semibold text-center">
                  Project Mockup
                </h1>
                <div className="flex flex-col items-center space-y-6 pt-8">
                  {/* Add project mockup details here */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-gray-300/20 backdrop-blur-sm h-5 flex items-center justify-center md:opacity-100">
        <p className="text-gray-400 text-sm">© 2024 Praval. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Project;
