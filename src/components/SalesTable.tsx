import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import type { Sale } from "@/lib/sales-data";

interface SalesTableProps {
  sales: Sale[];
}

const SalesTable = ({ sales }: SalesTableProps) => (
  <div className="rounded-lg border border-border/60 bg-card">
    <Table>
      <TableHeader>
        <TableRow className="hover:bg-transparent">
          <TableHead>Date</TableHead>
          <TableHead>Client</TableHead>
          <TableHead>Produit</TableHead>
          <TableHead className="text-center">Qté</TableHead>
          <TableHead className="text-right">Montant</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {sales.map((sale) => (
          <TableRow key={sale.id}>
            <TableCell className="text-muted-foreground">{new Date(sale.date).toLocaleDateString("fr-FR")}</TableCell>
            <TableCell className="font-medium">{sale.client}</TableCell>
            <TableCell>
              <Badge variant="secondary" className="font-normal">{sale.product}</Badge>
            </TableCell>
            <TableCell className="text-center">{sale.quantity}</TableCell>
            <TableCell className="text-right font-semibold">{sale.amount.toLocaleString("fr-FR")} €</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </div>
);

export default SalesTable;
