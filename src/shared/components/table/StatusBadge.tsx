interface Props {
  status: "IN_STOCK" | "LOW" | "CRITICAL"
}

export default function StatusBadge({ status }: Props) {
  const styles = {
    IN_STOCK: "bg-green-100 text-[var(--color-stock-ok)] border border-green-200 font-medium",
    LOW: "bg-yellow-100 text-[var(--color-stock-low)] border border-yellow-200 font-medium",
    CRITICAL: "bg-red-100 text-[var(--color-stock-out)] border border-red-200 font-medium",
  }

  const labels = {
    IN_STOCK: "IN STOCK",
    LOW: "LOW STOCK",
    CRITICAL: "CRITICAL",
  }

  return (
    <span className={`px-2 py-1 text-xs font-semibold rounded-full ${styles[status]}`}>
      {labels[status]}
    </span>
  )
}