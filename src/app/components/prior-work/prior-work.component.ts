import { Component, OnInit } from '@angular/core';
import { PortfolioItem } from '../../models/portfolio';
import { ModalService } from '../../services/modal.service';
import { portfolioItems } from './config';

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
