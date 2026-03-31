export default function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="
      bg-[var(--color-card)]
      rounded-xl
      shadow-sm
      p-5
      border border-[var(--color-input)]
    ">
      {children}
    </div>
  )
}