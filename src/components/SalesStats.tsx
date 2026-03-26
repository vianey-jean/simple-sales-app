import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DollarSign, ShoppingCart, TrendingUp, Users } from "lucide-react";
import type { Sale } from "@/lib/sales-data";

interface SalesStatsProps {
  sales: Sale[];
}

const SalesStats = ({ sales }: SalesStatsProps) => {
  const totalRevenue = sales.reduce((sum, s) => sum + s.amount, 0);
  const totalOrders = sales.length;
  const avgOrder = totalOrders > 0 ? totalRevenue / totalOrders : 0;
  const uniqueClients = new Set(sales.map((s) => s.client)).size;

  const stats = [
    { label: "Chiffre d'affaires", value: `${totalRevenue.toLocaleString("fr-FR")} €`, icon: DollarSign },
    { label: "Commandes", value: totalOrders.toString(), icon: ShoppingCart },
    { label: "Panier moyen", value: `${avgOrder.toFixed(2)} €`, icon: TrendingUp },
    { label: "Clients", value: uniqueClients.toString(), icon: Users },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat) => (
        <Card key={stat.label} className="border-border/60">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">{stat.label}</CardTitle>
            <stat.icon className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold text-foreground">{stat.value}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default SalesStats;
