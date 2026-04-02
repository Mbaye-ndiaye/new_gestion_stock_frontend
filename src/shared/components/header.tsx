import { Menu, Bell, Search, Moon, Sun } from "lucide-react"
import { Avatar, AvatarFallback } from "./ui/avatar"
import { useTheme } from "../../hooks/useTheme"

interface Props {
  toggleSidebar?: () => void
}

export default function Header({ toggleSidebar }: Props) {
  const { theme, toggleTheme } = useTheme()

  return (
    <div className="h-16 flex items-center justify-between px-6 border-b border-[var(--color-input)] bg-white dark:bg-gray-900 dark:border-gray-700">

      {/* Left */}
      <div className="flex items-center gap-4">
        <button >
          <Menu className="w-6 h-6 text-gray-600 dark:text-gray-300" />
        </button>

      </div>

      {/* Right */}
      <div className="flex items-center gap-4">
        <div className="relative hidden sm:block">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Rechercher (Ctrl+K)"
            className="pl-10 pr-4 py-2 rounded-lg border border-[var(--color-input)] text-sm focus:outline-none dark:bg-gray-800 dark:border-gray-600 dark:text-white"
          />
        </div>
        
        {/* Dark mode toggle */}
        <button
          // onClick={toggleTheme}
          className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          title="Basculer en mode sombre"
        >
          {theme === 'light' ? (
            <Moon className="w-5 h-5 text-gray-600" />
          ) : (
            <Sun className="w-5 h-5 text-gray-300" />
          )}
        </button>
        
        <button>
          <Bell className="w-5 h-5 text-gray-600 dark:text-gray-300" />
        </button>

        <div className="flex items-center gap-2">
          <Avatar className="h-8 w-8">
            <AvatarFallback>BN</AvatarFallback>
          </Avatar>

          <div className="hidden sm:block">
            <p className="text-sm font-medium dark:text-white">Birame Ndiaye</p>
            <p className="text-xs text-gray-500 dark:text-gray-400">SuperAdmin</p>
          </div>
        </div>

      </div>
    </div>
  )
}