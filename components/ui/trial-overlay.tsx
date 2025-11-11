"use client"

import React, { useState } from "react"
import { usePathname } from "next/navigation"
import { useTrial } from "@/lib/trial-context"
import TrialModal from "@/components/ui/trial-modal"

interface TrialOverlayProps {
  children: React.ReactNode
}

export default function TrialOverlay({ children }: TrialOverlayProps) {
  const pathname = usePathname()
  const { isTrialMode, isPageRestricted, getFeatureName } = useTrial()
  const [showModal, setShowModal] = useState(false)

  const isRestricted = isTrialMode && isPageRestricted(pathname)

  const handleOverlayClick = () => {
    if (isRestricted) {
      setShowModal(true)
    }
  }

  if (!isRestricted) {
    return <>{children}</>
  }

  return (
    <>
      <div className="relative">
        {/* Grayed out content */}
        <div 
          className="filter grayscale opacity-60 pointer-events-none select-none"
          style={{ filter: "grayscale(100%) opacity(0.6)" }}
        >
          {children}
        </div>
        
        {/* Invisible overlay for clicks */}
        <div 
          className="absolute inset-0 z-10 cursor-pointer"
          onClick={handleOverlayClick}
          title="Click to learn more about upgrading"
        />

        {/* Trial indicator badge */}
        <div className="absolute top-4 right-4 z-20">
          <div className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg animate-pulse">
            Trial Mode
          </div>
        </div>
      </div>

      <TrialModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        featureName={getFeatureName(pathname)}
      />
    </>
  )
}