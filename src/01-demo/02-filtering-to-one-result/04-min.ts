// min<T>(
//     comparer?: (x: T, y: T) => number
// ): MonoTypeOperatorFunction<T>

import { Observable, of, timer, min, tap, timeout } from 'rxjs';
import { addItem, run } from './../../03-utils';

// emit min value from series of numbers
(function minDemo1() {
  const source$ = of(5, 4, 7, 2, 8);
  const stream$ = source$.pipe(min());

  // run(stream$);
})();

// Use a comparer function to get the minimal item
(function minDemo2() {
  interface Person {
    age: number;
    name: string;
  }

  const source$: Observable<Person> = of(
    { age: 7, name: 'Anna' },
    { age: 5, name: 'Boris' },
    { age: 9, name: 'Clara' }
  );

  const stream$ = source$.pipe(
    min((a: Person, b: Person) => (a.age < b.age ? -1 : 1))
  );

  // run(stream$);
})();

// doesn't work with infinite series of numbers
(function minDemo3() {
  const source$ = timer(0, 1000);
  const stream$ = source$.pipe(
    tap(val => console.log('Current Value: ', val)),
    min(),
    timeout(5000) // <-- causes error after 5s
  );

  // run(stream$);
})();

export function runner() {}