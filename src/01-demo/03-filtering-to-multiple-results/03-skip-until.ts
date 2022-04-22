// skipUntil<T>(
//      notifier: Observable<any>
// ): MonoTypeOperatorFunction<T>

import { interval, timer, skipUntil } from 'rxjs';
import { addItem, run } from './../../03-utils';

(function skipUntilDemo() {
  const period = 1000;
  const dueTime = 5000;
  
  const source$ = interval(period);
  const startSignal$ = timer(dueTime);

  // ignore emitted values from source until provided observable emits
  const stream$ = source$.pipe(skipUntil(startSignal$));
  // run(stream$);
})();

export function runner() {};