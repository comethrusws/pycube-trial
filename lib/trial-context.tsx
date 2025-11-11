"use client"

import { createContext, useContext, ReactNode } from "react"

interface TrialContextType {
  isTrialMode: boolean
  isPageRestricted: (pathname: string) => boolean
  getFeatureName: (pathname: string) => string
}

const TrialContext = createContext<TrialContextType | undefined>(undefined)

// Define which pages are restricted in trial mode
const RESTRICTED_PATHS = [
  "/mobile/asset-search",
  "/preventative-maintenance",
  "/preventative-maintenance/requests",
  "/preventative-maintenance/dashboard",
  "/space-management",
  "/space-management/buildings",
  "/space-management/floors", 
  "/space-management/zones",
  "/space-management/readers",
  "/facilities",
  "/ai-assistant"
]

// Define accessible pages in trial mode
const ACCESSIBLE_PATHS = [
  "/system-integrations",
  "/product-categories",
  "/products", 
  "/asset-protection",
  "/asset-protection/geofencing",
  "/asset-protection/movement-logs",
  "/asset-utilization",
  "/asset-utilization/location-lists",
  "/compliance",
  "/compliance/reports",
  "/assets"
]

// Feature name mapping for better user experience
const FEATURE_NAMES: Record<string, string> = {
  "/dashboard": "the main dashboard",
  "/mobile/asset-search": "Asset Search & Retrieval",
  "/preventative-maintenance": "Preventative Maintenance",
  "/space-management": "Space Management",
  "/facilities": "Facilities Management",
  "/ai-assistant": "AI Assistant"
}

export function TrialProvider({ children }: { children: ReactNode }) {
  // For now, we'll assume it's always trial mode
  // In a real app, this would come from user settings or API
  const isTrialMode = true

  const isPageRestricted = (pathname: string): boolean => {
    if (!isTrialMode) return false
    
    // Check if path exactly matches or starts with restricted path
    return RESTRICTED_PATHS.some(restrictedPath => {
      return pathname === restrictedPath || 
             (pathname.startsWith(restrictedPath + "/") && restrictedPath !== "/")
    })
  }

  const getFeatureName = (pathname: string): string => {
    // Find the best matching feature name
    for (const [path, name] of Object.entries(FEATURE_NAMES)) {
      if (pathname === path || pathname.startsWith(path + "/")) {
        return name
      }
    }
    return "this feature"
  }

  return (
    <TrialContext.Provider value={{ isTrialMode, isPageRestricted, getFeatureName }}>
      {children}
    </TrialContext.Provider>
  )
}

export function useTrial() {
  const context = useContext(TrialContext)
  if (context === undefined) {
    throw new Error("useTrial must be used within a TrialProvider")
  }
  return context
}