"use client"

import { SidebarNav } from "@/components/sidebar-nav"
import { DashboardHeader } from "@/components/dashboard-header"
import { ProtectedRoute } from "@/components/protected-route"
import { OrderManagement } from "@/components/order-management"

export default function OrdersPage() {
  return (
    <ProtectedRoute>
      <div className="flex min-h-screen bg-background">
        <SidebarNav />
        <div className="flex-1">
          <DashboardHeader />
          <main className="container mx-auto px-4 py-6">
            <OrderManagement />
          </main>
        </div>
      </div>
    </ProtectedRoute>
  )
}
