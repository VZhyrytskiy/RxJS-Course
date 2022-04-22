// of<T>(...args: (SchedulerLike | T)[]): Observable<T>

import { of, asyncScheduler, scheduled } from 'rxjs';
import { addItem, run } from './../../03-utils';

(function ofDemo1() {
  const stream$ = of(5);

  // run(stream$);
})();

(function ofDemo2() {
  const stream$ = of(1, 2, 3, 4, 5); // Each argument becomes a next notification.

  // run(stream$);
  // addItem('Next line of code');
})();

(function ofDemo3() {
  const streamNew$ = scheduled(of(1, 2, 3, 4, 5), asyncScheduler);

  // run(streamNew$);
  // addItem('Next line of code');
})();

export function runner() {}
