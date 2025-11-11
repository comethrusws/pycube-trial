"use client"

import React, { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import { useTrial } from "@/lib/trial-context"
import TrialModal from "@/components/ui/trial-modal"

interface TrialOverlayProps {
  children: React.ReactNode
  blurMainContentOnly?: boolean
}

export default function TrialOverlay({ children, blurMainContentOnly = false }: TrialOverlayProps) {
  const pathname = usePathname()
  const { isTrialMode, isPageRestricted, getFeatureName } = useTrial()
  const [showModal, setShowModal] = useState(false)

  const isRestricted = isTrialMode && isPageRestricted(pathname)

  // Auto-show modal for restricted pages
  useEffect(() => {
    if (isRestricted) {
      setShowModal(true)
    }
  }, [isRestricted])

  if (!isRestricted) {
    return <>{children}</>
  }

  return (
    <>
      {children}
      <TrialModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        featureName={getFeatureName(pathname)}
      />
    </>
  )
}