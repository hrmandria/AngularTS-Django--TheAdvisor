import { Component, OnInit } from '@angular/core';
import {
	trigger,
	animate,
	query,
	state,
	transition,
	stagger,
	style
} from '@angular/animations';



@Component({
	selector: 'app-login-view',
	templateUrl: './login-view.component.html',
	styleUrls: ['./login-view.component.scss'],
	animations:[
		trigger('LoginEnterState', [
			transition('* => *', [
				query(':enter, :leave', [
					stagger(0, [animate('2s cubic-bezier(0.68, -0.55, 0.27, 1.55)', style({
						transform: 'translateX(300%)',
					}))]),
					stagger(0, [animate('2s cubic-bezier(0.68, -0.55, 0.27, 1.55)', style({
						transform: 'translateX(0%)',
					}))])
				])
			])
		])
	],
	
})
export class LoginViewComponent implements OnInit {

	constructor() { }

	ngOnInit(): void {
	}

}
