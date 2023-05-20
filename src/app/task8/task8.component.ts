import { Component } from '@angular/core';

@Component({
  selector: 'app-task8',
  template: `
    <select (change)="onCountrySelect($event)">
      <option *ngFor="let country of countries" [value]="country">{{ country }}</option>
    </select>
    <p>Вибрана країна: {{ selectedCountry }}</p>
  `
})
export class Task8 {
  selectedCountry: string | undefined;
  countries: string[] = ['Україна', 'США', 'Великобританія', 'Німеччина', 'Франція'];

  onCountrySelect(event: any) {
    this.selectedCountry = event.target.value;
  }
}
