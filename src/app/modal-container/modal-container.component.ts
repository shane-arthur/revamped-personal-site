import { Component, Input, ViewChild, OnChanges, ComponentFactoryResolver } from '@angular/core';
import { DynamicComponentDirective } from '../directives/dynamic-component.directive';
import { AboutComponent } from '../components/about/about.component';

@Component({
  selector: 'modal-container',
  template: `   <div>
                <ng-template dynamic-component-host></ng-template>
                </div>
            `
})
export class ModalContainerComponent implements OnChanges {
  @Input() type: string;
  @ViewChild(DynamicComponentDirective, { static: true }) componentHost: DynamicComponentDirective;
  constructor(
    private componentFactoryResolver: ComponentFactoryResolver
  ) { }

  ngOnChanges() {
    this.loadComponent();
  }

  loadComponent() {
    console.log(this.type);
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(AboutComponent);
    const viewContainerRef = this.componentHost.viewContainerRef;
    viewContainerRef.clear();
    const componentRef = viewContainerRef.createComponent(componentFactory);
  }
}

