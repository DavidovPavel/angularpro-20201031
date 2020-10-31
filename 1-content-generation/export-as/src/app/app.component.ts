import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div colory #c="colory">
      Text
    </div>
    <button (click)="c.changeColor('green')">Make Green</button>
    <input (input)="c.changeColor($event.target.value)">
  `,
  styles: []
})
export class AppComponent {
  title = 'export-as';
}
