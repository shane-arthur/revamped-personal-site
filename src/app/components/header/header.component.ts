import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { fromEvent } from 'rxjs';
import { tap, take } from 'rxjs/operators';

interface IHeaderItems {
  title: string;
  url: string;
}

@Component({
  selector: 'header-component',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, AfterViewInit {
  @Output() headerItemClicked = new EventEmitter();
  @Output() loadProfileImages = new EventEmitter();
  @ViewChild('header') headerElement: ElementRef;
  headerItems: IHeaderItems[] = null;
  constructor() { }

  ngOnInit() {
    this.headerItems = [
      { title: 'Places', url: 'Places' },
      { title: 'Links', url: 'Portfolio' },
      { title: 'About', url: 'About' },
      { title: 'Contact', url: 'Contact' },
      { title: 'Resume', url: 'Resume' },
      { title: 'Portfolio', url: 'Prior_Work' }
    ];
  }

  ngAfterViewInit(){
    this._mouseHoverListen();
  }

  headerItemClickedFunc($event) {
    const { url } = $event;
    this.headerItemClicked.emit({ url });
  }

  private _mouseHoverListen() {
    fromEvent(this.headerElement.nativeElement, 'mouseenter').pipe(
      tap(() => this.loadProfileImages.emit()),
      take(1)
    ).subscribe();
  }

}
