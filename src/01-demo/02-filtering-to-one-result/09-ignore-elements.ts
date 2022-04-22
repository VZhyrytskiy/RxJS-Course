// ignoreElements(): OperatorFunction<any, never>

import { throwError, of, range, ignoreElements, mergeMap } from 'rxjs';
import { addItem, run } from './../../03-utils';

// options for range() function
const start = 0;
const count = 5;

// pass only complete
export function ignoreElementsDemo1() {
  const source$ = range(start, count);

  const stream$ = source$.pipe(ignoreElements());

  //output: "Complete!"
    // run(stream$);
}

// pass only error
export function ignoreElementsDemo2() {
  const source$ = range(start, count).pipe(
    mergeMap(val => {
      if (val === 4) {
        return throwError(() => `Error at ${val}`);
      }
      return of(val);
    })
  );

  const stream$ = source$.pipe(ignoreElements());

  //output: "Error: Error at 4"
  // run(stream$);
}

export function runner() {}