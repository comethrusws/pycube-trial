"use client"

import React, { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import { useTrial } from "@/lib/trial-context"
import TrialModal from "@/components/ui/trial-modal"

interface TrialGuardProps {
  children: React.ReactNode
  fallbackContent?: React.ReactNode
}

export default function TrialGuard({ children, fallbackContent }: TrialGuardProps) {
  const pathname = usePathname()
  const { isTrialMode, isPageRestricted, getFeatureName } = useTrial()
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    if (isTrialMode && isPageRestricted(pathname)) {
      setShowModal(true)
    }
  }, [pathname, isTrialMode, isPageRestricted])

  if (isTrialMode && isPageRestricted(pathname)) {
    return (
      <>
        {fallbackContent || (
          <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
            <div className="max-w-md w-full text-center">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <div className="text-6xl mb-4">🔒</div>
                <h1 className="text-2xl font-bold text-gray-900 mb-2">
                  Feature Locked
                </h1>
                <p className="text-gray-600 mb-6">
                  This feature is not available in the trial version.
                </p>
                <button
                  onClick={() => setShowModal(true)}
                  className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-2 rounded-lg transition-colors"
                >
                  Learn More
                </button>
              </div>
            </div>
          </div>
        )}
        
        <TrialModal
          isOpen={showModal}
          onClose={() => setShowModal(false)}
          featureName={getFeatureName(pathname)}
        />
      </>
    )
  }

  return <>{children}</>
}