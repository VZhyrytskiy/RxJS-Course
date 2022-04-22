// skipWhile<T>(
//      predicate: (value: T, index: number) => boolean 
// ): MonoTypeOperatorFunction<T>

import { of, skipWhile } from 'rxjs';
import { addItem, run } from './../../03-utils';

(function skipWhileDemo() {
  const source$ = of(1, 2, 3, 1, 2, 3, 4);
  //                       ^ condition false

  // skip while the condition is true
  const stream$ = source$.pipe(
    skipWhile((val, index) => val < 3) // evaluates only once
  );
  // run(stream$);
})();

export function runner() {};