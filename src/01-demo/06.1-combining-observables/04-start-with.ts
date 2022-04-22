// startWith<T, D>(
//  ...array: (SchedulerLike | T)[]
// ): OperatorFunction<T, T | D>

import { timer, take, startWith } from 'rxjs';
import { addItem, run } from './../../03-utils';

(function startWithDemo() {
  const dueTime = 0;
  const period = 1000;
  const source$ = timer(dueTime, period).pipe(take(3));

  // stream starts with the specified values
  const stream$ = source$.pipe(startWith(5, 6));

  // run(stream$);
})();

export function runner() {};
