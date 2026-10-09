import { Component } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButtons,
  IonButton,
  IonIcon,
} from '@ionic/angular';
import { addIcons } from 'ionicons';
import { chevronBackOutline, chevronForwardOutline } from 'ionicons/icons';
import { MOCK_TRANSACTIONS } from '../models/mock-data';
import { Category } from '../models/category';

interface CategorySum {
  category: Category;
  total: number;
  percent: number;
}

@Component({
  selector: 'app-tab-spending-overview',
  templateUrl: './tab-spending-overview.page.html',
  styleUrls: ['./tab-spending-overview.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonButton, IonIcon],
})
export class TabSpendingOverviewPage {
  year = 2026;
  month = 9; // 0 = januar, 9 = oktober

  private readonly monthNames = [
    'Januar', 'Februar', 'Mars', 'April', 'Mai', 'Juni',
    'Juli', 'August', 'September', 'Oktober', 'November', 'Desember',
  ];

  constructor() {
    addIcons({ chevronBackOutline, chevronForwardOutline });
  }

  get monthLabel(): string {
    return `${this.monthNames[this.month]} ${this.year}`;
  }

  get monthTransactions() {
    const prefix = `${this.year}-${String(this.month + 1).padStart(2, '0')}`;
    return MOCK_TRANSACTIONS.filter((t) => t.date.startsWith(prefix));
  }

  get total(): number {
    return this.monthTransactions.reduce((sum, t) => sum + t.amount, 0);
  }

  get categorySums(): CategorySum[] {
    const map = new Map<number, CategorySum>();
    for (const t of this.monthTransactions) {
      const existing = map.get(t.category.id);
      if (existing) {
        existing.total += t.amount;
      } else {
        map.set(t.category.id, { category: t.category, total: t.amount, percent: 0 });
      }
    }
    const sums = Array.from(map.values());
    for (const s of sums) {
      s.percent = this.total > 0 ? (s.total / this.total) * 100 : 0;
    }
    return sums.sort((a, b) => b.total - a.total);
  }

  previousMonth() {
    if (this.month === 0) {
      this.month = 11;
      this.year--;
    } else {
      this.month--;
    }
  }

  nextMonth() {
    if (this.month === 11) {
      this.month = 0;
      this.year++;
    } else {
      this.month++;
    }
  }
}