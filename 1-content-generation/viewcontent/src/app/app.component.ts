import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `

    {{'hello'| reverse}}
    <button (click)="title=''"></button>

    <app-item>
    
        <h1>CONTENT!</h1>
    
    </app-item>
  `,
  styles: []
})
export class AppComponent {
  title = 'viewcontent';
}
