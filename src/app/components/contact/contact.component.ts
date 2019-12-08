import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { ModalService } from '../../services/modal.service';
import { emailValidator } from '../../validators/validators';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  emailFormGroup: FormGroup;
  constructor(private modalService: ModalService, private formBuilder: FormBuilder) { }

  get formControl(): any {
    if (this.emailFormGroup) {
      return this.emailFormGroup.controls;
    }
  }

  ngOnInit(){
    this.setupFormValidation();
  }

  closeFunc(){
    this.modalService.close('item-popup');
  }

  private setupFormValidation(){
    this.emailFormGroup = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, emailValidator]],
      message: ['', [Validators.required, Validators.minLength(10)]
      ]
    });
  }

}
