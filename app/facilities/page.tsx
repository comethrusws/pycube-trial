"use client"

import DashboardLayout from "@/components/dashboard/dashboard-layout"
import FacilitiesContent from "@/components/facilities/facilities-content"
import TrialGuard from "@/components/ui/trial-guard"

export default function FacilitiesPage() {
  return (
    <TrialGuard>
      <DashboardLayout>
        <FacilitiesContent />
      </DashboardLayout>
    </TrialGuard>
  )
}
