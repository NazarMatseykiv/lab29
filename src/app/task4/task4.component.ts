import { Component } from '@angular/core';

@Component({
  selector: 'app-task4',
  template: `
    <a href="#" (click)="toggleParagraphVisibility()">Переключити абзац</a>

    <p *ngIf="isParagraphVisible">Цей абзац буде показуватися або ховатися залежно від натискання посилання.</p>
  `
})
export class Task4 {
  isParagraphVisible: boolean = true;

  toggleParagraphVisibility(): void {
    this.isParagraphVisible = !this.isParagraphVisible;
  }
}
