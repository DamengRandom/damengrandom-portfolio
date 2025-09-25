'use client'

import { motion } from 'framer-motion'
import { Eye, Users, Clock, Calendar } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { useVisitCounter } from '@/hooks/useVisitCounter'

interface CounterItemProps {
  icon: React.ReactNode
  label: string
  value: number | string
  delay: number
  color: string
}

const CounterItem = ({ icon, label, value, delay, color }: CounterItemProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    className="flex items-center gap-2"
  >
    <div className={`p-2 rounded-lg ${color}`}>
      {icon}
    </div>
    <div className="flex flex-col">
      <motion.span
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.3, delay: delay + 0.2 }}
        className="text-lg font-bold text-foreground"
      >
        {value}
      </motion.span>
      <span className="text-xs text-muted-foreground">{label}</span>
    </div>
  </motion.div>
)

const AnimatedNumber = ({ value, duration = 1 }: { value: number; duration?: number }) => {
  return (
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      key={value}
    >
      <motion.span
        initial={{ y: 20 }}
        animate={{ y: 0 }}
        transition={{ duration }}
      >
        {value.toLocaleString()}
      </motion.span>
    </motion.span>
  )
}

// Compact one-liner version
export function CompactVisitCounter() {
  const { visitData, isLoading, getVisitStats } = useVisitCounter()
  const stats = getVisitStats()

  if (isLoading) {
    return (
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        className="w-3 h-3 border border-muted-foreground border-t-transparent rounded-full inline-block"
      />
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      className="inline-flex items-center gap-2 text-xs text-muted-foreground"
    >
      <Eye className="w-3 h-3" />
      <span className="font-medium">{stats.total.toLocaleString()}</span>
      <span>visits</span>
      <span className="text-muted-foreground/60">•</span>
      <Users className="w-3 h-3" />
      <span>{stats.unique}</span>
      <span>unique</span>
      <motion.div
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="w-1.5 h-1.5 bg-green-500 rounded-full ml-1"
      />
    </motion.div>
  )
}

// Keep the original full version for reference
export function VisitCounter() {
  const { visitData, isLoading, getVisitStats } = useVisitCounter()
  const stats = getVisitStats()

  if (isLoading) {
    return (
      <Card className="w-full max-w-md mx-auto bg-gradient-to-br from-background/50 to-background/80 backdrop-blur-sm border-border/50">
        <CardContent className="p-4">
          <div className="flex items-center justify-center">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              className="w-6 h-6 border-2 border-primary border-t-transparent rounded-full"
            />
          </div>
        </CardContent>
      </Card>
    )
  }

  const formatLastVisit = (date: Date | null) => {
    if (!date) return 'Never'
    const now = new Date()
    const diffMs = now.getTime() - date.getTime()
    const diffMins = Math.floor(diffMs / (1000 * 60))
    const diffHours = Math.floor(diffMs / (1000 * 60 * 60))
    const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24))

    if (diffMins < 1) return 'Just now'
    if (diffMins < 60) return `${diffMins}m ago`
    if (diffHours < 24) return `${diffHours}h ago`
    if (diffDays < 7) return `${diffDays}d ago`
    return date.toLocaleDateString()
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-md mx-auto"
    >
      <Card className="bg-gradient-to-br from-background/50 to-background/80 backdrop-blur-sm border-border/50 shadow-lg hover:shadow-xl transition-shadow duration-300">
        <CardContent className="p-6">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-center mb-6"
          >
            <div className="flex items-center justify-center gap-2 mb-2">
              <Eye className="w-5 h-5 text-primary" />
              <h3 className="text-lg font-semibold text-foreground">Visit Analytics</h3>
            </div>
            <Badge variant="secondary" className="text-xs">
              Real-time tracking
            </Badge>
          </motion.div>

          {/* Main Counter */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center mb-6"
          >
            <div className="text-3xl font-bold text-primary mb-1">
              <AnimatedNumber value={stats.total} />
            </div>
            <p className="text-sm text-muted-foreground">Total Visits</p>
          </motion.div>

          <Separator className="mb-4" />

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-4 mb-4">
            <CounterItem
              icon={<Users className="w-4 h-4 text-white" />}
              label="Unique Visits"
              value={stats.unique}
              delay={0.3}
              color="bg-gradient-to-r from-blue-500 to-blue-600"
            />
            <CounterItem
              icon={<Clock className="w-4 h-4 text-white" />}
              label="This Session"
              value={stats.session}
              delay={0.4}
              color="bg-gradient-to-r from-green-500 to-green-600"
            />
          </div>

          {/* Last Visit */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex items-center justify-center gap-2 text-xs text-muted-foreground"
          >
            <Calendar className="w-3 h-3" />
            <span>Last visit: {formatLastVisit(stats.lastVisit)}</span>
          </motion.div>

          {/* Pulse Animation for Active Status */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex items-center justify-center mt-4"
          >
            <div className="flex items-center gap-2">
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-2 h-2 bg-green-500 rounded-full"
              />
              <span className="text-xs text-muted-foreground">Live tracking</span>
            </div>
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  )
}