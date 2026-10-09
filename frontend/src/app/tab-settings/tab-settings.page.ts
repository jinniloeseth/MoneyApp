import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonItem,
  IonLabel,
  IonIcon,
  IonAvatar,
} from '@ionic/angular';
import { addIcons } from 'ionicons';
import {
  pricetagsOutline,
  colorPaletteOutline,
  cashOutline,
  downloadOutline,
  logOutOutline,
  chevronForwardOutline,
  personOutline,
} from 'ionicons/icons';

@Component({
  selector: 'app-tab-settings',
  templateUrl: './tab-settings.page.html',
  styleUrls: ['./tab-settings.page.scss'],
  imports: [
    RouterLink,
    IonHeader, IonToolbar, IonTitle, IonContent,
    IonList, IonItem, IonLabel, IonIcon, IonAvatar,
  ],
})
export class TabSettingsPage {
  userName = 'Brukernavn';
  userEmail = 'bruker@epost.no';
  profileImageUrl: string | null = null; // settes etter Google-innlogging

  constructor() {
    addIcons({
      pricetagsOutline,
      colorPaletteOutline,
      cashOutline,
      downloadOutline,
      logOutOutline,
      chevronForwardOutline,
      personOutline,
    });
  }
}