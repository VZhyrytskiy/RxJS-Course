// single<T>(
//     predicate?: (value: T, index: number, source: Observable<T>) => boolean
// ): MonoTypeOperatorFunction<T>

import { range, EMPTY, single } from 'rxjs';
import { addItem, run } from './../../03-utils';

// options for range() function
const start = 1;
const count = 100;

// emit the first value to cause the predicate function to be true
(function singleDemo1() {
  const source$ = range(start, count);
  const stream$ = source$.pipe(single(n => n === 50));

  // run(stream$); // output: Next: 50;
})();

// emit error, too many matching values
(function singleDemo2() {
  const source$ = range(start, count);
  const stream$ = source$.pipe(single(n => n > 50));

  // run(stream$); // output: SequenceError: Too many matching values
})();

// emit error, too many matching values
(function singleDemo3() {
  const source$ = range(start, count);
  const stream$ = source$.pipe(single()); // w/o predicate

  // run(stream$); // output: SequenceError: Too many matching values
})();

// emit error, no elements in sequence
(function singleDemo4() {
  const source$ = EMPTY;
  const stream$ = source$.pipe(single(n => n > 50));

  // run(stream$); // output: Error: EmptyError: no elements in sequence
})();

// emit error, no matching values
(function singleDemo5() {
  const source$ = range(start, count);
  const stream$ = source$.pipe(single(n => n > 100));

  // run(stream$); // output: NotFoundError: No matching values
})();

export function runner() {}