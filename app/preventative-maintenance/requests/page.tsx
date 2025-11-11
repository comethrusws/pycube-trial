"use client"

import DashboardLayout from "@/components/dashboard/dashboard-layout"
import MaintenanceRequestContent from "@/components/preventative-maintenance/maintenance-request-content"
import TrialGuard from "@/components/ui/trial-guard"

export default function MaintenanceRequestPage() {
  return (
    <TrialGuard>
      <DashboardLayout>
        <MaintenanceRequestContent />
      </DashboardLayout>
    </TrialGuard>
  )
}
