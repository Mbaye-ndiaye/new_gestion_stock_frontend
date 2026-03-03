import { Outlet } from "react-router-dom"

export default function AdminLayout() {
  return (
    <div>
      <h2>Admin Panel</h2>
      {/* Navbar ici */}
      <Outlet />
    </div>
  )
}