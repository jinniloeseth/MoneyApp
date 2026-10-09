import { Category } from './category';

export interface Transaction {
  id: number;
  description: string;
  amount: number;
  date: string; // format: "2026-10-08"
  category: Category;
}