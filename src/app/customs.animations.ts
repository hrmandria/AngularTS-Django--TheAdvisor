import { 
    trigger,
    animate,
    query,
    state,
    transition,
	stagger,
	style
  
} from '@angular/animations';

export const leaveAnimation = trigger('ComponentLeaveState',[
	transition('* => *', [
		query(':leave',[
			stagger(0, [animate('1s ease-in', style({opacity: '0'}))]),
			stagger(0, [animate('0s', style({display: 'none'}))])
		])
	])
]);