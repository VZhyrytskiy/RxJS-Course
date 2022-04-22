// timeout<T, O extends ObservableInput<any>, M>(
//   config: number | Date | TimeoutConfig<T, O, M>, 
//   schedulerArg?: SchedulerLike
// ): OperatorFunction<T, T | ObservedValueOf<O>>

// export interface TimeoutConfig<T, O extends ObservableInput<unknown> = ObservableInput<T>, M = unknown> {
//   each?: number;
//   first?: number | Date;
//   scheduler?: SchedulerLike;
//   with?: (info: TimeoutInfo<T, M>) => O;
//   meta?: M;
// }

// export interface TimeoutInfo<T, M = unknown> {
//   readonly meta: M;
//   readonly seen: number;
//   readonly lastValue: T | null;
// }


import { of, interval, Observable, tap, delay, timeout, concatMap, catchError } from 'rxjs';
import { TimeoutInfo } from 'rxjs/internal/operators/timeout';
import { addItem, run } from './../../03-utils';

(function timeoutDemo1() {
  const stream$ = of('Main Value').pipe(
    delay(5000),        // timespan
    tap(val => console.log(val)),

    // wait 3s, then throw error
    timeout(3000)
  );

  // run(stream$);
})();

(function timeoutDemo2() {
  // simulate request
  function makeRequest(timeToDelay: number): Observable<string> {
    return of('Request Complete!').pipe(
      delay(timeToDelay),
      timeout(2500),
      catchError(err => of(`Request timed out after: ${timeToDelay} (${err})`))
    );
  }

  const stream$ = of(2000, 3000, 4000).pipe(
    concatMap(duration => makeRequest(duration))
  );

  // run(stream$);
})();

(function timeoutDemo3() {
  const timeoutAt = new Date(Date.now() + 5000); // <-- date is 5000ms from now

  // console.log(timeoutAt);
  const stream$ = interval(1000).pipe(delay(6000), timeout(timeoutAt)); // <-- stream must start before provided Date

  // run(stream$);
})();



(function timeoutDemo4() {
  const slow$ = interval(900);
  const fast$ = interval(500);

  const stream$ = slow$.pipe(
        timeout({
          first: 1000, //800          // timeout before the first element
          each: 800,   //1000         // timeout between elements
          meta: 'Some metadate',
          with: (info: TimeoutInfo<number, string>) => {
            console.log(info);  // info includes: meta, seen, lastValue
            return fast$;       // alternative Observable
          },    
        })
  );

  // run(stream$);
})();

export function runner() {};


