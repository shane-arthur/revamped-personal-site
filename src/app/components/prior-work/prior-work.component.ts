import { Component, OnInit } from '@angular/core';
import { PortfolioItem } from '../../models/portfolio';
import { ModalService } from '../../services/modal.service';

const portfolioItems: PortfolioItem[] = [{ title: 'Maktub App', imgSrc: 'assets/images/maktub-app.jpg', technologies: ['React Native', 'Typescript', 'Firebase', 'Fastlane'] },
{ title: 'Atlantic Graffiti Removal', imgSrc: 'assets/images/agr-app.png', technologies: ['C#', 'ASP.NET', 'Azure'] },
{ title: "Tread 2 Go", imgSrc: 'assets/images/tread2go.png', technologies: ['Angular', 'Angular Material', 'Typescript', 'NGRX', 'PWA', 'AWS Cognito'] },
{ title: 'Raly Payments', imgSrc: 'assets/images/raly.png', technologies: ['React Native', 'Typescript', 'Golang', 'Google Cloud Platforms', 'Fastlane'] },
{ title: 'Predikat Predicative Analytics', imgSrc: 'assets/images/predikat.png', technologies: ['React', 'AWS Cognito'] },
{ title: 'Last Call', imgSrc: 'assets/images/lastcall.png', technologies: ['Angular', 'Typescript', 'Google Cloud Platforms', 'Firebase', 'PWA'] }
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
