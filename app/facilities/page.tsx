"use client"

import DashboardLayout from "@/components/dashboard/dashboard-layout"
import FacilitiesContent from "@/components/facilities/facilities-content"
import TrialOverlay from "@/components/ui/trial-overlay"

export default function FacilitiesPage() {
  return (
    <TrialOverlay>
      <DashboardLayout>
        <FacilitiesContent />
      </DashboardLayout>
    </TrialOverlay>
  )
}
