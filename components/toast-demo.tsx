"use client"

import { Button } from "@/components/ui/button"
import { useToast } from "@/lib/hooks/use-toast"

export function ToastDemo() {
  const toast = useToast()

  return (
    <div className="space-y-4 p-6">
      <h2 className="text-2xl font-bold">Toast Notifications Demo</h2>
      
      <div className="grid grid-cols-2 gap-4">
        <Button 
          onClick={() => toast.success("Success!", "Operation completed successfully")}
          className="bg-green-600 hover:bg-green-700"
        >
          Success Toast
        </Button>
        
        <Button 
          onClick={() => toast.error("Error!", "Something went wrong")}
          className="bg-red-600 hover:bg-red-700"
        >
          Error Toast
        </Button>
        
        <Button 
          onClick={() => toast.warning("Warning!", "Please check your input")}
          className="bg-yellow-600 hover:bg-yellow-700"
        >
          Warning Toast
        </Button>
        
        <Button 
          onClick={() => toast.info("Info", "Here's some information for you")}
          className="bg-blue-600 hover:bg-blue-700"
        >
          Info Toast
        </Button>
        
        <Button 
          onClick={() => {
            const loadingId = toast.loading("Processing...")
            setTimeout(() => {
              toast.dismiss(loadingId)
              toast.success("Done!", "Process completed")
            }, 3000)
          }}
          className="bg-purple-600 hover:bg-purple-700"
        >
          Loading Toast
        </Button>
        
        <Button 
          onClick={() => {
            toast.success("Multiple Toasts", "First toast")
            setTimeout(() => toast.info("Multiple Toasts", "Second toast"), 500)
            setTimeout(() => toast.warning("Multiple Toasts", "Third toast"), 1000)
          }}
          variant="outline"
        >
          Multiple Toasts
        </Button>
      </div>
    </div>
  )
}
