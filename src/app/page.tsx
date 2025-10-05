'use client'

import { motion } from 'framer-motion'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import TiltedCard from '@/components/TiltedCard'
import { Separator } from '@/components/ui/separator'
import { 
  Github, 
  Linkedin, 
  Mail, 
  MapPin, 
  Rocket, 
  Brain, 
  Heart,
  ExternalLink,
  Zap,
  Coffee,
  Globe,
  BookOpen
} from 'lucide-react'
import TechSlider from '@/components/TechSlider'
import LetterGlitch from '@/components/LetterGlitch';
import GradientText from '@/components/GradientText';
import CardSwap from '@/components/CardSwap';

const skills = [
  { name: 'React', level: 95, color: 'bg-blue-500' },
  { name: 'Vue.js', level: 80, color: 'bg-green-500' },
  { name: 'Next.js', level: 60, color: 'bg-black' },
  { name: 'TypeScript', level: 90, color: 'bg-blue-600' },
  { name: 'GraphQL', level: 55, color: 'bg-pink-500' },
  { name: 'Kubernetes', level: 60, color: 'bg-blue-400' },
  { name: 'AI/ML', level: 40, color: 'bg-purple-500' }
]

const knowledgePoints = [
  { title: 'System Design Notes', icon: '📘', description: 'System design concepts and patterns', link: 'https://github.com/DamengRandom/system-design-notes' },
  { title: 'Random Notes', icon: '🧠', description: 'Bits of knowledge from various areas', link: 'https://github.com/DamengRandom/random-notes' },
  { title: 'React Tricks 2025', icon: '⚛️', description: 'Quick React tips and reminders', link: 'https://github.com/DamengRandom/react-tricks-recalls-2025' },
  { title: 'Next.js Notes', icon: '💻', description: 'Early notes on using Next.js', link: 'https://github.com/DamengRandom/nextjs-recalls/blob/master/general-notes.md' },
  { title: 'TypeScript Recall', icon: '📝', description: 'Notes for brushing up before interviews', link: 'https://github.com/DamengRandom/ts-2025-recalls' },
  { title: 'Coding Patterns', icon: '🧩', description: 'Best practices and design patterns', link: 'https://github.com/DamengRandom/code-patterns-recall-2025' },
  { title: 'SOLID Principles', icon: '📐', description: 'Refactoring and design thinking', link: 'https://github.com/DamengRandom/solid-principle-recalls' },
  { title: 'Kubernetes CKAD Notes', icon: '☸️', description: 'Hands-on Kubernetes config & commands', link: 'https://github.com/DamengRandom/ckad-try-2025' },
  { title: 'Jenkins Recall', icon: '🛠️', description: 'Jenkins basics and automation workflows', link: 'https://github.com/DamengRandom/damon-jenkins-recall-2024' },
  { title: 'Git Cherry Pick Notes', icon: '🔀', description: 'Useful Git tips and recalls', link: 'https://github.com/DamengRandom/cherry-pick-recall' }
]

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-800">
      {/* Hero with LetterGlitch background + overlay texts */}
      <section className="relative overflow-hidden min-h-screen py-0 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <LetterGlitch
            glitchSpeed={50}
            centerVignette
            outerVignette={false}
            smooth
            useGradient
            gradientStops={["#60a5fa", "#a855f7", "#ec4899"]}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto min-h-screen flex flex-col items-center justify-center text-center gap-3">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight">
            DamengRandom
          </h1>
          <p className="text-xl sm:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            A passionate <span className="font-semibold text-white">JavaScript Engineer</span> from Sydney
          </p>
          <div className="flex items-center justify-center gap-2 text-white/70 leading-none">
            <MapPin className="w-4 h-4" />
            <span>Australia</span>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="text-4xl">🥐</span>
              <GradientText className="text-4xl font-bold leading-tight" colors={["#60a5fa", "#a855f7", "#ec4899"]} animationSpeed={10}>
                About Me
              </GradientText>
            </div>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              Welcome to damengrandom repository - my personal portfolio showcasing my journey as a developer
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <Rocket className="w-6 h-6" />, title: "Currently Working", desc: "Vue/React UI projects + AI stuffs" },
              { icon: <Brain className="w-6 h-6" />, title: "Learning", desc: "Next.js, GraphQL, Prisma, Kubernetes and AI techs" },
              { icon: <Heart className="w-6 h-6" />, title: "Collaboration", desc: "Open-source frontend projects" },
              { icon: <Coffee className="w-6 h-6" />, title: "Fun Fact", desc: "Love working on fancy projects ~" }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <TiltedCard
                  imageSrc="/card-plane.svg"
                  altText={item.title}
                  captionText={item.title}
                  containerHeight="220px"
                  imageHeight="220px"
                  imageWidth="100%"
                  scaleOnHover={1.02}
                  rotateAmplitude={6}
                  showMobileWarning={false}
                  showTooltip={false}
                  displayOverlayContent
                  overlayContent={(
                    <div className="h-full w-full flex flex-col items-center justify-center gap-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white/95 dark:bg-slate-900/80 p-6 shadow-md hover:shadow-lg transition-shadow">
                      <div className="w-12 h-12 mx-auto bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white">
                        {item.icon}
                      </div>
                      <div className="leading-none font-semibold text-lg text-slate-800 dark:text-slate-100">{item.title}</div>
                      <p className="text-center text-slate-600 dark:text-slate-300 text-sm">{item.desc}</p>
                    </div>
                  )}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Slider */}
      <TechSlider />

      {/* Skills Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="text-4xl">🛠️</span>
              <GradientText className="text-4xl font-bold leading-tight" colors={["#60a5fa", "#a855f7", "#ec4899"]} animationSpeed={10}>
                Skills & Technologies
              </GradientText>
            </div>
            <p className="text-xl text-slate-600 dark:text-slate-300">
              Technologies I work with and continuously improve
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-semibold text-lg">{skill.name}</h3>
                    <span className="text-sm text-slate-500">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                    <motion.div
                      className={`h-2 rounded-full ${skill.color}`}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    />
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Knowledge Points Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="text-4xl">📚</span>
              <GradientText className="text-4xl font-bold leading-tight" colors={["#60a5fa", "#a855f7", "#ec4899"]} animationSpeed={10}>
                Knowledge Collection
              </GradientText>
            </div>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              Personal note collections I keep updating and revisiting for continuous learning
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {knowledgePoints.map((point, index) => (
              <motion.div
                key={point.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card 
                  className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group cursor-pointer"
                  onClick={() => window.open(point.link, '_blank')}
                >
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{point.icon}</span>
                      <CardTitle className="text-lg group-hover:text-blue-600 transition-colors">
                        {point.title}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-slate-600 dark:text-slate-300">
                      {point.description}
                    </CardDescription>
                    <div className="mt-4 flex items-center text-blue-600 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                      <span>Learn more</span>
                      <ExternalLink className="w-3 h-3 ml-1" />
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Status */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <CardSwap
              hoverToSwap
              autoplay
              intervalMs={2800}
              front={
                <div className="p-8 h-full">
                  <div className="flex items-center justify-center gap-2 mb-4">
                    <Zap className="w-6 h-6 text-yellow-500" />
                    <GradientText className="text-4xl font-bold leading-tight" colors={["#60a5fa", "#a855f7", "#ec4899"]} animationSpeed={10}>
                      Current Status
                    </GradientText>
                  </div>
                  <p className="text-lg text-slate-600 dark:text-slate-300 mb-6">
                    🚀 Doing an AI project at the moment, will keep updated ~
                  </p>
                  <div className="flex items-center justify-center gap-4">
                    <Badge variant="secondary" className="px-4 py-2">
                      <Globe className="w-4 h-4 mr-2" />
                      Discord: mundo5568
                    </Badge>
                  </div>
                </div>
              }
              back={
                <div className="p-8 h-full">
                  <div className="flex items-center justify-center gap-2 mb-4">
                    <Coffee className="w-6 h-6 text-pink-500" />
                    <GradientText className="text-4xl font-bold leading-tight" colors={["#60a5fa", "#a855f7", "#ec4899"]} animationSpeed={10}>
                      Currently Building
                    </GradientText>
                  </div>
                  <p className="text-lg text-slate-600 dark:text-slate-300 mb-6">
                    Brewing ideas and shipping features. Ping me anytime.
                  </p>
                  <div className="flex items-center justify-center gap-4">
                    <Badge variant="secondary" className="px-4 py-2">
                      <Globe className="w-4 h-4 mr-2" />
                      Email: damonwu0605@gmail.com
                    </Badge>
                  </div>
                </div>
              }
            />
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <p className="text-lg mb-4">
              If you like my portfolio, please give me a ⭐ on GitHub!
            </p>
            <div className="flex justify-center gap-6 mb-8">
              <Button 
                variant="ghost" 
                size="sm" 
                className="text-white hover:text-blue-400"
                onClick={() => window.open('https://github.com/DamengRandom', '_blank')}
              >
                <Github className="w-5 h-5 mr-2" />
                GitHub
              </Button>
              <Button 
                variant="ghost" 
                size="sm" 
                className="text-white hover:text-blue-400"
                onClick={() => window.open('https://www.linkedin.com/in/damon-wu-aab280107/', '_blank')}
              >
                <Linkedin className="w-5 h-5 mr-2" />
                LinkedIn
              </Button>
              <Button 
                variant="ghost" 
                size="sm" 
                className="text-white hover:text-blue-400"
                onClick={() => window.open('mailto:damonwu0605@gmail.com', '_blank')}
              >
                <Mail className="w-5 h-5 mr-2" />
                Email
              </Button>
            </div>
            
            <Separator className="my-6 bg-slate-700" />
            <p className="text-slate-400">
              © 2025 DamengRandom. Built with Next.js, TypeScript & shadcn/ui (Thanks for visiting the site ❤️)
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
