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
	templateUrl: './start-view.component.html',
	styleUrls: ['./start-view.component.scss'],
	animations: [
		leaveAnimation
	],
	host: {'[@leaveAnimation]': ''}
})
export class StartViewComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
