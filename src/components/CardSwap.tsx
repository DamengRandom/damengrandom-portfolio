"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface CardSwapProps {
  front: React.ReactNode
  back: React.ReactNode
  className?: string
  autoplay?: boolean
  intervalMs?: number
  hoverToSwap?: boolean
}

export default function CardSwap({
  front,
  back,
  className,
  autoplay = false,
  intervalMs = 2500,
  hoverToSwap = true
}: CardSwapProps) {
  const [isFront, setIsFront] = React.useState(true)
  const timerRef = React.useRef<number | null>(null)

  React.useEffect(() => {
    if (!autoplay) return
    timerRef.current = window.setInterval(() => {
      setIsFront((v) => !v)
    }, intervalMs)
    return () => {
      if (timerRef.current) window.clearInterval(timerRef.current)
    }
  }, [autoplay, intervalMs])

  const handleEnter = () => {
    if (hoverToSwap && isFront) setIsFront(false)
  }
  const handleLeave = () => {
    if (hoverToSwap && !isFront) setIsFront(true)
  }

  return (
    <div
      className={cn(
        "relative mx-auto w-full max-w-2xl",
        "min-h-[220px]",
        className
      )}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      {/* Back card */}
      <motion.div
        aria-hidden={isFront}
        initial={false}
        animate={{
          y: isFront ? 12 : 0,
          rotate: isFront ? 1.5 : 0,
          scale: isFront ? 0.98 : 1,
          zIndex: isFront ? 10 : 20
        }}
        transition={{ type: "spring", stiffness: 260, damping: 24 }}
        className={cn(
          "absolute inset-0",
          "rounded-xl border shadow-lg",
          "bg-white/90 dark:bg-slate-900/80 backdrop-blur",
          "overflow-hidden"
        )}
      >
        {back}
      </motion.div>

      {/* Front card */}
      <motion.div
        initial={false}
        animate={{
          y: isFront ? 0 : -12,
          rotate: isFront ? 0 : -2,
          scale: isFront ? 1 : 0.98,
          zIndex: isFront ? 20 : 10
        }}
        transition={{ type: "spring", stiffness: 260, damping: 24 }}
        className={cn(
          "absolute inset-0",
          "rounded-xl border shadow-xl",
          "bg-white/95 dark:bg-slate-900/85 backdrop-blur",
          "overflow-hidden"
        )}
      >
        {front}
      </motion.div>

      {/* Focus outline area for accessibility */}
      <button
        aria-label="Swap card"
        className="sr-only"
        onClick={() => setIsFront((v) => !v)}
      />
    </div>
  )
}