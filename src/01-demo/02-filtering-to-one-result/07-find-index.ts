// findIndex<T>(
//     predicate: (value: T, index: number, source: Observable<T>) => boolean, 
//     thisArg?: any
// ): OperatorFunction<T, number>

import { of, findIndex } from 'rxjs';
import { addItem, run } from './../../03-utils';

// emit index of element which matches the condition
(function findIndexDemo1() {
  const source$ = of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
  const stream$ = source$.pipe(findIndex(x => x > 4 && x % 2 === 0));

  // run(stream$);
})();

// emit -1, nothing matches the condition
(function findIndexDemo2() {
  const source$ = of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
  const stream$ = source$.pipe(findIndex(x => x > 40));

  // run(stream$);
})();

export function runner() {}