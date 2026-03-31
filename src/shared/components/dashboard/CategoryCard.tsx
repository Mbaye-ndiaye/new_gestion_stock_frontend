import Card from "../ui/Card"
import ProgressBar from "../ui/ProgressBar"

const data = [
  { name: "Électronique", value: 45, color: "#16a34a" },
  { name: "Mobilier", value: 25, color: "#22c55e" },
  { name: "Bureau", value: 20, color: "#166534" },
  { name: "Autre", value: 10, color: "#15803d" },
]

export default function CategoryCard() {
  return (
    <Card>
      <h2 className="font-semibold text-lg mb-1">Par Catégorie</h2>
      <p className="text-sm text-[var(--color-muted-foreground)] mb-6">
        Répartition du volume stocké
      </p>

      <div className="space-y-5">
        {data.map((item, index) => (
          <div key={index}>
            <div className="flex justify-between mb-1 text-sm">
              <span>{item.name}</span>
              {/* <span className="font-medium">{item.value}%</span> */}
            </div>

            <ProgressBar value={item.value} color={item.color} />
          </div>
        ))}
      </div>

      {/* Legend */}
      <div className="mt-6 space-y-2 text-sm">
        {data.map((item, index) => (
          <div key={index} className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <span
                className="w-2.5 h-2.5 rounded-full"
                style={{ background: item.color }}
              ></span>
              <span className="text-[var(--color-muted-foreground)]">
                {item.name}
              </span>
            </div>
            <span className="font-medium">{item.value}%</span>
          </div>
        ))}
      </div>
    </Card>
  )
}