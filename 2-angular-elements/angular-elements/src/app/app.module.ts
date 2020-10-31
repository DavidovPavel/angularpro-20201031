import { BrowserModule } from '@angular/platform-browser';
import { Injector, NgModule } from '@angular/core';

import { HelloComponent } from './hello/hello.component';

import { createCustomElement } from '@angular/elements'

@NgModule({
  declarations: [
    HelloComponent
  ],
  imports: [
    BrowserModule
  ],
})
export class AppModule { 
  constructor(injector: Injector) {
    const helloElement = createCustomElement(HelloComponent, { injector });
    customElements.define('my-hello', helloElement);

  }
}
