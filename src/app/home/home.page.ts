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
  IonItem, IonLabel,
  IonList,
  IonTitle,
  IonToolbar, IonFab, IonFabButton } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { menuOutline, notificationsOutline } from 'ionicons/icons';
import { WeatherService } from '../core/services/weather.service';
import { Geolocation, PositionOptions } from '@capacitor/geolocation';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonFabButton, IonFab, IonLabel, IonItem, IonList, 
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
  private readonly _route = inject(ActivatedRoute);
  private readonly _weatherService = inject(WeatherService);
  
  public intervals: any;
  public realtimeWeather$ = this._weatherService.realtimeWeather();
  public timelines$ = this._weatherService.fetchTimelinesData() ;
  public timelinesWeek$ = this._weatherService.fetchTimelinesWeekData() ;
  

  constructor() {
    addIcons({ menuOutline, notificationsOutline });
  }
  
  ngOnInit(): void {
    console.log()
  }

  public removeDecimals(value: number){
    return Math.trunc(value);
  }

}
