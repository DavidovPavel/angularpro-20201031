import { Attribute, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-item',
  template: `
    <h1>{{title}}</h1>
  `,
})
export class ItemComponent implements OnInit {

  // @Input() title!: string; 

  constructor(@Attribute('title') public title: string) { }

  ngOnInit(): void {
  }

}
