import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  showProfession = false;
  constructor() { }

  onShowProfession(){
    this.showProfession = true;
  }

  ngOnInit(){
    setTimeout(() => {
      if (!this.showProfession){
        this.showProfession = true;
      }
    }, 5000)
  }

  checkProfession(){

  }

}
