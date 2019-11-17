import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'home-text',
  templateUrl: './home-text.component.html',
  styleUrls: ['./home-text.component.scss']
})
export class HomeTextComponent implements OnInit {

  isProfessionShown = false;
  @Output() showProfession = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  onHover($event) {
    $event.preventDefault();
    if (!this.isProfessionShown) {
      this.isProfessionShown = true;
      this.showProfession.emit();
    }
  }
}
