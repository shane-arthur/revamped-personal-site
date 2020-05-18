import { Component, ElementRef, Input, OnInit, OnDestroy, Inject, PLATFORM_ID } from '@angular/core';
import { ModalService } from '../../services/modal.service';
import { isPlatformBrowser } from '@angular/common';

const MODEL_TYPES = {
    PORTFOLIO: 'Portfolio',
    ABOUT: 'About',
    RESUME: 'Resume',
    CONTACT: 'Contact',
    PRODUCT_CARD: 'Product_Card'
};

@Component({
    selector: 'modal-component',
    templateUrl: './modal.component.html'
})
export class ModalComponent implements OnInit, OnDestroy {
    @Input() id: string;
    @Input() type: string;
    @Input() data = null;
    modalTypes = MODEL_TYPES;
    private element: any;

    constructor(
        private modalService: ModalService, 
        el: ElementRef,
        @Inject(PLATFORM_ID) private platformId,) {
        this.element = el.nativeElement;
    }

    ngOnInit(): void {
        if (isPlatformBrowser(this.platformId)){
            this.initModal();
        }
    }

    // remove self from modal service when directive is destroyed
    ngOnDestroy(): void {
        this.modalService.remove(this.id);
        this.element.remove();
    }

    private initModal(){
        let modal = this;

        // ensure id attribute exists
        if (!this.id) {
            console.error('modal must have an id');
            return;
        }

        // move element to bottom of page (just before </body>) so it can be displayed above everything else
        document.body.appendChild(this.element);

        // close modal on background click
        this.element.addEventListener('click', function (e: any) {
            if (e.target.className === 'model-popup') {
                modal.close();
            }
        });

        // add self (this modal instance) to the modal service so it's accessible from controllers
        this.modalService.add(this);
    }

    // open modal
    open(): void {
        this.element.style.display = 'block';
        document.body.classList.add('modal-popup-open');
    }

    // close modal
    close(): void {
        this.element.style.display = 'none';
        document.body.classList.remove('model-popup-open');
    }
}