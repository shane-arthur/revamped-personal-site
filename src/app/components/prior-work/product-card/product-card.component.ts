import { Component, ViewChild, Input, ElementRef, AfterViewInit } from '@angular/core';
import { PortfolioItem } from '../../../models/portfolio';
import { fromEvent } from 'rxjs';
import { tap, debounceTime } from 'rxjs/operators';


@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements AfterViewInit {
  @ViewChild('container', { static: false }) containerRef: ElementRef;
  @Input() item: PortfolioItem;
  normalMode = true;
  constructor() { }

  ngAfterViewInit(){
    fromEvent(this.containerRef.nativeElement, 'mouseout').pipe(
      debounceTime(500),
      tap(() => this.changeMode(true))
    ).subscribe();
  }

  changeMode(isNormal: boolean){
    this.normalMode = isNormal;
  }

}
