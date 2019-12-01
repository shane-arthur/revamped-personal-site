import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { tap, take } from 'rxjs/operators';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  showProfession = false;
  constructor() { }

  onShowProfession() {
    this.showProfession = true;
  }

  ngOnInit() {
    const setShowProfession = () => this.showProfession = true;

    interval(1000).pipe(
      tap(setShowProfession),
      take(1)
    ).subscribe();
  }
}
