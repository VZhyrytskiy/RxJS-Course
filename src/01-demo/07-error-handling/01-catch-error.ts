// catchError<T, O extends ObservableInput<any>>(
//   selector: (err: any, caught: Observable<T>) => O
// ): OperatorFunction<T, T | ObservedValueOf<O>>

/**
 * There are several strategies of handling errors:
 * 1. Catch and Recover(Replace)
 * 2. Catch and Rethrow
 * 3. Catch and Retry
 * 4. Catch, Rethrow and Cleanup
 */

import { throwError, interval, of, catchError, finalize, concatMap, tap } from 'rxjs';
import { addItem, run } from './../../03-utils';

// STRATEGY: recover from an error and provide alternative value to complete stream
(function catchErrorDemo1() {
  const stream$ = interval(1000).pipe(
    concatMap(val => {
      if (val > 3) {
        return throwError(() => new Error('Error >3!')); // <-- create throw error observable
      }
      return of(val);
    }),

    // takes two params: 1. an error, 2. source observable
    catchError((err, sourceObservable) => {
      console.log(err);
      console.log(sourceObservable);
      return of('Continue: provide an alternative value: 0'); // <-- provide alternative value
    })
  );

  // run(stream$);
})();

// STRATEGY: catch then rethrow the error
(function catchErrorDemo2() {
  const stream$ = interval(1000).pipe(
    concatMap(val => {
      if (val > 3) {
        return throwError(() => new Error('Error >3!')); // <-- create throw error observable
      }
      return of(val);
    }),
    catchError(err => {
      console.log(err);
      return throwError(() => err); // <-- create throw error observable
    })
  );

  // run(stream$);
})();

// STRATEGY: re-try
(function catchErrorDemo3() {
  const stream$ = interval(1000).pipe(
    tap(value => console.log(value)),
    concatMap(val => {
      if (val > 3) {
        return throwError(() => 'Error >3!'); // <-- create throw error observable
      }
      return of(val).pipe(
        concatMap(val => {
          if (val === 2) {
            return throwError(() => 'Error == 2'); // <-- create throw error observable
          }
          return of(val);
        }) 
      );
    }),
    catchError((err, sourceObservable) => {
      console.log(err);         // <-- display an error
      return sourceObservable;  // <-- try the source observable again
    })
  );

  // run(stream$);
})();

// STRATEGY: clean up logic
(function catchErrorDemo4() {
  const stream$ = interval(1000).pipe(
    concatMap(val => {
      if (val > 3) {
        return throwError(() => 'Error >3!'); // <-- create throw error observable
      }
      return of(val);
    }),
    catchError(err => {
      return throwError(() => err); // <-- create throw error observable
    }),
    finalize(() => {
      addItem('Clean Up Logic');
    })
  );

  // run(stream$);
})();

export function runner() {};
