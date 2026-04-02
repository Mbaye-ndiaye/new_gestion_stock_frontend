import Card from "../ui/Card"
import StockChart from "./StockChart"

export default function ChartCard() {
  return (
    <Card>
      <div className="flex justify-between items-center mb-4">
        <div>
          <h2 className="font-semibold text-lg">
            Évolution de la Valeur
          </h2>
          <p className="text-sm text-[var(--color-muted-foreground)]">
            Total actifs immobilisés en FCFA
          </p>
        </div>

        <div className="flex gap-2 text-sm text-gray-400">
          <button className="px-3 py-1 rounded-md bg-[#eff2f0]">
            6 Mois
          </button>
          <button className="px-3 py-1 rounded-md">
            1 An
          </button>
        </div>
      </div>

      <StockChart />
    </Card>
  )
}