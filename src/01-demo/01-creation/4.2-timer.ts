// timer(
//   dueTime: number | Date = 0, 
//   periodOrScheduler?: number | SchedulerLike, 
//   scheduler?: SchedulerLike = asyncScheduler
// ): Observable<number>

import { timer, asyncScheduler, queueScheduler } from 'rxjs';
import { addItem, run } from './../../03-utils';

// Emit only 0 and complete
(function timerDemo1() {
  const stream$ = timer(0);

  // run(stream$);
})();

(function timerDemo2() {
  const initialDelay: number | Date = 3000;
  const period: number = 1000;

  const stream$ = timer(initialDelay, period);

  // run(stream$); // wait for 3s before emitting the first value
})();

export function runner() {}