import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButtons,
  IonBackButton,
  IonButton,
  IonList,
  IonItem,
  IonLabel,
  IonIcon,
  IonInput,
  IonModal,
} from '@ionic/angular';
import { addIcons } from 'ionicons';
import {
  addOutline,
  cartOutline,
  homeOutline,
  carOutline,
  gameControllerOutline,
  restaurantOutline,
  shirtOutline,
  medkitOutline,
  giftOutline,
  airplaneOutline,
  pricetagOutline,
  trashOutline,
} from 'ionicons/icons';
import { MOCK_CATEGORIES } from '../models/mock-data';
import { Category } from '../models/category';

@Component({
  selector: 'app-tab-settings-categories',
  templateUrl: './tab-settings-categories.page.html',
  styleUrls: ['./tab-settings-categories.page.scss'],
  imports: [
    FormsModule,
    IonHeader, IonToolbar, IonTitle, IonContent,
    IonButtons, IonBackButton, IonButton,
    IonList, IonItem, IonLabel, IonIcon,
    IonInput, IonModal,
  ],
})
export class TabSettingsCategoriesPage {
  categories: Category[] = [...MOCK_CATEGORIES];

  colors = ['#4CAF50', '#2196F3', '#FF9800', '#9C27B0', '#F44336', '#009688', '#E91E63', '#795548'];
  icons = [
    'cart-outline', 'home-outline', 'car-outline', 'game-controller-outline',
    'restaurant-outline', 'shirt-outline', 'medkit-outline', 'gift-outline',
    'airplane-outline', 'pricetag-outline',
  ];

  isModalOpen = false;
  editingId: number | null = null; // null = ny kategori
  name = '';
  selectedColor = this.colors[0];
  selectedIcon = this.icons[0];

  constructor() {
    addIcons({
      addOutline, cartOutline, homeOutline, carOutline, gameControllerOutline,
      restaurantOutline, shirtOutline, medkitOutline, giftOutline,
      airplaneOutline, pricetagOutline, trashOutline,
    });
  }

  openNew() {
    this.editingId = null;
    this.name = '';
    this.selectedColor = this.colors[0];
    this.selectedIcon = this.icons[0];
    this.isModalOpen = true;
  }

  openEdit(c: Category) {
    this.editingId = c.id;
    this.name = c.name;
    this.selectedColor = c.color;
    this.selectedIcon = c.icon;
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }

  save() {
    const name = this.name.trim();
    if (!name) return;

    if (this.editingId === null) {
      const nextId = this.categories.reduce((max, c) => Math.max(max, c.id), 0) + 1;
      this.categories.push({ id: nextId, name, color: this.selectedColor, icon: this.selectedIcon });
    } else {
      this.categories = this.categories.map((c) =>
        c.id === this.editingId
          ? { ...c, name, color: this.selectedColor, icon: this.selectedIcon }
          : c
      );
    }
    this.closeModal();
  }

  deleteCategory(id: number, event: Event) {
    event.stopPropagation(); // hindrer at raden åpner redigering
    this.categories = this.categories.filter((c) => c.id !== id);
  }
}