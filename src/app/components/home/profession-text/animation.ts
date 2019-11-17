import { trigger, style, transition, animate, keyframes } from '@angular/animations';

export const Animations = {
    pageLoadTrigger: trigger('pageLoadTrigger', [
        transition('void => *', [
            animate(2000, keyframes([
                style({ opacity: 0 }),
                style({ opacity: 0.1 }),
                style({ opacity: 0.2 }),
                style({ opacity: 0.3 }),
                style({ opacity: 0.4 }),
                style({ opacity: 0.5 }),
                style({ opacity: 0.6 }),
                style({ opacity: 0.7 }),
                style({ opacity: 0.8 }),
                style({ opacity: 0.9 }),
                style({ opacity: 1 }),
            ]))
        ])
    ])
};

