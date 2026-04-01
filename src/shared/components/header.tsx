import { Menu, Bell, Search, Moon } from "lucide-react"
import { Avatar, AvatarFallback } from "./ui/avatar"

interface Props {
  toggleSidebar?: () => void
}

export default function Header({ toggleSidebar }: Props) {
  return (
    <div className="h-16 flex items-center justify-between px-6 border-b border-[var(--color-input)] bg-white">

      {/* Left */}
      <div className="flex items-center gap-4">
        <button onClick={toggleSidebar}>
          <Menu className="w-6 h-6 text-gray-600" />
        </button>

      </div>

      {/* Right */}
      <div className="flex items-center gap-4">
        <div className="relative hidden sm:block">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Rechercher (Ctrl+K)"
            className="pl-10 pr-4 py-2 rounded-lg border border-[var(--color-input)] text-sm focus:outline-none"
          />
        </div>
        <button>
          <Bell className="w-5 h-5 text-gray-600" />
        </button>

        <button
          className="p-2 rounded-lg"
          title="Mode sombre"
        >
          <Moon className="w-5 h-5 text-gray-600" />
          
        </button>

        <div className="flex items-center gap-2">
          <Avatar className="h-8 w-8">
            <AvatarFallback>BN</AvatarFallback>
          </Avatar>

          <div className="hidden sm:block">
            <p className="text-sm font-medium">Birame Ndiaye</p>
            <p className="text-xs text-gray-500">SuperAdmin</p>
          </div>
        </div>

      </div>
    </div>
  )
}