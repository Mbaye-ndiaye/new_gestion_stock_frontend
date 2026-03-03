import { createBrowserRouter } from "react-router-dom"
import Login from "../pages/auth/Login"
import DashboardLayout from "../layouts/DashboardLayout"

import Dashboard from "../pages/Admin/Dashboard"
import Products from "../pages/Admin/Products"
import Users from "../pages/Admin/Users"
import StockMovements from "../pages/Admin/StockMovements"
import Settings from "../pages/Admin/Settings"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />
  },
  {
    path: "/",
    element: <DashboardLayout />,
    children: [
      { path: "dashboard", element: <Dashboard /> },
      { path: "products", element: <Products /> },
      { path: "users", element: <Users /> },
      { path: "stock", element: <StockMovements /> },
      { path: "settings", element: <Settings /> }
    ]
  }
])