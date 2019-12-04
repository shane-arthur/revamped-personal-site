import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  emailFormGroup: FormGroup;
  constructor(private modalService: ModalService) { }

  closeFunc(){
    this.modalService.close('item-popup');
  }

}
