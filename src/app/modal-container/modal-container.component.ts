import { Component, Input, ViewChild, OnChanges, ComponentFactoryResolver } from '@angular/core';
import { DynamicComponentDirective } from '../directives/dynamic-component.directive';
import { AboutComponent } from '../components/about/about.component';
import { PortfolioComponent } from '../components/portfolio/portfolio.component';
import { ResumeComponent } from '../components/resume/resume.component';
import { ContactComponent } from '../components/contact/contact.component';
import { PriorWorkComponent } from '../components/prior-work/prior-work.component';
import { PorfolioItemComponent } from '../components/prior-work/product-card/porfolio-item/porfolio-item.component';
import { MapComponent } from '../components/map/map.component';

const componentMappings = {
  About: AboutComponent,
  Portfolio: PortfolioComponent,
  Resume: ResumeComponent,
  Contact: ContactComponent,
  Prior_Work: PriorWorkComponent,
  Product_Card: PorfolioItemComponent,
  Places: MapComponent
};

@Component({
  selector: 'modal-container',
  template: `   <div>
                <ng-template dynamic-component-host></ng-template>
                </div>
            `
})
export class ModalContainerComponent implements OnChanges {
  @Input() type: string;
  @Input() id: string = null;
  @ViewChild(DynamicComponentDirective, { static: true }) componentHost: DynamicComponentDirective;
  constructor(
    private componentFactoryResolver: ComponentFactoryResolver
  ) { }

  ngOnChanges() {
    if (this.type) {
      this.loadComponent();
    }
  }

  loadComponent() {
    const component = componentMappings[this.type];
    const componentFactory =  this.componentFactoryResolver.resolveComponentFactory(component);
    const viewContainerRef = this.componentHost.viewContainerRef;
    viewContainerRef.clear();
    const item = viewContainerRef.createComponent(componentFactory);
    item.instance['id'] = this.id;

  }
}

