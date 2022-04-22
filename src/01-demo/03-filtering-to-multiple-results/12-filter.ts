// filter<T>(
//        predicate: (value: T, index: number) => boolean, 
//        thisArg?: any
// ): MonoTypeOperatorFunction<T>

import { range, filter } from 'rxjs';
import { addItem, run } from './../../03-utils';

// emit values matching a given predicate
(function filterDemo() {
  const start = 1;
  const count = 100;

  const source$ = range(start, count);
  const predicate = (n: number) => n % 3 === 0;

  const stream$ = source$.pipe(filter(predicate));
  // run(stream$);
})();

export function runner() {};
