"use client"

import DashboardLayout from "@/components/dashboard/dashboard-layout"
import TrialOverlay from "@/components/ui/trial-overlay"

export default function DashboardPage() {
  return (
    <TrialOverlay>
      <DashboardLayout />
    </TrialOverlay>
  )
}
