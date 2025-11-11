"use client"

import React, { useState } from "react"
import { useTrial } from "@/lib/trial-context"
import TrialModal from "@/components/ui/trial-modal"

interface TrialBlurWrapperProps {
  children: React.ReactNode
  isRestricted?: boolean
  featureName?: string
}

export default function TrialBlurWrapper({ 
  children, 
  isRestricted = true, 
  featureName = "this feature" 
}: TrialBlurWrapperProps) {
  const [showModal, setShowModal] = useState(false)
  const { isTrialMode } = useTrial()

  const shouldBlur = isTrialMode && isRestricted

  if (!shouldBlur) {
    return <>{children}</>
  }

  return (
    <>
      <div className="relative">
        <div className="filter blur-sm pointer-events-none select-none opacity-60">
          {children}  
        </div>
        
        {/* Unlock overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-neutral-600/50 rounded-xl">
          <div className="text-white text-sm font-medium mb-2 text-center px-2">
            {featureName}
          </div>
          <button
            onClick={() => setShowModal(true)}
            className="px-4 py-2 bg-[#003d5c] hover:bg-[#005f7f] text-white rounded-lg font-medium shadow-lg transition-all duration-200 hover:scale-105"
          >
            Unlock
          </button>
        </div>
      </div>

      <TrialModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        featureName={featureName}
      />
    </>
  )
}