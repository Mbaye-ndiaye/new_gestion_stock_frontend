export default function DashboardHeader() {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
      <h1 className="text-2xl font-bold">Tableau de bord Stock</h1>

      <div className="flex flex-col sm:flex-row gap-3">
        <button className="px-4 py-2 border border-[var(--color-input)] rounded-lg">
          Exporter Rapport
        </button>

        <button className="px-4 py-2 bg-[#164E63] text-white rounded-lg">
          Mouvement Rapide
        </button>
      </div>
    </div>
  )
}