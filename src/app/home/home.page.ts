import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  IonBadge,
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonIcon,
  IonTitle,
  IonToolbar, IonList, IonItem, IonLabel } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { menuOutline, notificationsOutline } from 'ionicons/icons';
import { WeatherService } from '../core/services/weather.service';
import { LocationService } from '../core/services/location.service';
import { map, switchMap, tap } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonLabel, IonItem, IonList, 
    CommonModule,
    IonCardSubtitle,
    IonCardTitle,
    IonCardHeader,
    IonBadge,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonIcon,
    IonBadge,
    IonCard,
  ],
})
export class HomePage implements OnInit {
  public intervals: any;
  public forecast: any;

  private readonly _route = inject(ActivatedRoute);
  private readonly _weatherService = inject(WeatherService);
  private readonly _locationService = inject(LocationService);

  constructor() {
    addIcons({ menuOutline, notificationsOutline });
  }
  
  ngOnInit(): void {
    this._route.data.pipe(
      tap((data) => {
        return this.intervals = data;
      })
    ).subscribe();
  }
}
