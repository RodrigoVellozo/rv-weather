import { Component } from '@angular/core';
import {
  IonBadge,
  IonContent,
  IonHeader,
  IonIcon,
  IonTitle,
  IonToolbar,
  IonCard
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { menuOutline, notificationsOutline } from 'ionicons/icons';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [
    IonBadge,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonIcon,
    IonBadge,
    IonCard
  ],
})
export class HomePage {
  constructor() {
    addIcons({menuOutline, notificationsOutline});
  }
}
