// endWith<T>(
//  ...array: (SchedulerLike | T)[]
// ): MonoTypeOperatorFunction<T>

import { timer, take, endWith } from 'rxjs';
import { addItem, run } from './../../03-utils';

(function endWithDemo() {
  const dueTime = 0;
  const period = 1000;
  const source$ = timer(dueTime, period).pipe(take(3));

  // stream ends with the specified values
  const stream$ = source$.pipe(endWith(5, 6));

  // run(stream$);
})();

export function runner() {};
