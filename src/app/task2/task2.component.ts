import { Component } from '@angular/core';

@Component({
  selector: 'app-task2',
  template: `
    <label>
      <input type="checkbox" (change)="toggleParagraphVisibility()"> Показати/сховати абзац
    </label>

    <p *ngIf="isParagraphVisible">Цей абзац буде показуватися, коли чекбокс відзначений.</p>
  `,
})
export class Task2 {
  isParagraphVisible: boolean = true;

  toggleParagraphVisibility(): void {
    this.isParagraphVisible = !this.isParagraphVisible;
  }
}
