import { Component } from '@angular/core';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent {
  constructor(private modalService: ModalService) { }


  closeFunc() {
    this.modalService.close('item-popup');
  }

  openLink(type) {
    const mappings = { github: 'https://github.com/shane-arthur', linkedIn: 'https://www.linkedin.com/in/shane-arthur-8b902071' }
    window.open(mappings[type]);
  }

}
