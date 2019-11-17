import { Component, OnInit } from '@angular/core';

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

  headerItems: IHeaderItems[] = null;
  constructor() { }

  ngOnInit() {
    this.headerItems = [
      { title: 'Home', url: '' },
      { title: 'Portfolio', url: 'Portfolio' },
      { title: 'About', url: 'About' },
      { title: 'Resume', url: 'Resume' }
    ]
  }

}
