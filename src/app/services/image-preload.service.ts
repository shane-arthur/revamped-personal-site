import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImagePreloadService {

  aboutImgSrcs = ['/assets/images/shane.png', '/assets/images/shane2.jpg'];

  profileImgSrcs = ['/assets/images/maktub-app.jpg', '/assets/images/agr-app.png',
  '/assets/images/tread2go.png', '/assets/images/raly.png', '/assets/images/lastcall.png', '/assets/images/predikat.png', 
  '/assets/pdfs/resume12.pdf'];

  constructor() { }

  preloadAboutImages() {
    const images: any[] = [];
    for (let i = 0; i < this.aboutImgSrcs.length; i++) {
      images[i] = new Image();
      images[i].src = this.aboutImgSrcs[i];
    }
  }

  preloadProfileImages() {
    const images: any[] = [];
    for (let i = 0; i < this.profileImgSrcs.length; i++) {
      images[i] = new Image();
      images[i].src = this.profileImgSrcs[i];
    }
  }
}
