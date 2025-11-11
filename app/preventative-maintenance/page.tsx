"use client"
import DashboardLayout from "@/components/dashboard/dashboard-layout"
import PreventativeMaintenanceDashboard from "@/components/preventative-maintenance/preventative-maintenance-dashboard"
import TrialGuard from "@/components/ui/trial-guard"

export default function PreventativeMaintenancePage() {
  return (
    <TrialGuard>
      <DashboardLayout>
        <PreventativeMaintenanceDashboard />
      </DashboardLayout>
    </TrialGuard>
  )
}
