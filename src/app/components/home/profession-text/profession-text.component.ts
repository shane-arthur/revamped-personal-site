import { Component } from '@angular/core';
import { Animations } from './animation';

@Component({
  selector: 'profession-text',
  templateUrl: './profession-text.component.html',
  styleUrls: ['./profession-text.component.scss'],
  animations: [Animations.pageLoadTrigger]
})
export class ProfessionTextComponent {

  constructor() { }

}
