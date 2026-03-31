import Card from "../ui/Card"

interface Props {
  title: string
  value: string
  badge?: string
  color?: string
  icon?: React.ReactNode
  bgColor?: string
}

export default function StatCard({ title, value, badge, icon, color, bgColor }: Props) {
  return (
    <Card>
      <div className="flex items-center justify-between mb-3">
        <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: bgColor || 'inherit' }}>
          {icon}
        </div>
        {badge && (
          <span className="text-xs bg px-2 py-1 rounded-full" style={{ color: color || 'inherit', backgroundColor: bgColor || 'inherit'}}>
            {badge}
          </span>
        )}
      </div>

      <p className="text-sm text-[var(--color-primary-foreground)]">{title}</p>
      <h3 className="text-xl font-bold" >{value}</h3>
    </Card>
  )
}