import { Component } from '@angular/core';

@Component({
  selector: 'app-task9',
  template: `
    <select (change)="onCitySelect($event)">
      <option *ngFor="let city of cities" [value]="city">{{ city }}</option>
    </select>
    <input type="text" [value]="selectedCity" readonly>
  `
})
export class Task9 {
  selectedCity: string | undefined;
  cities: string[] = ['Київ', 'Львів', 'Одеса', 'Харків', 'Дніпро'];

  onCitySelect(event: any) {
    const value = event.target.value;
    this.selectedCity = value;
  }
}
