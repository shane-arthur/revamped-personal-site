import { Component, AfterViewInit } from '@angular/core';
import { ModalService } from './services/modal.service';
import { of } from 'rxjs';
import { delay, tap, take } from 'rxjs/operators';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {

  smallPopup = false;
  popupType: string;
  preloadedImageUrl: string;
  constructor(private modalService: ModalService) {

  }

  ngAfterViewInit() {
    this._populatePreloadedImages();
  }

  private _populatePreloadedImages() {
    const firstPersonalImage = '../assets/images/shane.png';
    of(['dummyValue']).pipe(
      delay(0),
      tap(() => this.preloadedImageUrl = firstPersonalImage),
      take(1)
    ).subscribe();
  }

  headerItemClicked($event) {
    const { url } = $event;
    this.popupType = url;
    this.modalService.open('item-popup');
  }

}
