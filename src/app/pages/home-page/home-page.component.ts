import { Component, OnInit, } from '@angular/core';
import { interval } from 'rxjs';
import { tap, take } from 'rxjs/operators';
import { Meta, Title } from '@angular/platform-browser';

const title = `Shane Arthur's Peronsal Site`;
const description = `Personal Website with resume and contact information for Shane Arthur`;

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  showProfession = false;
  constructor(private title: Title, private meta: Meta) { }

  onShowProfession() {
    this.showProfession = true;
  }

  ngOnInit() {
    const setShowProfession = () => this.showProfession = true;

    interval(1000).pipe(
      tap(setShowProfession),
      take(1)
    ).subscribe();

    this.setMetasAndTitle();

  }

  private setMetasAndTitle() {
    this.title.setTitle(title);
    this.meta.addTag({ name: 'description', content: description });
  }
}
