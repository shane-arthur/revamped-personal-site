import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'header-item',
  templateUrl: './header-item.component.html',
  styleUrls: ['./header-item.component.scss']
})
export class HeaderItemComponent {

  @Input() title: string;
  @Input() url: string;
  constructor(private router: Router) { }

 
  navigateTo() : void {
    this.router.navigateByUrl(this.url); 
  }

}
