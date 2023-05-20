import { Component } from '@angular/core';

@Component({
  selector: 'app-task6',
  template: `
    <label>
      <input type="checkbox" (change)="toggleCheckbox()"> Відзначити чекбокс
    </label>

    <p [ngClass]="{'red': isCheckboxChecked}">Абзац з динамічним кольором</p>
  `,
  styles: [`
    .red {
      color: red;
    }
  `]
})
export class Task6 {
  isCheckboxChecked: boolean = false;

  toggleCheckbox() {
    this.isCheckboxChecked = !this.isCheckboxChecked;
  }
}
