'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { User } from 'lucide-react';

export default function EnvelopeProfile() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative flex justify-center mb-12">
      <motion.div
        className="relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {/* Envelope Container */}
        <div className="relative w-32 h-32">
          
          {/* Envelope Back */}
          <motion.div
            className="absolute inset-0 rounded-lg bg-gradient-to-br from-purple-600 via-blue-600 to-purple-700 shadow-2xl"
            animate={{
              scale: isHovered ? 1.05 : 1,
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          />

          {/* Envelope Content - Profile Info */}
          <AnimatePresence>
            {isHovered && (
              <motion.div
                className="absolute inset-2 bg-white/95 dark:bg-slate-800/95 rounded-lg flex flex-col items-center justify-center p-2"
                initial={{ opacity: 0, scale: 0.8, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: 10 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                <User className="w-8 h-8 text-purple-600 mb-1" />
                <span className="text-xs font-bold text-purple-600">DW</span>
                <span className="text-[10px] text-slate-600 dark:text-slate-300 text-center leading-tight">
                  Frontend<br />Developer
                </span>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Envelope Flap */}
          <motion.div
            className="absolute top-0 left-0 right-0 h-16 overflow-hidden"
            animate={{
              rotateX: isHovered ? -180 : 0,
            }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            style={{ transformOrigin: 'top center', transformStyle: 'preserve-3d' }}
          >
            <div 
              className="w-full h-full bg-gradient-to-br from-purple-500 via-blue-500 to-purple-600"
              style={{
                clipPath: 'polygon(0 0, 100% 0, 50% 100%)',
                boxShadow: '0 4px 20px rgba(0,0,0,0.3)'
              }}
            />
          </motion.div>

          {/* Envelope Body - Empty for clean opening */}
          <div className="absolute inset-0 flex items-center justify-center">
            {/* DW text is now outside the envelope */}
          </div>

          {/* Envelope Bottom Flap */}
          <motion.div
            className="absolute bottom-0 left-0 right-0 h-16 overflow-hidden"
            animate={{
              rotateX: isHovered ? 180 : 0,
            }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            style={{ transformOrigin: 'bottom center', transformStyle: 'preserve-3d' }}
          >
            <div 
              className="w-full h-full bg-gradient-to-tr from-purple-600 via-blue-600 to-purple-700"
              style={{
                clipPath: 'polygon(50% 0, 0 100%, 100% 100%)',
              }}
            />
          </motion.div>

          {/* Side Flaps */}
          <motion.div
            className="absolute left-0 top-0 bottom-0 w-16 overflow-hidden"
            animate={{
              rotateY: isHovered ? 180 : 0,
            }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            style={{ transformOrigin: 'left center', transformStyle: 'preserve-3d' }}
          >
            <div 
              className="w-full h-full bg-gradient-to-r from-purple-700 to-blue-600"
              style={{
                clipPath: 'polygon(0 0, 100% 50%, 0 100%)',
              }}
            />
          </motion.div>

          <motion.div
            className="absolute right-0 top-0 bottom-0 w-16 overflow-hidden"
            animate={{
              rotateY: isHovered ? -180 : 0,
            }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            style={{ transformOrigin: 'right center', transformStyle: 'preserve-3d' }}
          >
            <div 
              className="w-full h-full bg-gradient-to-l from-purple-700 to-blue-600"
              style={{
                clipPath: 'polygon(100% 0, 0 50%, 100% 100%)',
              }}
            />
          </motion.div>
        </div>

        {/* DW Text - Outside the envelope, hides on hover */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: isHovered ? 0 : 1, scale: isHovered ? 0.8 : 1 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <span className="text-2xl font-bold text-white z-10">DW</span>
        </motion.div>

        {/* Glow effect */}
        <motion.div
          className="absolute inset-0 rounded-lg"
          animate={{
            boxShadow: isHovered 
              ? '0 0 40px rgba(147, 51, 234, 0.6), 0 0 80px rgba(59, 130, 246, 0.4)'
              : '0 0 20px rgba(147, 51, 234, 0.3), 0 0 40px rgba(59, 130, 246, 0.2)'
          }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        />


      </motion.div>
    </div>
  );
}