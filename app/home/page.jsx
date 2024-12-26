'use client';

import React from 'react';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa'; 
import Link from "next/link";
import { motion } from 'framer-motion';

const Page = () => {
  return (
    <div className="min-h-screen w-screen bg-gradient-to-br from-black via-gray-900 to-black"> 
      {/* Main Content */}
      <div className="h-[1300px] flex items-center justify-center py-2 px-2 sm:py-28 sm:px-32 md:py-[6rem] md:px-[15rem]">

        <motion.div 
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 50 }}
          className="bg-white/95 backdrop-blur-sm w-full h-full rounded-xl shadow-2xl overflow-hidden"
        >
          
          {/* Navigation Bar */}
          <motion.div 
            initial={{ y: -50 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.3, type: "spring", stiffness: 50 }}
            className="Nav flex justify-between items-center p-4 border-b border-gray-300 bg-white/50 backdrop-blur-sm"
          >
            <div className="flex space-x-2">
              {['red-500', 'yellow-500', 'green-500'].map((color, index) => (
                <motion.div 
                  key={index}
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className={`w-3 h-3 bg-${color} rounded-full`}
                ></motion.div>
              ))}
            </div>
            <div className="flex space-x-4">
              {['Home', 'About', 'Contact'].map((text, index) => (
                <Link href={`/${text.toLowerCase()}`} passHref key={index}>
                  <motion.button 
                    whileHover={{ scale: 1.1, rotate: 180 }}
                    className="text-gray-600 hover:text-black transition-colors"
                  >
                    {text}
                  </motion.button>
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Main Content */}
          <div className="flex flex-col md:flex-row h-full w-full">
            
            {/* Left Section - Text Content */}
            <motion.div 
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5, type: "spring", stiffness: 50 }}
              className="flex flex-col items-start justify-center h-full px-6 pb-8 md:px-16 md:pb-24 w-full md:w-1/2"
            >
              <motion.h2 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.7, type: "spring", stiffness: 50 }}
                className="text-3xl md:text-5xl md:pt-[12rem] pt-12 font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent"
              >
                iOS App Developer
              </motion.h2>
              <motion.p 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.9, type: "spring", stiffness: 50 }}
                className="mt-4 text-gray-600 w-full max-w-lg leading-relaxed"
              >
                I&apos;m Praval, an iOS developer with a passion for creating innovative applications.
                I specialize in AI and fitness solutions, utilizing cutting-edge technology to enhance user experience.
                With experience in SwiftUI, Web3 development, and image classification, I aim to build applications
                that make a difference in people&apos;s lives.
              </motion.p>
              
              <Link href="/project" passHref>
                <motion.button 
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-[150px] bg-black h-[45px] my-6 flex items-center justify-center rounded-xl cursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out shadow-md hover:shadow-lg before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-[#009b49] before:to-[rgb(105,184,141)] before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-xl hover:before:left-0 text-white"
                >
                  Projects
                </motion.button>
              </Link>

              {/* Social Media Icons */}
              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1.1, type: "spring", stiffness: 50 }}
                className="flex space-x-8 pt-4"
              >
                {[{icon: <FaLinkedin />, color: 'blue-700', hoverColor: 'blue-800', link: 'https://linkedin.com/in/'},
                  {icon: <FaGithub />, color: 'gray-800', hoverColor: 'black', link: 'https://github.com/pravalgautam'},
                  {icon: <FaTwitter />, color: 'blue-500', hoverColor: 'blue-600', link: 'https://twitter.com/pravalgautam001'}].map((social, index) => (
                  <motion.a 
                    key={index}
                    whileHover={{ scale: 1.3, rotate: 10 }}
                    href={social.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className={`text-${social.color} text-2xl hover:text-${social.hoverColor}`}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>

            {/* Right Section - iPhone Mockup */}
            <motion.div 
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.7, type: "spring", stiffness: 50 }}
              className="flex items-center justify-center w-full md:w-1/2 relative pb-20 md:pt-24"
            >
              <motion.div 
                initial={{ y: 50 }}
                animate={{ y: 0 }}
                transition={{ 
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
                className="Mobile h-[30rem] w-[14rem] bg-white rounded-[3rem] shadow-2xl relative overflow-hidden border-4 border-gray-600 p-4"
              >
                {/* Top black bar to simulate iPhone notch */}
                <div className="absolute top-4 left-1/2 transform -translate-x-1/2 h-[1.2rem] w-[4.5rem] bg-black rounded-full"></div>

                {/* Experience Section */}
                <h1 className='text-black pt-6 font-serif text-xl font-semibold text-center'>Experience</h1>
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.2, type: "spring", stiffness: 50 }}
                  className="flex flex-col items-center space-y-6 pt-8"
                >
                  {['Internship at Xeta Analytics - iOS Developer', 'Internship at Quantum IT Innovation - iOS Developer'].map((experience, index) => (
                    <motion.div 
                      key={index}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="flex items-center cursor-pointer"
                    >
                      <div className={`w-1 h-20 ${index % 2 === 0 ? 'bg-red-900' : 'bg-green-800'}`}></div>
                      <p className='text-gray-600 px-4 font-serif text-sm'>{experience}</p>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            </motion.div>

          </div>
        </motion.div>
      </div>

    </div>
  );
};

export default Page;
