import { Component } from '@angular/core';
import { ModalService } from '../../services/modal.service';
import { Animations } from './animation';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss'],
  animations: [Animations.numberChanged]
})
export class ResumeComponent {
  pdfSrc = '/assets/pdfs/resume8.pdf';
  currentPage = 1;
  maxPages = 2;
  constructor(private modalService: ModalService) { }

  closeFunc(){
    this.modalService.close('item-popup');
  }

  onNextClick(){
    if (this.currentPage !== this.maxPages){
      this.currentPage++;
    }
  }

  onPrevClick(){
    if (this.currentPage !== 1){
      this.currentPage--;
    }
  }

}
