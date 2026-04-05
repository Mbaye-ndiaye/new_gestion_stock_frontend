import { Search, Funnel, List, LayoutDashboard } from "lucide-react"

interface Props {
    search: string
    setSearch: (value: string) => void
    viewMode: 'table' | 'grid'
    setViewMode: (mode: 'table' | 'grid') => void

    category: string
    setCategory: (v: string) => void

    status: string
    setStatus: (v: string) => void
}

export default function TableToolbar({ search, setSearch, viewMode, setViewMode, category, setCategory, status, setStatus }: Props) {
    return (
        <div className="flex flex-col sm:flex-row gap-3 sm:items-center justify-between bg-[var(--color-card)] border border-[var(--color-input)] rounded-2xl p-4">

            {/* 🔍 Search */}
            <div className="flex items-center gap-2">
                <div className="relative w-full sm:max-w-md">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />

                    <input
                        type="text"
                        placeholder="Rechercher par nom, SKU..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="w-full pl-10 pr-4 py-2 rounded-lg border border-[var(--color-input)] focus:outline-none text-sm"
                    />
                </div>

                {/* <button className="flex items-center gap-2 px-4 py-2 rounded-lg border border-[var(--color-input)] text-[var(--color-muted)] text-sm hover:bg-gray-100">
                    <Funnel className="w-4 h-4" />
                    Filtres
                </button> */}

                <div className="flex items-center gap-2 ">

                    {/* Catégorie */}
                    <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[var(--color-card)] border border-[var(--color-input)] text-[var(--color-muted)] text-sm">
                        <Funnel className="w-4 h-4" />

                        <select
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            className="border-none bg-transparent"
                        >
                            <option value="">Filtres</option>
                            <option value="Électronique">Électronique</option>
                            <option value="Catégorie 1">Catégorie 1</option>
                        </select>
                    </div>
                    {/* Statut */}
                    <select
                        value={status}
                        onChange={(e) => setStatus(e.target.value)}
                        className="px-3 py-2 rounded-lg bg-[var(--color-card)] border border-[var(--color-input)] text-[var(--color-muted)] text-sm"
                    >
                        <option value="">Tous statuts</option>
                        <option value="IN_STOCK">En stock</option>
                        <option value="LOW">Stock faible</option>
                        <option value="CRITICAL">Critique</option>
                    </select>

                </div>
            </div>
            <div className="flex items-center gap-2 rounded-lg p-1">
                <button
                    onClick={() => setViewMode('table')}
                    className={`p-2 rounded-md transition-colors ${viewMode === 'table'
                        ? 'bg-[var(--color-background)] text-[var(--color-stock-ok)] shadow-sm'
                        : 'text-[var(--color-muted)] hover:text-[var(--color-muted)]'
                        }`}
                >
                    <List className="w-4 h-4" />
                </button>
                <button
                    onClick={() => setViewMode('grid')}
                    className={`p-2 rounded-md transition-colors ${viewMode === 'grid'
                        ? 'bg-[var(--color-background)] text-[var(--color-stock-ok)] shadow-sm'
                        : 'text-[var(--color-muted)] hover:text-[var(--color-muted)]'
                        }`}
                >
                    <LayoutDashboard className="w-4 h-4" />
                </button>
            </div>
        </div>
    )
}