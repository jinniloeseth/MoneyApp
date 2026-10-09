import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular';

@Component({
  selector: 'app-tab-add-receipt',
  templateUrl: './tab-add-receipt.page.html',
  styleUrls: ['./tab-add-receipt.page.scss'],
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class TabAddReceiptPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
