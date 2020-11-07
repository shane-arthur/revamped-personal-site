import { Component, AfterViewInit, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { ModalService } from './services/modal.service';
import { ImagePreloadService } from './services/image-preload.service';
import { isPlatformBrowser } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';

import { environment } from '../environments/environment';

const url = `/error`;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
  links = [];
  tags = [];
  title = 'Shane Arthur Personal Website';
  JsonLDs: [
    {
      '@context': 'https://schema.org';
      '@type': 'WebPage';
      name: 'Shane Arthur Personal Website',
      operatingSystem: 'Windows, Mac';
      applicationCategory: 'https://schema.org/WebApplication',
      offers: {
        '@type': 'Offer';
        price: '0';
        priceCurrency: 'USD';
      };
    }
  ];
  smallPopup = false;
  popupType: string;
  preloadedImageUrl: string;
  constructor(private modalService: ModalService, 
    private imageService: ImagePreloadService, 
    @Inject(PLATFORM_ID) private platformId,
    private http: HttpClient) {
  }

  ngOnInit() {
    this._setMetaTagsAndTitle();

    this.http.get(url).pipe(
      catchError(err => {
        return of(err);
      })
    ).subscribe(res => {
    })
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

  private _setMetaTagsAndTitle() {
    const currentUrl = 'https//shane-arthur.io';
    const description = 'Personal Website for Shane Arthur, Toronto, ON';
    this.tags = [
      { property: 'og:title', content: 'Shane Arthur Personal Website' },
      { name: 'title', content: this.title },
      { name: 'twitter:title', content: this.title },
      { property: 'og:description', content: description },
      { name: 'description', content: description },
      { name: 'twitter:description', content: description },
      { property: 'og:site_name', content: this.title },
      { property: 'og:url', content: currentUrl },
      { property: 'og:image', content: 'https://shane-arthur.io/assets/images/shane2.jpg' },
      { property: 'twitter:image', content: 'https://shane-arthur.io/assets/images/shane2.jpg' },
      { property: 'og:type', content: 'profile' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'robots', content: 'INDEX, FOLLOW' }
    ];

    this.links = [
      {
        rel: 'canonical',
        href: currentUrl
      }
    ];
  }
}
