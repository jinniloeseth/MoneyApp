import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { IonContent, IonButton, IonIcon } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { logoGoogle, logoApple, walletOutline } from 'ionicons/icons';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  imports: [IonContent, IonButton, IonIcon],
})
export class LoginPage {
  private router = inject(Router);

  constructor() {
    addIcons({ logoGoogle, logoApple, walletOutline });
  }

  loginWithGoogle() {
    // TODO: ekte Google-innlogging
    this.router.navigateByUrl('/tabs/receipts');
  }

  loginWithApple() {
    // TODO: ekte Apple-innlogging
    this.router.navigateByUrl('/tabs/receipts');
  }
}