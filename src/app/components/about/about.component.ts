import { Component, Output, EventEmitter } from '@angular/core';
import { ModalService} from '../../services/modal.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {

  constructor(private modalService: ModalService) { }

  closeFunc(){
    this.modalService.close('item-popup');
  }

}
