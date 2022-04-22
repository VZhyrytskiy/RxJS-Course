// skip<T>(
//      count: number
// ): MonoTypeOperatorFunction<T>

import { range, skip } from 'rxjs';
import { addItem, run } from './../../03-utils';

(function skipDemo() {
  const start = 1;
  const count = 100;
  const source$ = range(start, count);

  // skip 10 values
  const stream$ = source$.pipe(skip(10));

  // run(stream$);
})();

export function runner() {};
