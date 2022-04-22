// mergeMap<T, O extends ObservableInput<any>>(
//   project: (value: T, index: number) => O, 
//   concurrent: number = Number.POSITIVE_INFINITY
// ): OperatorFunction<T, ObservedValueOf<O>>

import { fromEvent, interval, mergeMap, map, scan } from 'rxjs';
import { addItem, run } from './../../03-utils';

// Use Case: Nested streams in parallel
(function mergeMapDemo() {
  const clicks$ = fromEvent(document, 'click');
  const stream$ = clicks$.pipe(
    scan((acc, event) => ++acc, 0),
    mergeMap(count => interval(1000).pipe(map(() => count)))
  );

  // run(stream$);
})();

export function runner() {};
