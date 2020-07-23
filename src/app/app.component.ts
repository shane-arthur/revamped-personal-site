import { Component, AfterViewInit } from '@angular/core';
import { ModalService } from './services/modal.service';
import { ImagePreloadService } from './services/image-preload.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {

  smallPopup = false;
  popupType: string;
  preloadedImageUrl: string;
  constructor(private modalService: ModalService, private imageService: ImagePreloadService) {
  }

  ngAfterViewInit() {
    this.imageService.preloadAboutImages();
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
