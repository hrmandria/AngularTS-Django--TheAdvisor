import { Component, OnInit } from '@angular/core';
import { 
  trigger,
  animate,
  query,
  state,
  transition,

} from '@angular/animations';

import { leaveAnimation } from '../customs.animations';

@Component({
	selector: 'app-start-view',
	templateUrl: './hotel-view.component.html',
	styleUrls: ['./hotel-view.component.scss'],
	animations: [
		leaveAnimation
	],
	host: {'[@leaveAnimation]': ''}
})
export class HotelViewComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
