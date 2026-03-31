import DashboardHeader from "../../shared/components/dashboard/DashboardHeader"
import StatCard from "../../shared/components/dashboard/StatCard"
import ChartCard from "../../shared/components/dashboard/ChartCard"
import CategoryCard from "../../shared/components/dashboard/CategoryCard"
export default function Dashboard() {
  return (
    <div className="p-6 space-y-6">

      <DashboardHeader />

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Valeur Totale Stock"
          value="5.100.000 FCFA"
          badge="+4.2% ce mois"
          color="var(--color-stock-ok)"
          bgColor="var(--color-background)"
        />
        <StatCard
          title="Produits en Stock"
          value="1.240"
          badge="12 nouvelles refs"
          color="var(--color-stock-ok)"
          bgColor="var(--color-background)"
        />
        <StatCard
          title="Alertes Rupture"
          value="3"
          badge="Action requise"
          color="var(--color-foreground-muted)"
          bgColor="#FEF2F2"
        />
        <StatCard
          title="Mouvements (24h)"
          value="+42 / -15"
          badge="Stable"
          color="var(--color-stock-ok)"
          bgColor="var(--color-background)"
        />
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        <div className="lg:col-span-2">
            <ChartCard />
        </div>

        <div>
            <CategoryCard />
        </div>

      </div>

    </div>
  )
}