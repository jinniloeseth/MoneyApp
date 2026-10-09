import { Category } from './category';
import { Transaction } from './transaction';

export const MOCK_CATEGORIES: Category[] = [
  { id: 1, name: 'Mat', color: '#4CAF50', icon: 'cart-outline' },
  { id: 2, name: 'Bolig', color: '#2196F3', icon: 'home-outline' },
  { id: 3, name: 'Transport', color: '#FF9800', icon: 'car-outline' },
  { id: 4, name: 'Fritid', color: '#9C27B0', icon: 'game-controller-outline' },
];

export const MOCK_TRANSACTIONS: Transaction[] = [
  { id: 1, description: 'Rema 1000', amount: 342.5, date: '2026-10-08', category: MOCK_CATEGORIES[0] },
  { id: 2, description: 'Bussbillett', amount: 42, date: '2026-10-07', category: MOCK_CATEGORIES[2] },
  { id: 3, description: 'Kino', amount: 189, date: '2026-10-06', category: MOCK_CATEGORIES[3] },
  { id: 4, description: 'Husleie', amount: 9500, date: '2026-10-01', category: MOCK_CATEGORIES[1] },
  { id: 5, description: 'Kiwi', amount: 215.8, date: '2026-10-01', category: MOCK_CATEGORIES[0] },
];