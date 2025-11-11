"use client"

import DashboardLayout from "@/components/dashboard/dashboard-layout"
import MaintenanceRequestContent from "@/components/preventative-maintenance/maintenance-request-content"
import TrialOverlay from "@/components/ui/trial-overlay"

export default function MaintenanceRequestPage() {
  return (
    <TrialOverlay>
      <DashboardLayout>
        <MaintenanceRequestContent />
      </DashboardLayout>
    </TrialOverlay>
  )
}
