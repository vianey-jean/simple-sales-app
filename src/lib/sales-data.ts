export interface Sale {
  id: string;
  date: string;
  client: string;
  product: string;
  quantity: number;
  amount: number;
}

export const initialSales: Sale[] = [
  { id: "1", date: "2026-03-25", client: "Martin Dupont", product: "Abonnement Pro", quantity: 1, amount: 299 },
  { id: "2", date: "2026-03-24", client: "Sophie Laurent", product: "Pack Starter", quantity: 2, amount: 158 },
  { id: "3", date: "2026-03-24", client: "Pierre Moreau", product: "Licence Enterprise", quantity: 1, amount: 899 },
  { id: "4", date: "2026-03-23", client: "Claire Petit", product: "Abonnement Pro", quantity: 3, amount: 897 },
  { id: "5", date: "2026-03-22", client: "Jean Bernard", product: "Formation", quantity: 1, amount: 450 },
  { id: "6", date: "2026-03-21", client: "Marie Leroy", product: "Pack Starter", quantity: 1, amount: 79 },
  { id: "7", date: "2026-03-20", client: "Luc Garnier", product: "Licence Enterprise", quantity: 1, amount: 899 },
];
