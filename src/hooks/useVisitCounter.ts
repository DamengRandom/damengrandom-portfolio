'use client'

import { useState, useEffect } from 'react'

interface VisitData {
  totalVisits: number
  lastVisit: string
  sessionVisits: number
  uniqueVisits: number
}

export function useVisitCounter() {
  const [visitData, setVisitData] = useState<VisitData>({
    totalVisits: 0,
    lastVisit: '',
    sessionVisits: 0,
    uniqueVisits: 0
  })
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const initializeCounter = () => {
      try {
        // Get existing data from localStorage
        const storedData = localStorage.getItem('portfolio-visit-data')
        const sessionData = sessionStorage.getItem('portfolio-session-data')
        
        const now = new Date().toISOString()
        const today = new Date().toDateString()
        
        // Initialize with default values
        let totalVisits = 1
        let uniqueVisits = 1
        let sessionVisits = 1

        if (storedData) {
          const parsed = JSON.parse(storedData)
          const lastVisitDate = new Date(parsed.lastVisit).toDateString()
          
          // Increment total visits
          totalVisits = (parsed.totalVisits || 0) + 1
          
          // Check if it's a unique visit (different day)
          if (lastVisitDate !== today) {
            uniqueVisits = (parsed.uniqueVisits || 0) + 1
          } else {
            uniqueVisits = parsed.uniqueVisits || 1
          }
        }

        // Handle session visits
        if (sessionData) {
          const sessionParsed = JSON.parse(sessionData)
          sessionVisits = (sessionParsed.sessionVisits || 0) + 1
        }

        const finalData: VisitData = {
          totalVisits,
          lastVisit: now,
          sessionVisits,
          uniqueVisits
        }

        // Save to storage
        localStorage.setItem('portfolio-visit-data', JSON.stringify({
          totalVisits: finalData.totalVisits,
          lastVisit: finalData.lastVisit,
          uniqueVisits: finalData.uniqueVisits
        }))
        
        sessionStorage.setItem('portfolio-session-data', JSON.stringify({
          sessionVisits: finalData.sessionVisits,
          sessionStart: now
        }))

        setVisitData(finalData)
        setIsLoading(false)
      } catch (error) {
        console.error('Error initializing visit counter:', error)
        setIsLoading(false)
      }
    }

    // Small delay to ensure proper hydration
    const timer = setTimeout(initializeCounter, 100)
    return () => clearTimeout(timer)
  }, [])

  const resetCounter = () => {
    try {
      localStorage.removeItem('portfolio-visit-data')
      sessionStorage.removeItem('portfolio-session-data')
      setVisitData({
        totalVisits: 0,
        lastVisit: '',
        sessionVisits: 0,
        uniqueVisits: 0
      })
    } catch (error) {
      console.error('Error resetting counter:', error)
    }
  }

  const getVisitStats = () => {
    return {
      total: visitData.totalVisits,
      unique: visitData.uniqueVisits,
      session: visitData.sessionVisits,
      lastVisit: visitData.lastVisit ? new Date(visitData.lastVisit) : null
    }
  }

  return {
    visitData,
    isLoading,
    resetCounter,
    getVisitStats
  }
}