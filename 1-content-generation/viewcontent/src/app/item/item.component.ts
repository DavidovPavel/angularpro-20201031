import { Component, ContentChild, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-item',
  template: `
    <p #h>
      VIEW!
    </p>
    <!-- <app-component ></app-component> -->
  `,
  styles: [
  ]
})
export class ItemComponent implements OnInit {

  // @ViewChild
  // @ContentChild
  //@ViewChild()

  constructor() { }

  ngOnInit(): void {
  }

}
