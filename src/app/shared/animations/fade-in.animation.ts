import { animate, style, transition, trigger } from '@angular/animations';

export const fadeInAnimation = trigger('fade', [
  transition('void => *', [
    style({
      opacity: 0,
      transform: 'translateY(-10px)',
    }),
    animate(
      500,
      style({
        opacity: 1,
        transform: 'translateY(0)',
      }),
    ),
  ]),
]);
