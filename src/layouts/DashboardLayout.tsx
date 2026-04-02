import { Outlet } from "react-router-dom"
import Sidebar from "../shared/components/Sidebar"
import { useState } from "react"
import Header from "../shared/components/header"


export default function DashboardLayout() {
  const [open, setOpen] = useState(true)
  return (
    <div className="flex bg-[var(--color-small-foreground)]">
      <div className={`fixed top-0 left-0 h-full transition-all duration-300 ${open ? "w-64" : "w-16"}`}>
        <Sidebar collapsed={!open} />
      </div>
      

      <div className={`flex-1 transition-all duration-300 ${open ? "ml-64" : "ml-16"}`}>
        
        <Header toggleSidebar={() => setOpen(!open)} />

        <main className="p-6">
          <Outlet />
        </main>

      </div>
    </div>
  )
}