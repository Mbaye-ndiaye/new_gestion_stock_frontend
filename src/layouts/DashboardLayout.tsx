import { Outlet } from "react-router"
import { useState } from "react"
import Sidebar from "../shared/components/Sidebar"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Header from "../shared/components/header"


export default function DashboardLayout() {
  const [open, setOpen] = useState(false)
  return (
    <div className="min-h-screen bg-[var(--color-background)]">
      <Sidebar collapsed={!open} />
      
      <div className={`transition-all duration-300 ${open ? "lg:ml-64 sm:ml-16" : "ml-16"}`}>
        <Header />
        
        {/* Flèche toggle */}
        <button 
          onClick={() => setOpen(!open)}
          className={` ${open ? "fixed top-3 left-60" : "fixed top-3 left-10"}  z-50 p-2 bg-[var(--color-card)] rounded-full shadow-lg hover:shadow-xl transition-all`}
        >
          {open ? (
            <ChevronLeft className="h-5 w-5 text-[var(--color-foreground)]" />
          ) : (
            <ChevronRight className="h-5 w-5 text-[var(--color-foreground)]" />
          )}
        </button>
        
        <main className="p-6">
          <Outlet />
        </main>
      </div>
    </div>
  )
}