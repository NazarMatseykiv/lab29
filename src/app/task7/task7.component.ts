import { Component } from '@angular/core';

@Component({
  selector: 'app-task7',
  template: `
    <label>
      <input #checkbox type="checkbox" (change)="toggleRedColor(checkbox.checked)"> Додати червоний колір
    </label>

    <label>
      <input type="checkbox" (change)="toggleStrikethrough()"> Перекреслити текст
    </label>

    <p [ngClass]="{'red': isRedColor, 'strikethrough': isStrikethrough}">Абзац зі змінними стилями</p>
  `,
  styles: [`
    .red {
      color: red;
    }

    .strikethrough {
      text-decoration: line-through;
    }
  `]
})
export class Task7 {
  isRedColor: boolean = false;
  isStrikethrough: boolean = false;

  toggleRedColor(checked: boolean) {
    this.isRedColor = checked;
  }

  toggleStrikethrough() {
    this.isStrikethrough = !this.isStrikethrough;
  }
}
