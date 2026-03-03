import { Outlet } from "react-router-dom"

export default function EmployeeLayout() {
  return (
    <div>
      <h2>Employee Panel</h2>
      {/* Navbar ici */}
      <Outlet />
    </div>
  )
}