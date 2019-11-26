import { Component } from '@angular/core';
import { ModalService } from './services/modal.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  smallPopup = false;
  popupType: string;
  constructor(private modalService: ModalService){

  }

  headerItemClicked($event) {
    const { url } = $event;
    this.popupType = url;
    this.smallPopup = url === 'Portfolio' ? true : false;
    this.modalService.open('item-popup');
  }

}
