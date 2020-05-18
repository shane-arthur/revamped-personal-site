import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {

  @Input() imgSrc: string;
  normalMode = true;
  constructor() { }

  ngOnInit() {
    console.log('imgSrc', this.imgSrc);
  }

  changeMode(isNormal: boolean){
    console.log('isNormal', isNormal);
    this.normalMode = isNormal;
  }

}
