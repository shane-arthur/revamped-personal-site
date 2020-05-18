import { Component, OnInit, Input } from '@angular/core';
import { ModalService } from '../../../../services/modal.service';
import { PortfolioItem } from '../../../../models/portfolio';

@Component({
  selector: 'app-porfolio-item',
  templateUrl: './porfolio-item.component.html',
  styleUrls: ['./porfolio-item.component.scss']
})
export class PorfolioItemComponent implements OnInit {
  public carouselTileItems = [0,1];
  carouselSettings: any;
  id: string;
  data: PortfolioItem;
  constructor(private modalService: ModalService) { }

  ngOnInit() {
    const { data } = this.modalService.get(this.id);
    this.data = data;
    this.carouselTileItems = data.images;
    this.carouselSettings = {
      grid: { xs: 1, sm: 1, md: 1, lg: 1, all: 0 },
      slide: 1,
      speed: 400,
      point: {
        visible: false
      },
      load: 2,
      loop: true,
      touch: true
    };
  }

  closeFunc() {
    this.modalService.close(this.id)
  }

  viewSite() {
    window.open(this.data.url);
  }

}
