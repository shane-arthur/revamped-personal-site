import { Component, OnInit } from '@angular/core';
import { ModalService} from '../../services/modal.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  public carouselTileItems: Array<any> = [0, 1];
  carouselSettings: any;
  constructor(private modalService: ModalService) { }

  ngOnInit(){
    
    this.carouselSettings = {
      grid: { xs: 1, sm: 1, md: 1, lg: 1, all: 0 },
      slide: 1,
      speed: 400,
      interval: {
        timing: 3000,
        initialDelay: 1000
      },
      point: {
        visible: false
      },
      load: 2,
      loop: true,
      touch: true
    };
  }

  closeFunc(){
    this.modalService.close('item-popup');
  }

}
