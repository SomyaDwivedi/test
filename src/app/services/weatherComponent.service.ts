import { Injectable } from '@angular/core';


export interface NationalWeatherSummary {
  source: string;
  downloadedAt: string;
  avgTempC: number;
  avgHumidityPct: number;
  conditions: string;
}

@Injectable({ providedIn: 'root' })
export class WeatherService {
  async getNationalSummary(): Promise<{ data: NationalWeatherSummary }> {
    const res = await fetch('assets/data/Canada.json');
    const data = await res.json();
    return { data };
  }
}
