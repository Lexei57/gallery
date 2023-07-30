import {transition, trigger, useAnimation} from '@angular/animations';
import {bounce, fadeIn} from 'ng-animate';

export const dialogOpen = trigger('open', [
  transition('void => *', useAnimation(fadeIn, {
    params: {
      timing: 0.3
    }
  }))
])
