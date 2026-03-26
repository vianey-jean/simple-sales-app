import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Plus } from "lucide-react";
import type { Sale } from "@/lib/sales-data";

interface AddSaleDialogProps {
  onAdd: (sale: Sale) => void;
}

const AddSaleDialog = ({ onAdd }: AddSaleDialogProps) => {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({ client: "", product: "", quantity: "1", amount: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAdd({
      id: crypto.randomUUID(),
      date: new Date().toISOString().split("T")[0],
      client: form.client,
      product: form.product,
      quantity: Number(form.quantity),
      amount: Number(form.amount),
    });
    setForm({ client: "", product: "", quantity: "1", amount: "" });
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>
          <Plus className="mr-2 h-4 w-4" /> Nouvelle vente
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Ajouter une vente</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 pt-2">
          <div className="space-y-2">
            <Label htmlFor="client">Client</Label>
            <Input id="client" required value={form.client} onChange={(e) => setForm({ ...form, client: e.target.value })} placeholder="Nom du client" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="product">Produit</Label>
            <Input id="product" required value={form.product} onChange={(e) => setForm({ ...form, product: e.target.value })} placeholder="Nom du produit" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="quantity">Quantité</Label>
              <Input id="quantity" type="number" min="1" required value={form.quantity} onChange={(e) => setForm({ ...form, quantity: e.target.value })} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="amount">Montant (€)</Label>
              <Input id="amount" type="number" min="0" step="0.01" required value={form.amount} onChange={(e) => setForm({ ...form, amount: e.target.value })} />
            </div>
          </div>
          <Button type="submit" className="w-full">Ajouter</Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddSaleDialog;
