import { Component} from '@angular/core';
import { FlowerService } from '../flower.service';

@Component({
  selector: 'app-sample',
  template: `
  <ng-content></ng-content>
`,
  providers: [{ provide: FlowerService, useValue: { emoji: "🌼" } }],
})
export class SampleComponent {}
