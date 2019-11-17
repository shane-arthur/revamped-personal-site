import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'header-item',
  templateUrl: './header-item.component.html',
  styleUrls: ['./header-item.component.scss']
})
export class HeaderItemComponent {

  @Input() title: string;
  @Input() url: string;
  @Output() headerItemClicked = new EventEmitter();
  constructor() { }

  clickEvent(){
    this.headerItemClicked.emit({url: this.url});
  }

}
