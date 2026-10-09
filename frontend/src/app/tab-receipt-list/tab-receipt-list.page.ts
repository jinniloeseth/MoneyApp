import { Component } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonItem,
  IonLabel,
  IonIcon,
  IonNote,
} from '@ionic/angular';
import { addIcons } from 'ionicons';
import { cartOutline, homeOutline, carOutline, gameControllerOutline } from 'ionicons/icons';
import { MOCK_TRANSACTIONS } from '../models/mock-data';
import { Transaction } from '../models/transaction';

@Component({
  selector: 'app-tab-receipt-list',
  templateUrl: './tab-receipt-list.page.html',
  styleUrls: ['./tab-receipt-list.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonLabel, IonIcon, IonNote],
})
export class TabReceiptListPage {
  transactions: Transaction[] = MOCK_TRANSACTIONS;

  constructor() {
    addIcons({ cartOutline, homeOutline, carOutline, gameControllerOutline });
  }
}