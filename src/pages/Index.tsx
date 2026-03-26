import { useState } from "react";
import SalesStats from "@/components/SalesStats";
import SalesTable from "@/components/SalesTable";
import AddSaleDialog from "@/components/AddSaleDialog";
import { initialSales, type Sale } from "@/lib/sales-data";
import { ShoppingBag } from "lucide-react";

const Index = () => {
  const [sales, setSales] = useState<Sale[]>(initialSales);

  const handleAddSale = (sale: Sale) => {
    setSales((prev) => [sale, ...prev]);
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border/60 bg-card">
        <div className="container flex items-center justify-between py-5">
          <div className="flex items-center gap-3">
            <ShoppingBag className="h-6 w-6 text-primary" />
            <h1 className="text-xl font-bold text-foreground tracking-tight">Mes Ventes</h1>
          </div>
          <AddSaleDialog onAdd={handleAddSale} />
        </div>
      </header>

      <main className="container py-8 space-y-8">
        <SalesStats sales={sales} />
        <div>
          <h2 className="text-lg font-semibold text-foreground mb-4">Ventes récentes</h2>
          <SalesTable sales={sales} />
        </div>
      </main>
    </div>
  );
};

export default Index;
