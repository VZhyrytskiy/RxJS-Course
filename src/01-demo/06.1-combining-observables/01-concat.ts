// concat<O extends ObservableInput<any>, R>(
//  ...observables: (SchedulerLike | O)[]
// ): Observable<ObservedValueOf<O> | R>

import { timer, concat, throwError, EMPTY, take, catchError, map } from 'rxjs';
import { addItem, run } from './../../03-utils';

(function concatDemo1() {
  const source1$ = timer(0, 1000).pipe(
    map(() => 1),
    take(3) // finite stream
  );
  const source2$ = timer(0, 100).pipe(
    map(() => 2),
    take(3) // finite stream
  );

  // emits values from source1$, when completes, subscribes to source2$
  const stream$ = concat(source1$, source2$);

  // run(stream$);
})();

(function concatDemo2() {
  const stream1$ = timer(0, 1000); // infinite stream
  const stream2$ = timer(0, 100).pipe(take(3));

  // second observable never runs
  // we can not see the result of concatanation
  const stream$ = concat(stream1$, stream2$);

  // run(stream$);
})();

// handle error outside
(function concatDemo3() {
  const stream1$ = timer(0, 1000).pipe(take(3)); // finite stream
  const stream2$ = throwError(() => 'This is an error'); // stream w/ error

  const stream$ = concat(stream1$, stream2$);

  // run(stream$);
})();

// handle error inside
(function concatDemo4() {
  const stream1$ = timer(0, 1000).pipe(take(3)); // finite stream
  // stream w/ error, which is handled
  const stream2$ = throwError(() => 'This is an error').pipe(
    catchError(error => EMPTY)
  );

  const stream$ = concat(stream1$, stream2$);

  // run(stream$);
})();

export function runner() {};