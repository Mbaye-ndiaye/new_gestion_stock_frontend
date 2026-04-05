
import { Link, useLocation } from "react-router"
import {
  LayoutDashboard,
  Package,
  ArrowLeftRight,
  Truck,
  ClipboardList,
  AlertTriangle,
  ShoppingCart,
  BarChart3,
  Users,
  Settings,
  Cog,
} from "lucide-react"
import { cn } from "../utils/utils"
import { Avatar, AvatarFallback } from "./ui/avatar"

interface NavItem {
  name: string
  path: string
  icon: React.ReactNode
  badge?: number
}

interface NavSection {
  title: string
  items: NavItem[]
}

const navSections: NavSection[] = [
  {
    title: "GESTION DE STOCK",
    items: [
      { name: "Dashboard", path: "/dashboard", icon: <LayoutDashboard className="h-5 w-5" /> },
      { name: "Catalogue Produits", path: "/products", icon: <Package className="h-5 w-5" /> },
      { name: "Mouvements Stock", path: "/stock-movements", icon: <ArrowLeftRight className="h-5 w-5" /> },
      { name: "Fournisseurs", path: "/suppliers", icon: <Truck className="h-5 w-5" /> },
      { name: "Inventaires", path: "/inventories", icon: <ClipboardList className="h-5 w-5" /> },
      { name: "Alertes & Seuils", path: "/alerts", icon: <AlertTriangle className="h-5 w-5" />, badge: 3 },
    ],
  },
  {
    title: "OPERATIONS",
    items: [
      { name: "Commandes d'Achat", path: "/purchase-orders", icon: <ShoppingCart className="h-5 w-5" /> },
      { name: "Mouvements Stock", path: "/stock-reports", icon: <BarChart3 className="h-5 w-5" /> },
    ],
  },
  {
    title: "SYSTEME",
    items: [
      { name: "Équipe & Rôles", path: "/team", icon: <Users className="h-5 w-5" /> },
      { name: "Configuration", path: "/settings", icon: <Cog className="h-5 w-5" /> },
    ],
  },
]

export default function Sidebar({ collapsed }: { collapsed?: boolean }) {
  const { pathname } = useLocation()

  return (
    <div className={`flex h-screen flex-col bg-[var(--color-background)] border-r border-[var(--color-input)] text-[var(--color-foreground)] fixed top-0 left-0 z-50 h-full transition-all duration-300 ${collapsed ? "w-16" : "w-64"}`}>
      {/* Logo */}
      <div className="px-6 py-6">
        <h1 className={`text-xl font-bold tracking-wider text-[var(--color-foreground)] text-center ${collapsed ? "hidden" : ""}`}>LOGO</h1>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto px-3 scrollbar-hide [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        {navSections.map((section) => (
          <div key={section.title} className="mb-6 list">
            <h2 className={`mb-3 px-3 text-xs font-semibold uppercase tracking-wider ${collapsed ? "hidden" : ""}`}>
              {section.title}
            </h2>
            <ul className="space-y-1">
              {section.items.map((item) => {
                const isActive = pathname === item.path
                return (
                  <li key={item.path} className="relative">
                    {isActive && (
                      <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-3 h-8 w-1 rounded-r-full bg-[#CFFAFE] -translate-y-2" />
                    )}
                    <Link
                      to={item.path}
                      className={cn(
                        "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
                        collapsed && "justify-center",
                        isActive
                          ? "bg-[var(--color-secondary)] text-[var(--color-secondary-foreground)]"
                          : "hover:bg-[var(--color-muted-foreground)] hover:text-white"
                      )}
                    >
                      <span className={cn(
                        isActive ? "text-[var(--color-secondary-foreground)]" : "text-[var(--color-muted)]",
                        
                      )}>
                        {item.icon}
                      </span>
                      {!collapsed && <span className="flex-1">{item.name}</span>}
                      {item.badge && (
                        <span
                          className={cn( 
                            `text-xs font-semibold text-[var(--color-foreground-muted)] rounded-full px-2 py-0.5
                             ${collapsed ? 'absolute right-0 top-3 -translate-y-1/2' : ''}`,

                          )}
                        >
                          {item.badge}
                        </span>
                      )}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>
        ))}
      </nav>


      <div className=" p-2 bg-[rgba(0,0,0,0.1)]  rounded-full m-1" >
        <div className={`flex items-center gap-3 ${collapsed ? 'justify-center' : ''}`}>
          <Avatar className={`h-[24px] w-[24px] ${collapsed ? 'hidden' : ''}`}>
            <AvatarFallback className="bg-[#FFFFFF] text-[var(--color-foreground)] text-xs font-semibold">
              BN
            </AvatarFallback>
          </Avatar>
          <div className={`flex-1 min-w-0 ${collapsed ? 'hidden' : ''}`}>
            <p className="text-xs font-medium text-white truncate">Birame Ndiaye</p>
            <p className="text-xs text-[var(--color-muted)]">Admin</p>
          </div>
          <button className="text-[var(--color-muted)] hover:text-white transition-colors">
            <Settings className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  )
}
