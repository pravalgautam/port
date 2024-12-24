'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from "next/link";

const Page = () => {
  return (
    <div className="min-h-screen w-screen bg-gradient-to-br from-black via-gray-900 to-black"> 
      {/* Main Content */}
      <div className="flex items-center justify-center py-2 px-2 sm:py-28 sm:px-32 md:py-[6rem] md:px-[15rem]">

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
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="text-gray-600 hover:text-black transition-colors"
                  >
                    {text}
                  </motion.button>
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Main Content */}
          <div className="flex flex-col items-center h-full w-full py-12">
            
            {/* About Me Section */}
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, type: "spring", stiffness: 60 }}
              className="flex flex-col items-center text-center px-6 pb-8 md:px-16 md:pb-24 w-full md:w-3/4"
            >
              <motion.h2 
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, type: "spring", stiffness: 50 }}
                className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent"
              >
                About Me
              </motion.h2>
              <motion.p 
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.7, type: "spring", stiffness: 50 }}
                className="mt-6 text-gray-600 w-full max-w-2xl leading-relaxed"
              >
                Hello! I'm Praval, an iOS developer with a passion for creating innovative applications. I specialize in AI and fitness solutions, utilizing cutting-edge technology to enhance user experience. With experience in SwiftUI, Web3 development, and image classification, I aim to build applications that make a difference in people's lives.
              </motion.p>
            </motion.div>

            {/* Skills Section */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, type: "spring", stiffness: 50 }}
              className="flex flex-wrap justify-center mt-8"
            >
              {['iOS Development', 'Swift & SwiftUI', 'AI & Machine Learning', 'Web3 Development', 'Image Classification', 'UI/UX Design'].map((skill, index) => (
                <motion.div 
                  key={index}
                  whileHover={{ scale: 1.1 }}
                  className="bg-gray-200 text-gray-800 m-2 p-4 rounded-lg shadow-md"
                >
                  {skill}
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>

    </div>
  );
};

export default Page;