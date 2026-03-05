import { NavLink } from "react-router-dom"
import { mockUser } from "../utils/mockAuth"

export default function Sidebar() {
  const role = mockUser.role

  const adminLinks = [
    { name: "Dashboard", path: "/dashboard" },
    { name: "Produits", path: "/products" },
    { name: "Utilisateurs", path: "/users" },
    { name: "Paramètres", path: "/settings" }
  ]

  const employeeLinks = [
    { name: "Dashboard", path: "/dashboard" },
    { name: "Produits", path: "/products" },
    { name: "Mouvements Stock", path: "/stock" }
  ]

  const links = role === "ADMIN" ? adminLinks : employeeLinks

  return (
    <div className="w-64 h-screen bg-gray-900 text-white p-4">
      <h2 className="text-xl font-bold mb-6">Stock Manager</h2>

      <ul className="space-y-3">
        {links.map((link) => (
          <li key={link.name}>
            <NavLink
              to={link.path}
              className={({ isActive }) =>
                `block p-2 rounded ${
                  isActive ? "bg-blue-600" : "hover:bg-gray-700"
                }`
              }
            >
              {link.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  )
}