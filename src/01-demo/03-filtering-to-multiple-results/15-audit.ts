// audit<T>(
//      durationSelector: (value: T) => ObservableInput<any>
// ): MonoTypeOperatorFunction<T>
// ObservableInput - valid type that can be converted to observables

import { timer, interval, audit, take, tap } from 'rxjs';
import { addItem, run } from './../../03-utils';

(function auditDemo() {
  const dueTime = 0;
  const period = 100;
  const source$ = timer(dueTime, period);

  const stream$ = source$.pipe(
    audit(valueFromSource => {
      addItem(`audit: value from source: ${valueFromSource}, delay ${valueFromSource * 100}`, { color: '#ccc'});
      return interval(valueFromSource * 100); // ignore time = silencing duration
    }),
    take(5)
  );
  // run(stream$);
})();

export function runner() {};