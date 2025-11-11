"use client"
import DashboardLayout from "@/components/dashboard/dashboard-layout"
import PreventativeMaintenanceDashboard from "@/components/preventative-maintenance/preventative-maintenance-dashboard"
import TrialOverlay from "@/components/ui/trial-overlay"

export default function PreventativeMaintenancePage() {
  return (
    <TrialOverlay>
      <DashboardLayout>
        <PreventativeMaintenanceDashboard />
      </DashboardLayout>
    </TrialOverlay>
  )
}
