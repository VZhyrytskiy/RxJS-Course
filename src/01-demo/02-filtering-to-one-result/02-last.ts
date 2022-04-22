// last<T, D>(
//     predicate?: (value: T, index: number, source: Observable<T>) => boolean, 
//     defaultValue?: D
// ): OperatorFunction<T, T | D>

import { range, timer, last, timeout, EMPTY, of } from 'rxjs';
import { addItem, run } from './../../03-utils';

// options for range() function
const start = 1;
const count = 100;

// emit only the last value
(function lastDemo1() {
  const source$ = range(start, count);
  const stream$ = source$.pipe(last());
  // run(stream$);
})();

// last + predicate function
(function lastDemo2() {
  const source$ = range(start, count);
  const stream$ = source$.pipe(last(n => n < 50));
  // run(stream$);
})();

// no value causes an error
(function lastDemo3() {
  const source$ = range(start, count);
  const stream$ = source$.pipe(last(n => n > 500));

  // output: Error: EmptyError: no elements in sequence
  // run(stream$);
})();

// if no value, use default
(function lastDemo4() {
  const source$ = range(start, count);
  const stream$ = source$.pipe(last(n => n > 500, 1000));
  // run(stream$);
})();


// empty stream, no predicate, default value
(function lastDemo5() {
  const source$ = EMPTY;
  const stream$ = source$.pipe(last(null, 1000));
  // run(stream$);
})();

// infinite stream, no value
(function lastDemo6() {
  const dueTime = 0;
  const period = 100;
  const source$ = timer(dueTime, period);
  const stream$ = source$.pipe(
    last(),
    timeout(5000) // <-- causes error after 5s
  );
  // run(stream$);
})();

// predicate is a type guard, no default value, value doesn't exist => EmptyError
(function lastDemo7() {
  const source$ = range(start, count);
  const stream$ = source$.pipe(last((n: number | string): n is string => typeof n === 'string'));
  // run(stream$);
})();

// predicate is a type guard + default value, value doesn't exist
(function lastDemo8() {
  const source$ = range(start, count);
  const stream$ = source$.pipe(last((n: number | string): n is string => typeof n === 'string', 1000));
  // run(stream$);
})();

// predicate is a type guard + default value, value exists
(function lastDemo9() {
  const source$ = of(1, 2, 3, 4, 5, 'Hello', 6);
  const stream$ = source$.pipe(last((n: number | string): n is string => typeof n === 'string', 1000));
  // run(stream$);
})();

export function runner() {}