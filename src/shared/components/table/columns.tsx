import type { ColumnDef } from "@tanstack/react-table"
import StatusBadge from "./StatusBadge"
import StockProgress from "./StockProgress"

export const columns: ColumnDef<any>[] = [
  {
    header: "PRODUIT",
    accessorKey: "name",
    cell: ({ row }) => (
      <div className="flex items-center gap-3">
        <img
          src={row.original.image}
          className="w-10 h-10 rounded-md object-cover"
        />
        <span className="font-medium text-[var(--color-foreground)]">
          {row.original.name}
        </span>
      </div>
    ),
  },
  {
    header: "SKU",
    accessorKey: "sku",
    cell: ({ row }) => (
      <span className="text-[var(--color-muted)]">
        {row.original.sku}
      </span>
    ),
    
  },
  {
    header: "CATÉGORIE",
    accessorKey: "category",
    cell: ({ row }) => (
      <span className="px-2 py-1 text-xs bg-[var(--color-background)] rounded-full">
        {row.original.category}
      </span>
    ),
  },
  {
    header: "STOCK",
    accessorKey: "stock",
    cell: ({ row }) => <StockProgress value={row.original.stock} />,
  },
  {
    header: "PRIX",
    accessorKey: "price",
    cell: ({ row }) => (
      <span className="font-semibold text-md">
        {row.original.price.toLocaleString()} <span className="text-xs text-[var(--color-muted)]">FCFA</span>
      </span>
    ),
  },
  {
    header: "STATUT",
    accessorKey: "status",
    cell: ({ row }) => <StatusBadge status={row.original.status} />,
  },
]