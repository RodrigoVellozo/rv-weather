import { Component, OnInit, inject } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { LocationService } from './core/services/location.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [IonApp, IonRouterOutlet],
})
export class AppComponent implements OnInit {
  private readonly locationService = inject(LocationService);


  constructor() {}

  ngOnInit(): void {
    this.locationService.getPosition().subscribe(position => localStorage.setItem('position',position));
  }
}
