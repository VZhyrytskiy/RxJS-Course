// sample<T>(
//      notifier: Observable<any>
// ): MonoTypeOperatorFunction<T>

import { interval, sample, take } from 'rxjs';
import { addItem, run } from './../../03-utils';

(function sampleDemo() {
  const period = 100;
  const source$ = interval(period);

  const notifyPeriod = 500;
  const notifier$ = interval(notifyPeriod);

  const stream$ = source$.pipe(
    sample(notifier$),
    take(5)
  );

  // run(stream$);
})();

export function runner() {};


