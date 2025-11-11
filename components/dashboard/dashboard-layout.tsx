"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import Sidebar from "./sidebar"
import Header from "./header"
import DashboardContent from "./dashboard-content"
import AiAssistant from "./ai-assistant"
import { useTrial } from "@/lib/trial-context"
import TrialModal from "@/components/ui/trial-modal"

export default function DashboardLayout({ children }: { children?: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [showTrialModal, setShowTrialModal] = useState(false)
  const pathname = usePathname()
  const { isTrialMode, isPageRestricted, getFeatureName } = useTrial()

  const isRestricted = isTrialMode && isPageRestricted(pathname)

  // Auto-show modal for restricted pages
  useEffect(() => {
    if (isRestricted) {
      setShowTrialModal(true)
    }
  }, [isRestricted])

  return (
    <div className="flex h-screen bg-slate-50">
      <Sidebar isOpen={sidebarOpen} onToggle={() => setSidebarOpen(!sidebarOpen)} />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header onMenuClick={() => setSidebarOpen(!sidebarOpen)} />
        <main 
          className={`flex-1 overflow-auto ${isRestricted ? 'filter blur-sm pointer-events-none select-none' : ''}`}
          style={isRestricted ? { filter: "blur(4px)" } : {}}
        >
          {children || <DashboardContent />}
        </main>
      </div>
      <AiAssistant />
      
      <TrialModal
        isOpen={showTrialModal}
        onClose={() => setShowTrialModal(false)}
        featureName={getFeatureName(pathname)}
      />
    </div>
  )
}
