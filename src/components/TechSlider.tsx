'use client'

import { motion, useAnimationControls } from 'framer-motion'
import { useEffect, useState } from 'react'
import { 
  SiReact, 
  SiVuedotjs, 
  SiNextdotjs, 
  SiTypescript, 
  SiJavascript, 
  SiNodedotjs, 
  SiGraphql, 
  SiDocker, 
  SiKubernetes, 
  SiAmazon, 
  SiGit, 
  SiMongodb, 
  SiPostgresql, 
  SiRedis, 
  SiTailwindcss 
} from 'react-icons/si'
import GradientText from '@/components/GradientText'

const technologies = [
  { name: 'React', icon: SiReact, color: 'text-[#61DAFB]' },
  { name: 'Vue.js', icon: SiVuedotjs, color: 'text-[#4FC08D]' },
  { name: 'Next.js', icon: SiNextdotjs, color: 'text-black dark:text-white' },
  { name: 'TypeScript', icon: SiTypescript, color: 'text-[#3178C6]' },
  { name: 'JavaScript', icon: SiJavascript, color: 'text-[#F7DF1E]' },
  { name: 'Node.js', icon: SiNodedotjs, color: 'text-[#339933]' },
  { name: 'GraphQL', icon: SiGraphql, color: 'text-[#E10098]' },
  { name: 'Docker', icon: SiDocker, color: 'text-[#2496ED]' },
  { name: 'Kubernetes', icon: SiKubernetes, color: 'text-[#326CE5]' },
  { name: 'AWS', icon: SiAmazon, color: 'text-[#FF9900]' },
  { name: 'Git', icon: SiGit, color: 'text-[#F05032]' },
  { name: 'MongoDB', icon: SiMongodb, color: 'text-[#47A248]' },
  { name: 'PostgreSQL', icon: SiPostgresql, color: 'text-[#4169E1]' },
  { name: 'Redis', icon: SiRedis, color: 'text-[#DC382D]' },
  { name: 'Tailwind', icon: SiTailwindcss, color: 'text-[#06B6D4]' }
]

export default function TechSlider() {
  const controls = useAnimationControls()
  const [isHovered, setIsHovered] = useState(false)
  
  // Triple the array to ensure seamless infinite scroll
  const triplicatedTechs = [...technologies, ...technologies, ...technologies]
  
  // Calculate the width of one set of technologies
  const singleSetWidth = technologies.length * 168 // 120px min-width + 48px gap
  
  useEffect(() => {
    const startAnimation = async () => {
      if (!isHovered) {
        await controls.start({
          x: -singleSetWidth,
          transition: {
            duration: 50,
            ease: "linear",
            repeat: Infinity,
            repeatType: "loop"
          }
        })
      }
    }
    
    startAnimation()
  }, [controls, singleSetWidth, isHovered])
  
  const handleHoverStart = () => {
    setIsHovered(true)
    controls.stop()
  }
  
  const handleHoverEnd = () => {
    setIsHovered(false)
  }

  return (
    <div className="w-full overflow-hidden bg-gradient-to-r from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 py-8">
      <div className="mb-6 text-center">
        <div className="flex items-center justify-center gap-3 mb-2">
          <span className="text-4xl">🎲</span>
          <GradientText className="text-4xl font-bold leading-tight" colors={["#60a5fa", "#a855f7", "#ec4899"]} animationSpeed={10}>
            Technologies I Work With
          </GradientText>
        </div>
        <p className="text-slate-600 dark:text-slate-400">
          Constantly learning and exploring new tools
        </p>
      </div>
      
      <div 
        className="relative"
        onMouseEnter={handleHoverStart}
        onMouseLeave={handleHoverEnd}
      >
        {/* Gradient overlays for smooth fade effect */}
        <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-slate-50 to-transparent dark:from-slate-900 dark:to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-slate-50 to-transparent dark:from-slate-900 dark:to-transparent z-10 pointer-events-none" />
        
        <motion.div
          className="flex gap-12 items-center"
          animate={controls}
          initial={{ x: 0 }}
          style={{ width: `${triplicatedTechs.length * 168}px` }}
        >
          {triplicatedTechs.map((tech, index) => (
            <motion.div
              key={`${tech.name}-${index}`}
              className="flex flex-col items-center justify-center min-w-[120px] p-4 bg-white dark:bg-slate-800 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 border border-slate-200 dark:border-slate-700"
              whileHover={{ 
                scale: 1.05,
                y: -5
              }}
              transition={{ type: "spring", stiffness: 300 }}
              onMouseEnter={(e) => e.stopPropagation()}
            >
              <div className={`text-3xl mb-2 ${tech.color}`}>
                <tech.icon size={32} />
              </div>
              <span className="text-sm font-medium text-slate-700 dark:text-slate-300 text-center">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}