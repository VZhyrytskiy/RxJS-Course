// take<T>(
//      count: number
// ): MonoTypeOperatorFunction<T>

import { range, take } from 'rxjs';
import { addItem, run } from './../../03-utils';

(function takeDemo() {
  const start = 1;
  const count = 100;

  const source$ = range(start, count);

  // Takes the first 10 values from the source, then completes.
  const stream$ = source$.pipe(take(10));
  // run(stream$);
})();

export function runner() {};
