"use client"

import DashboardLayout from "@/components/dashboard/dashboard-layout"
import TrialGuard from "@/components/ui/trial-guard"

export default function DashboardPage() {
  return (
    <TrialGuard>
      <DashboardLayout />
    </TrialGuard>
  )
}
