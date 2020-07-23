import { Component, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { ModalService } from './services/modal.service';
import { ImagePreloadService } from './services/image-preload.service';
import { isPlatformBrowser } from '@angular/common';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {

  smallPopup = false;
  popupType: string;
  preloadedImageUrl: string;
  constructor(private modalService: ModalService, private imageService: ImagePreloadService, @Inject(PLATFORM_ID) private platformId) {
  }

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.imageService.preloadAboutImages();
    }
  }

  headerItemClicked($event) {
    const { url } = $event;
    this.popupType = url;
    this.modalService.open('item-popup');
  }

  loadProfileImages() {
    this.imageService.preloadProfileImages();
  }

}
