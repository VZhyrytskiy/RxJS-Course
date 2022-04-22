// interval(
//   period: number = 0, 
//   scheduler: SchedulerLike = asyncScheduler
// ): Observable<number>

import { interval, queueScheduler, scheduled, Subscription } from 'rxjs';
import { addItem, run } from './../../03-utils';

// emit value after a period of time
(function intervalDemo1() {
  const period = 5000; 
  const stream$ = interval(period);  // asynchronous sequence

  // run(stream$);
  // setTimeout(addItem, 7000, 'Next line of code');
})();

// stop emitting by unsubscribing
(function intervalDemo2() {
  const period = 500;
  const stream$ = interval(period);

  // subscribe method returns subscription
  // const sub: Subscription = run(stream$);

  // we want to stop listening to the stream, we call unsubscribe
  // setTimeout(() => sub.unsubscribe(), 5000);

  // Types of Scheduler https://rxjs.dev/guide/scheduler
  // const streamNew$ = scheduled(interval(period), queueScheduler);
  // const sub: Subscription = run(streamNew$);
  // setTimeout(() => sub.unsubscribe(), 5000);
})();

export function runner() {}