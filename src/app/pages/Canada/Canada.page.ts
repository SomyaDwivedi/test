import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonNote,
} from '@ionic/angular/standalone';
import { WeatherService } from '../../services/weatherComponent.service';

@Component({
  selector: 'app-countryOverview',
  standalone: true,
  templateUrl: './Canada.page.html',
  styleUrls: ['./Canada.page.scss'],
  imports: [
    CommonModule, // ⬅ add this
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonNote,
  ],
})
export class CanadaSummaryPage implements OnInit {
  loading = true;
  data?: {
    source: string;
    downloadedAt: string;
    avgTempC: number;
    avgHumidityPct: number;
    conditions: string;
  };

  constructor(private weather: WeatherService) {}

  async ngOnInit() {
    const res = await this.weather.getNationalSummary();
    this.data = res.data;
    this.loading = false;
  }
}
