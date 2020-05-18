import { Component, OnInit } from '@angular/core';

const imgSrcs = ['assets/images/maktub-app.jpg', 'assets/images/agr-app.png'];

@Component({
  selector: 'app-prior-work',
  templateUrl: './prior-work.component.html',
  styleUrls: ['./prior-work.component.scss']
})
export class PriorWorkComponent implements OnInit {

  imgSrcs : string[] = [];
  constructor() { }

  ngOnInit() {
    this.imgSrcs = imgSrcs;
  }

}
