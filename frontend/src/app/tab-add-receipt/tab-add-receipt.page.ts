import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonInput,
  IonButton,
  IonSelect,
  IonSelectOption,
  IonDatetimeButton,
  IonModal,
  IonDatetime,
} from '@ionic/angular';
import { MOCK_CATEGORIES } from '../models/mock-data';
import { Category } from '../models/category';

@Component({
  selector: 'app-tab-add-receipt',
  templateUrl: './tab-add-receipt.page.html',
  styleUrls: ['./tab-add-receipt.page.scss'],
  imports: [
    FormsModule,
    IonHeader, IonToolbar, IonTitle, IonContent,
    IonInput, IonButton, IonSelect, IonSelectOption,
    IonDatetimeButton, IonModal, IonDatetime,
  ],
})
export class TabAddReceiptPage {
  categories: Category[] = MOCK_CATEGORIES;
  amount: number | null = null;
  title = '';
  date = new Date().toISOString();
  selectedCategoryId: number | null = null;

  save() {
    console.log('Lagrer:', {
      amount: this.amount,
      title: this.title,
      date: this.date.substring(0, 10),
      category: this.categories.find((c) => c.id === this.selectedCategoryId),
    });
  }
}