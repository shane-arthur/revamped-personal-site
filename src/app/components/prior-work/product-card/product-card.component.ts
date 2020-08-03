import { Component, ViewChild, Input, ElementRef, AfterViewInit, OnInit } from '@angular/core';
import { PortfolioItem } from '../../../models/portfolio';
import { fromEvent } from 'rxjs';
import { tap, debounceTime } from 'rxjs/operators';
import { Animations } from './animation';
import { ModalService } from '../../../services/modal.service';


@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
  animations: [Animations.flyInBottom, Animations.flyInTop, Animations.fadeIn]
})
export class ProductCardComponent implements AfterViewInit, OnInit {
  @ViewChild('container') containerRef: ElementRef;
  @ViewChild('infoContainer') infoContainerRef: ElementRef;
  @Input() item: PortfolioItem;
  normalMode = true;
  popupId: string = '';
  
  constructor(private modalService: ModalService) { }

  ngOnInit(){
    this.popupId = `product-item-popup-${this.item.id}`;
  }

  ngAfterViewInit(){
    fromEvent(this.containerRef.nativeElement, 'mouseleave').pipe(
      tap(() => this.changeMode(true))
    ).subscribe();
    fromEvent(this.containerRef.nativeElement, 'mouseenter').pipe(
      tap(() => this.changeMode(false))
    ).subscribe();
  }

  changeMode(isNormal: boolean){
    this.normalMode = isNormal;
  }

  openProductCard(){
    this.modalService.open(this.popupId);
  }

}
