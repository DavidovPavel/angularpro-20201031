import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-hello',
  template: `
    <p (click)="clicked.emit(name)">
      hello, {{name}}!
    </p>
    <ng-content></ng-content>
  `,
  styles: [
  ]
})
export class HelloComponent implements OnInit {

  @Input() name!: string;
  @Output() clicked = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

}
