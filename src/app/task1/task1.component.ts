import { Component } from '@angular/core';

@Component({
  selector: 'app-task1',
  template: `
    <label>
      <input type="checkbox" (change)="toggleParagraphVisibility()"> Показати/сховати абзац
    </label>

    <p *ngIf="isParagraphVisible">Цей абзац буде показуватися, коли чекбокс відзначений.</p>
  `,
})
export class Task1 {
  isParagraphVisible: boolean = false;

  toggleParagraphVisibility(): void {
    this.isParagraphVisible = !this.isParagraphVisible;
  }
}
