import { Component } from '@angular/core';

@Component({
  selector: 'app-task3',
  template: `
    <a href="#" (click)="hideParagraph()">Сховати абзац</a> <br>
    <a href="#" (click)="showParagraph()">Показати абзац</a>

    <p *ngIf="isParagraphVisible">Цей абзац буде показуватися або ховатися залежно від натискання посилань.</p>
  `
})
export class Task3 {
  isParagraphVisible: boolean = true;

  hideParagraph(): void {
    this.isParagraphVisible = false;
  }

  showParagraph(): void {
    this.isParagraphVisible = true;
  }
}
