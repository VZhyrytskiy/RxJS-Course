// first<T, D>(
//     predicate?: (value: T, index: number, source: Observable<T>) => boolean, 
//     defaultValue?: D
// ): OperatorFunction<T, T | D>

// One import for creational and pipable operators since v.7.2.0
import { of, first } from 'rxjs';
import { addItem, run } from './../../03-utils';

// emit only the first value
(function firstDemo1() {
  const source$ = of(0, 1, 2, 3, 4, 5);

  const stream$ = source$.pipe(first());
  // run(stream$);
})();

// first + predicate function
(function firstDemo2() {
  const $source = of(1, 3, 5, 10);
  const stream$ = $source.pipe(first(n => n % 2 === 0));
  // run(stream$);
})();

// no value causes an error
(function firstDemo3() {
  const source$ = of(1, 2, 3, 4, 5);
  const stream$ = source$.pipe(first(n => n > 250));
  // run(stream$);
})();

// if no value, use default
(function firstDemo4() {
  const source$ = of(1, 2, 3, 4, 5);
  const stream$ = source$.pipe(first(n => n > 250, 1000));
  // run(stream$);
})();

// Empty stream, no predicate, use default
(function firstDemo5() {
  const source$ = of();
  const stream$ = source$.pipe(first(null, 1000));
  // run(stream$);
})();

// predicate is a type guard, no default value, value doesn't exist => EmptyError
(function firstDemo6() {
  const source$ = of(1, 2, 3, 4, 5);
  const stream$ = source$.pipe(first((n: number | string): n is string => typeof n === 'string'));
  // run(stream$);
})();

// predicate is a type guard + default value, value doesn't exist
(function firstDemo7() {
  const source$ = of(1, 2, 3, 4, 5);
  const stream$ = source$.pipe(first((n: number | string): n is string => typeof n === 'string', 1000));
  // run(stream$);
})();

// predicate is a type guard + default value, value exists
(function firstDemo8() {
  const source$ = of(1, 2, 3, 4, 5, 'Hello');
  const stream$ = source$.pipe(first((n: number | string): n is string => typeof n === 'string', 1000));
  // run(stream$);
})();

export function runner() {}