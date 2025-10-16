"use client"

import { SidebarNav } from "@/components/sidebar-nav"
import { DashboardHeader } from "@/components/dashboard-header"
import { ProtectedRoute } from "@/components/protected-route"

export default function SettingsPage() {
  return (
    <ProtectedRoute>
      <div className="flex min-h-screen bg-background">
        <SidebarNav />
        <div className="flex-1">
          <DashboardHeader />
          <main className="container mx-auto px-4 py-6">
            <h1 className="text-3xl font-bold mb-6">Settings</h1>
            <p className="text-muted-foreground">Settings page content goes here.</p>
          </main>
        </div>
      </div>
    </ProtectedRoute>
  )
}
