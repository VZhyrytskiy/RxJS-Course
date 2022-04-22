// sampleTime<T>(
//        period: number, 
//        scheduler: SchedulerLike = asyncScheduler
// ): MonoTypeOperatorFunction<T>

import { interval, sampleTime, take } from 'rxjs';
import { addItem, run } from './../../03-utils';

(function sampleTimeDemo() {
  const source$ = interval(100);
  const period = 500;

  const stream$ = source$.pipe(
    sampleTime(period),
    take(5)
  );
  // run(stream$);
})();

export function runner() {};