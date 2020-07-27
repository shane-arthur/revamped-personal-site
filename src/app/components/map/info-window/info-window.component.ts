import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-info-window',
  templateUrl: './info-window.component.html',
  styleUrls: ['./info-window.component.scss']
})
export class InfoWindowComponent implements OnInit {

  @Input() title: string;
  @Input() range: string;
  @Input() position: string;
  constructor() { }

  ngOnInit(): void {
  }

}
