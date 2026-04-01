import DashboardHeader from "../../shared/components/dashboard/DashboardHeader"
import StatCard from "../../shared/components/dashboard/StatCard"
import ChartCard from "../../shared/components/dashboard/ChartCard"
import CategoryCard from "../../shared/components/dashboard/CategoryCard"
import { LuDollarSign, LuLayers, LuTrendingUp } from "react-icons/lu"
import { FiAlertTriangle } from "react-icons/fi";
export default function Dashboard() {
  return (
    <div className="p-6 space-y-6">

      <DashboardHeader />

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Valeur Totale Stock"
          value="5.100.000 FCFA"
          badge="+4.2% ce mois
          "icon={<LuDollarSign className="w-6 h-6" color="var(--color-stock-ok)"/>}
          color="var(--color-stock-ok)"
          bgColor="var(--color-small-background)"
        />
        <StatCard
          title="Produits en Stock"
          value="1.240"
          badge="12 nouvelles refs"
          icon={<LuLayers className="w-6 h-6" color="blue"/>}
          color="var(--color-stock-ok)"
          bgColor="var(--color-small-background)"
        />
        <StatCard
          title="Alertes Rupture"
          value="3"
          badge="Action requise"
          icon={<FiAlertTriangle className="w-6 h-6" color="red" />}
          color="var(--color-foreground-muted)"
          bgColor="#FEF2F2"
        />
        <StatCard
          title="Mouvements (24h)"
          value="+42 / -15"
          badge="Stable"
          icon={<LuTrendingUp className="w-6 h-6" color="#8B5CF6" />}
          color="var(--color-stock-ok)"
          bgColor="var(--color-small-background)"
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