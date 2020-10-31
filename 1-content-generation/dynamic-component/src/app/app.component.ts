import { Component, ComponentFactoryResolver, Injector, ViewContainerRef } from '@angular/core';
import { BannerComponent } from './banner/banner.component';

@Component({
  selector: 'app-root',
  template: `
    
    <ng-container *ngComponentOutlet="dynamicComponent"></ng-container>
    <button (click)="load()">LOAD</button>
  `
})
export class AppComponent {
  dynamicComponent = BannerComponent;

  constructor(
    view: ViewContainerRef,
    cfr: ComponentFactoryResolver,
    injector: Injector
  ) {

    // setTimeout(() => {
    //   this.dynamicComponent = Banner2Component;
    // }, 3000);
    
    //const bannerComponentFactory = cfr.resolveComponentFactory(BannerComponent);
    //const bannerComponent = view.createComponent(bannerComponentFactory);

  }

  async load(){
    const {Banner2Component} = await import('./banner2/banner2.component');
    this.dynamicComponent = Banner2Component;
  }
}
