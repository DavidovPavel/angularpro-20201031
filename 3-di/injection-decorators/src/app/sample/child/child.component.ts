import { Component, Host, Self, SkipSelf } from '@angular/core';
import { FlowerService } from 'src/app/flower.service';

@Component({
  selector: 'app-child',
  template: `<p>Flower emoji: {{ flower?.emoji }}</p>`,
})
export class ChildComponent {
  constructor(@Host() public flower: FlowerService) {}
}
