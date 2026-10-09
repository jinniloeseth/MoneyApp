import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButtons,
  IonBackButton,
  IonList,
  IonListHeader,
  IonItem,
  IonLabel,
  IonIcon,
  IonInput,
  IonButton,
} from '@ionic/angular';
import { addIcons } from 'ionicons';
import {
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
    IonButtons, IonBackButton,
    IonList, IonListHeader, IonItem, IonLabel, IonIcon,
    IonInput, IonButton,
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

  newName = '';
  selectedColor = this.colors[0];
  selectedIcon = this.icons[0];

  constructor() {
    addIcons({
      cartOutline, homeOutline, carOutline, gameControllerOutline,
      restaurantOutline, shirtOutline, medkitOutline, giftOutline,
      airplaneOutline, pricetagOutline, trashOutline,
    });
  }

  addCategory() {
    const name = this.newName.trim();
    if (!name) return;
    const nextId = this.categories.reduce((max, c) => Math.max(max, c.id), 0) + 1;
    this.categories.push({
      id: nextId,
      name,
      color: this.selectedColor,
      icon: this.selectedIcon,
    });
    this.newName = '';
  }

  deleteCategory(id: number) {
    this.categories = this.categories.filter((c) => c.id !== id);
  }
}