'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from "next/link";

const Page = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('Sending...');
    try {
      const response = await fetch('/api/sendEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('Email sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('Failed to send email.');
      }
    } catch (error) {
      console.error('Error:', error);
      setStatus('Failed to send email.');
    }
  };

  return (
    <div className="min-h-screen w-screen bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center">
      <div className="bg-white/95 backdrop-blur-sm w-full max-w-4xl h-full rounded-xl shadow-2xl overflow-hidden">
        
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
          
          {/* iMac Mockup with Email Form */}
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 60 }}
            className="flex flex-col items-center text-center px-6 pb-8 md:px-16 md:pb-24 w-full md:w-3/4"
          >
            <div className="iMac-mockup bg-gray-200 rounded-lg shadow-lg p-8 w-full max-w-lg">
              <h2 className="text-2xl font-bold mb-4">Contact Me</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <input 
                  type="text" 
                  name="name" 
                  placeholder="Your Name" 
                  value={formData.name} 
                  onChange={handleChange} 
                  className="w-full p-2 border border-gray-300 rounded"
                />
                <input 
                  type="email" 
                  name="email" 
                  placeholder="Your Email" 
                  value={formData.email} 
                  onChange={handleChange} 
                  className="w-full p-2 border border-gray-300 rounded"
                />
                <textarea 
                  name="message" 
                  placeholder="Your Message" 
                  value={formData.message} 
                  onChange={handleChange} 
                  className="w-full p-2 border border-gray-300 rounded h-32"
                />
                <button 
                  type="submit" 
                  className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
                >
                  Send Message
                </button>
              </form>
              <p className="mt-4 text-gray-600">{status}</p>
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, type: "spring", stiffness: 50 }}
          className="bg-gray-300/20 backdrop-blur-sm h-5 flex items-center justify-center md:opacity-100"
        >
          <p className="text-gray-400 text-sm">© 2024 Praval. All rights reserved.</p>
        </motion.div>
      </div>
    </div>
  );
};

export default Page;