import {
  useReactTable,
  getCoreRowModel,
  getPaginationRowModel,
  flexRender,
} from "@tanstack/react-table"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function DataTable({ columns, data }: any) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),

    initialState: {
      pagination: {
        pageSize: 2,
      },
    },
  })

 const getPageNumbers = () => {
  const total = table.getPageCount()
  const current = table.getState().pagination.pageIndex

  const pages: (number | string)[] = []

  for (let i = 0; i < total; i++) {
    // Toujours afficher première et dernière page
    if (i === 0 || i === total - 1) {
      pages.push(i)
    }
    // Afficher pages autour de la page actuelle
    else if (i >= current - 1 && i <= current + 1) {
      pages.push(i)
    }
    // Ajouter "..." une seule fois
    else if (
      (i === current - 2 && current > 3) ||
      (i === current + 2 && current < total - 6)
    ) {
      pages.push("...")
    }
  }

  return pages.filter((item, index, arr) => {
  return item !== "..." || arr[index - 1] !== "..."
})
}

  return (
    <>
      <div className="bg-[var(--color-card)]  text-[var(--color-foreground)]  rounded-3xl border border-[var(--color-input)] shadow-sm overflow-hidden">

        {/* Responsive */}
        <div className="overflow-x-auto">
          <table className="w-full min-w-[800px] text-sm">

            {/* HEADER */}
            <thead className="bg-[var(--color-background)] text-[var(--color-primary-foreground)]">
              {table.getHeaderGroups().map((headerGroup) => (
                <tr key={headerGroup.id}>
                  {headerGroup.headers.map((header) => (
                    <th key={header.id} className="p-4 text-left font-medium">
                      {flexRender(header.column.columnDef.header, header.getContext())}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>

            {/* BODY */}
            <tbody>
              {table.getPaginationRowModel().rows.map((row) => (
                <tr
                  key={row.id}
                  className="border-t border-[var(--color-input)] transition"
                >
                  {row.getVisibleCells().map((cell) => (
                    <td key={cell.id} className="p-4">
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>

          </table>
        </div>
      </div>
      <div className="flex flex-col md:flex-row md:items-center md:justify-between p-4">

        {/* Texte */}
        <span className="text-sm text-[var(--color-muted-foreground)]">
          Page {table.getState().pagination.pageIndex + 1} sur{" "}
          {table.getPageCount()}
        </span>

        {/* Boutons */}
        <div className="flex  items-center mt-4 md:mt-0 gap-2">

          {/* Previous */}
          <button
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
            className="px-1 py-1 rounded-lg bg-[var(--color-small-foreground)] text-[var(--color-muted)] border border-[var(--color-input)] disabled:opacity-50"
          >
            <ChevronLeft />
          </button>

          {getPageNumbers().map((page, index) => {
            if (page === "...") {
              return (
                <span key={index} className="px-2">
                  ...
                </span>
              )
            }

            return (
              <button
                key={page}
                onClick={() => table.setPageIndex(Number(page))}
                className={`px-4 py-2 rounded-lg text-sm ${table.getState().pagination.pageIndex === Number(page)
                  ? "bg-[var(--color-stock-ok)] text-white shadow-xl"
                  : "text-[var(--color-muted)]"
                  }`}
              >
                {(Number(page)) + 1}
              </button>
            )
          })}
          {/* Next */}
          <button
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
            className="px-1 py-1 rounded-lg bg-[var(--color-small-foreground)] text-[var(--color-muted)]  border border-[var(--color-input)] disabled:opacity-50"
          >
            <ChevronRight />
          </button>

        </div>
      </div>
    </>
  )
}