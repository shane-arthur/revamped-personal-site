import { Component, ViewChild, Input, ElementRef, AfterViewInit } from '@angular/core';
import { PortfolioItem } from '../../../models/portfolio';
import { fromEvent } from 'rxjs';
import { tap, debounceTime } from 'rxjs/operators';
import { Animations } from './animation';


@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
  animations: [Animations.flyInBottom, Animations.flyInTop, Animations.fadeIn]
})
export class ProductCardComponent implements AfterViewInit {
  @ViewChild('container', { static: false }) containerRef: ElementRef;
  @ViewChild('infoContainer', { static: false }) infoContainerRef: ElementRef;
  @Input() item: PortfolioItem;
  normalMode = true;
  constructor() { }

  ngAfterViewInit(){
    fromEvent(this.containerRef.nativeElement, 'mouseleave').pipe(
      tap(() => this.changeMode(true))
    ).subscribe();
    fromEvent(this.containerRef.nativeElement, 'mouseenter').pipe(
      tap(() => this.changeMode(false))
    ).subscribe();
  }

  changeMode(isNormal: boolean){
    console.log(isNormal);
    this.normalMode = isNormal;
  }

}
