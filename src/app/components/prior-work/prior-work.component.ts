import { Component, OnInit } from '@angular/core';
import { PortfolioItem } from '../../models/portfolio';
import { ModalService } from '../../services/modal.service';

const portfolioItems: PortfolioItem[] = [{subTitle: 'Farsi Audiobooks', url: 'https://www.maktub.app', id: 'maktub', title: 'Maktub App', imgSrc: 'assets/images/maktub-app.jpg', technologies: ['React Native', 'Typescript', 'Firebase', 'Fastlane'] },
{subTitle:'Graffiti Removal Business', url: 'https://www.atlanticgraffitiremoval.com', id: 'agr', title: 'Atlantic Graffiti Removal', imgSrc: 'assets/images/agr-app.png', technologies: ['C#', 'ASP.NET', 'Azure'] },
{subTitle: 'Tire Changing PWA', url: 'https://www.tread2go.com/', id: 'ttg', title: "Tread 2 Go", imgSrc: 'assets/images/tread2go.png', technologies: ['Angular', 'Angular Material', 'Typescript', 'NGRX', 'PWA', 'AWS Cognito'] },
{subTitle: 'Cryptocurrency Payment App', id: 'raly', title: 'Raly Payments', imgSrc: 'assets/images/raly.png', technologies: ['React Native', 'Typescript', 'Golang', 'Google Cloud Platforms', 'Fastlane'] },
{subTitle:'Predictive Analyics Dashboard', url: 'https://www.predikat.co/product.html', id: 'predikat', title: 'Predikat Predicative Analytics', imgSrc: 'assets/images/predikat.png', technologies: ['React', 'AWS Cognito'] },
{subTitle: 'Local Deals Web App and PWA', url: 'https://lastcall.cc/', id: 'lastCall', title: 'Last Call', imgSrc: 'assets/images/lastcall.png', technologies: ['Angular', 'Typescript', 'Google Cloud Platforms', 'Firebase', 'PWA'] }
];

@Component({
  selector: 'app-prior-work',
  templateUrl: './prior-work.component.html',
  styleUrls: ['./prior-work.component.scss']
})
export class PriorWorkComponent implements OnInit {

  portfolioItems: PortfolioItem[] = [];
  constructor(private modalService: ModalService) { }

  ngOnInit() {
    this.portfolioItems = portfolioItems;
  }

  closeFunc() {
    this.modalService.close('item-popup');
  }

}
