'use client'

import { motion } from 'framer-motion'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
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
  Globe
} from 'lucide-react'
import { CompactVisitCounter } from '@/components/VisitCounter'
import TechSlider from '@/components/TechSlider'

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

const skills = [
  { name: 'React', level: 95, color: 'bg-blue-500' },
  { name: 'Vue.js', level: 90, color: 'bg-green-500' },
  { name: 'Next.js', level: 85, color: 'bg-black' },
  { name: 'TypeScript', level: 88, color: 'bg-blue-600' },
  { name: 'GraphQL', level: 75, color: 'bg-pink-500' },
  { name: 'Kubernetes', level: 70, color: 'bg-blue-400' },
  { name: 'AI/ML', level: 65, color: 'bg-purple-500' }
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
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-teal-600/10" />
        <motion.div 
          className="relative max-w-7xl mx-auto"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <div className="text-center">
            <motion.div variants={fadeInUp} className="mb-8">
              <Avatar className="w-32 h-32 mx-auto mb-6 ring-4 ring-blue-500/20 shadow-2xl">
                <AvatarImage src="/api/placeholder/128/128" alt="DamengRandom" />
                <AvatarFallback className="text-2xl font-bold bg-gradient-to-br from-blue-500 to-purple-600 text-white">DW</AvatarFallback>
              </Avatar>
            </motion.div>
            
            <motion.div variants={fadeInUp} className="space-y-4">
              <div className="flex justify-center gap-2 mb-4">
                 <Badge variant="secondary" className="px-3 py-1">G&apos;day 🤗</Badge>
                 <Badge variant="secondary" className="px-3 py-1">Aloha 🍻</Badge>
                 <Badge variant="secondary" className="px-3 py-1">Hello 👋</Badge>
               </div>
              
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 bg-clip-text text-transparent leading-tight">
                DamengRandom
              </h1>
              
              <p className="text-xl sm:text-2xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
                A passionate <span className="font-semibold text-blue-600">frontend developer</span> from Sydney
              </p>
              
              <div className="flex items-center justify-center gap-2 text-slate-500 mb-3">
                <MapPin className="w-4 h-4" />
                <span>Australia</span>
              </div>
              
              {/* Compact Visit Counter */}
              <div className="flex justify-center">
                <CompactVisitCounter />
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="mt-8 flex justify-center gap-4">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                onClick={() => window.open('https://github.com/DamengRandom', '_blank')}
              >
                <Github className="w-4 h-4 mr-2" />
                GitHub
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => window.open('mailto:damonwu0605@gmail.com', '_blank')}
              >
                <Mail className="w-4 h-4 mr-2" />
                Contact
              </Button>
            </motion.div>
          </div>
        </motion.div>
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
            <h2 className="text-4xl font-bold mb-4">About Me</h2>
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
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardHeader className="text-center">
                    <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white">
                      {item.icon}
                    </div>
                    <CardTitle className="text-lg">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-center text-slate-600 dark:text-slate-300">{item.desc}</p>
                  </CardContent>
                </Card>
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
            <h2 className="text-4xl font-bold mb-4">🛠️ Skills & Technologies</h2>
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
            <h2 className="text-4xl font-bold mb-4">📊 Knowledge Collection</h2>
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
            <Card className="p-8 shadow-xl">
              <CardHeader>
                <div className="flex items-center justify-center gap-2 mb-4">
                  <Zap className="w-6 h-6 text-yellow-500" />
                  <CardTitle className="text-2xl">Current Status</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-slate-600 dark:text-slate-300 mb-6">
                  🚀 Doing an AI project at the moment, will keep updated ~
                </p>
                <div className="flex items-center justify-center gap-4">
                  <Badge variant="secondary" className="px-4 py-2">
                    <Globe className="w-4 h-4 mr-2" />
                    Discord: mundo5568
                  </Badge>
                </div>
              </CardContent>
            </Card>
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
              © 2025 DamengRandom. Built with Next.js, TypeScript & shadcn/ui (This is an AI generate site Thx for TRAE 🚀, thanks for visiting the site ❤️)
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
