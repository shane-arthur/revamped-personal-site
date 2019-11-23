import { Component } from '@angular/core';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent {
  pdfSrc = '/assets/pdfs/resume.pdf'
  constructor(private modalService: ModalService) { }

  closeFunc(){
    this.modalService.close('item-popup');
  }

}
