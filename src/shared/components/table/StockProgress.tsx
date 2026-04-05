interface Props {
  value: number
}

export default function StockProgress({ value }: Props) {
  return (
    <div className="flex flex-col items-center gap-2">
      <span className={`text-sm font-semibold ${value <= 3 ? 'text-[var(--color-stock-out)]' : 'text-[var(--color-foreground)]'}`}>{value}</span>

      <div className="w-20 h-1.5 bg-[var(--color-background)] rounded-full overflow-hidden">
        <div
          className={`h-full ${value <= 3 ? 'bg-[var(--color-stock-out)]' : 'bg-[var(--color-stock-ok)]'}`}
          style={{ width: `${Math.min(value * 2, 100)}%` }}
        />
      </div>
    </div>
  )
}