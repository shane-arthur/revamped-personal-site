import { Component, OnInit, Output, EventEmitter } from '@angular/core';

interface IHeaderItems {
  title: string;
  url: string;
}

@Component({
  selector: 'header-component',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() headerItemClicked = new EventEmitter();
  headerItems: IHeaderItems[] = null;
  constructor() { }

  ngOnInit() {
    this.headerItems = [
      { title: 'Social Media', url: 'Portfolio' },
      { title: 'About', url: 'About' },
      { title: 'Resume', url: 'Resume' }
    ]
  }

  headerItemClickedFunc($event) {
    const { url } = $event;
    this.headerItemClicked.emit({ url });
  }

}
