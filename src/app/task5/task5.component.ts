import { Component } from '@angular/core';

@Component({
  selector: 'app-task5',
  template: `
    <label>
      <input type="checkbox" (change)="toggleParagraphVisibility(1)"> Показати/сховати абзац 1
    </label>
    <p *ngIf="isParagraph1Visible">Абзац 1</p>

    <label>
      <input type="checkbox" (change)="toggleParagraphVisibility(2)"> Показати/сховати абзац 2
    </label>
    <p *ngIf="isParagraph2Visible">Абзац 2</p>
  `
})
export class Task5 {
  isParagraph1Visible: boolean = false;
  isParagraph2Visible: boolean = false;

  toggleParagraphVisibility(paragraphNumber: number): void {
    if (paragraphNumber === 1) {
      this.isParagraph1Visible = !this.isParagraph1Visible;
    } else if (paragraphNumber === 2) {
      this.isParagraph2Visible = !this.isParagraph2Visible;
    }
  }
}
