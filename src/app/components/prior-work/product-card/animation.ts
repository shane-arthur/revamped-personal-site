import { trigger, style, transition, animate, keyframes } from '@angular/animations';

export const Animations = {
    flyInBottom: trigger('flyInBottom', [
        transition(':enter', [
            animate(550, keyframes([
                style({ transform: 'translateY(-35px)'}),
                style({ transform: 'translateY(-32.5px)'}),
                style({ transform: 'translateY(-30px)'}),
                style({ transform: 'translateY(-27.5px)'}),
                style({ transform: 'translateY(-25px)'}),
                style({ transform: 'translateY(-22.5px)'}),
                style({ transform: 'translateY(-20px)'}),
                style({ transform: 'translateY(-17.5px)'}),
                style({ transform: 'translateY(-15px)'}),
                style({ transform: 'translateY(-12.5px)'}),
                style({ transform: 'translateY(-10px)'}),
                style({ transform: 'translateY(-7.5px)'}),
                style({ transform: 'translateY(-5px)'}),
                style({ transform: 'translateY(-2.5px)'}),
                style({ transform: 'translateY(0px)'}),
            ]))
        ])
    ]),
    flyInTop: trigger('flyInTop', [
        transition(':enter', [
            animate(550, keyframes([
                style({ transform: 'translateY(32.5px)'}),
                style({ transform: 'translateY(30px)'}),
                style({ transform: 'translateY(27.5px)'}),
                style({ transform: 'translateY(25px)'}),
                style({ transform: 'translateY(22.5px)'}),
                style({ transform: 'translateY(20px)'}),
                style({ transform: 'translateY(17.5px)'}),
                style({ transform: 'translateY(15px)'}),
                style({ transform: 'translateY(12.5px)'}),
                style({ transform: 'translateY(10px)'}),
                style({ transform: 'translateY(7.5px)'}),
                style({ transform: 'translateY(5px)'}),
                style({ transform: 'translateY(2.5px)'}),
                style({ transform: 'translateY(0px)'}),
            ]))
        ])
    ]),
    fadeIn: trigger('fadeIn', [
        transition(':enter', [
            animate(1000, keyframes([
                style({ opacity: 0.05}),
                style({ opacity: 0.10}),
                style({ opacity: 0.15}),
                style({ opacity: 0.20}),
                style({ opacity: 0.25}),
                style({ opacity: 0.30}),
                style({ opacity: 0.35}),
                style({ opacity: 0.40}),
                style({ opacity: 0.45}),
                style({ opacity: 0.50}),
                style({ opacity: 0.55}),
                style({ opacity: 0.60}),
                style({ opacity: 0.65}),
                style({ opacity: 0.70}),
                style({ opacity: 0.75}),
                style({ opacity: 0.80}),
                style({ opacity: 0.85}),
                style({ opacity: 0.90}),
                style({ opacity: 0.95}),
                style({ opacity: 1}),
            ]))
        ])
    ])
};

