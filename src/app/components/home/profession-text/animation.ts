import { trigger, style, transition, animate, keyframes } from '@angular/animations';

export const Animations = {
    pageLoadTrigger: trigger('pageLoadTrigger', [
        transition('void => *', [
            animate(1500, keyframes([
                style({ opacity: 0, color: '#051414' }),
                style({ opacity: 0.1, color: '#0f3d3d' }),
                style({ opacity: 0.2, color: '#1f7a7a' }),
                style({ opacity: 0.3, color: '#29a3a3' }),
                style({ opacity: 0.4, color: '#33cccc' }),
                style({ opacity: 0.5, color: '#5cd6d6' }),
                style({ opacity: 0.6, color: '#85e0e0' }),
                style({ opacity: 0.7, color: '#99e6e6' }),
                style({ opacity: 0.8, color: '#c2f0f0' }),
                style({ opacity: 0.9, color: '#ebfafa' }),
                style({ opacity: 1, color: '#ffffff' }),
            ]))
        ])
    ])
};

