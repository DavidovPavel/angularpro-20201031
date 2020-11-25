import { Component } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';

@Component({
  selector: 'app-root',
  template: `
    <!--The content below is only a placeholder and can be replaced.-->
    <div style="text-align:center" class="content">
      <h1>
        Service Workers without Offline
      </h1>
    </div>
  `,
  styles: []
})
export class AppComponent {

  constructor(swUpdate: SwUpdate) {
    swUpdate.available.subscribe(event => {
      alert('New Version!')
    });

  }
}
