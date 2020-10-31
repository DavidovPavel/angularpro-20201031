import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <button (click)="randomNumber()">random</button>
    {{output1}}
    <button (click)="findBigPrime()">heavy</button>
    {{output2}}
    
  `,
  styles: []
})
export class AppComponent {
  output1!:string;
  output2!:string;
  worker!: Worker


  constructor() {
    this.worker = new Worker('./my-worker.worker.ts', { type: 'module'} );
  }


  randomNumber() {
    this.output1 = Math.random().toString();
  }

  findBigPrime() {
    // this.output2 = find_big_prime().toString();
    this.worker.onmessage = ({data}) => {
      this.output2 = data;
    }
    this.worker.postMessage('Hello');
  }
}