import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[delay]'
})
export class DelayDirective {

  @Input() delay!: number;
  @Input() delayTime!: number;
  @Input() delayStop!: number;

  constructor(
    private view:ViewContainerRef,
    private template: TemplateRef<HTMLElement>
  ) { 

  }

  ngOnInit() {
    setTimeout(() => {
      this.view.createEmbeddedView(this.template);
    }, this.delay);
  }

}
