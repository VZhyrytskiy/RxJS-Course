// distinctUntilKeyChanged<T, K extends keyof T>(
//        key: K, 
//        comparator?: (x: T[K], y: T[K]) => boolean
// ): MonoTypeOperatorFunction<T>

import { of, distinctUntilKeyChanged } from 'rxjs';
import { addItem, run } from './../../03-utils';

interface Person {
  name: string;
  age: number;
}

(function distinctUntilKeyChangedDemo1() {
  const source$ = of(
    { name: 'Anna', age: 4 },
    { name: 'Boris', age: 7 },
    { name: 'Anna', age: 5 },
    { name: 'Anna', age: 6 } // <-- dropped this object by name value
  );

  const prop = 'name';
  const stream$ = source$.pipe(distinctUntilKeyChanged(prop));

  // run(stream$);
})();

(function distinctUntilKeyChangedDemo2() {
  const source$ = of(
    { name: 'Anna', age: 14 },
    { name: 'Boris', age: 17 },
    { name: 'Anna', age: 15 },
    { name: 'Ann', age: 16 } // <-- dropped this object
  );

  const prop = 'name';
  // compare only first 3 letters
  const compare = (x: string, y: string) => x.substring(0, 3) === y.substring(0, 3);
  const stream$ = source$.pipe(distinctUntilKeyChanged(prop, compare));

  // run(stream$);
})();

export function runner() {};
