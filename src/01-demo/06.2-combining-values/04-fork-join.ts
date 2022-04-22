// forkJoin(
//  observables: Observable[]
// ): Observable
import { timer, forkJoin, throwError, of, take, delay, catchError, map } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { addItem, run } from './../../03-utils';

(function forkJoinDemo1() {
  const timerOne = timer(1000, 4000).pipe(take(3));
  const timerTwo = timer(2000, 4000).pipe(take(3));
  const timerThree = timer(3000, 4000).pipe(take(3));

  // like Promise.all()
  const stream$ = forkJoin([timerOne, timerTwo, timerThree]);

  // run(stream$);
})();

// Handling errors on outside
(function forkJoinDemo2() {
  const stream$ = forkJoin([
    // emit 'Hello' immediately
    of('Hello'),
    //emit 'World' after 1 second
    of('World').pipe(delay(1000)),
    // throw error
    throwError(() => 'This is an error')
  ]).pipe(catchError(error => of(error)));

  // run(stream$);
})();

// Getting successful results when one inner observable errors
(function forkJoinDemo3() {
  const stream$ = forkJoin([
    // emit 'Hello' immediately
    of('Hello'),
    //emit 'World' after 1 second
    of('World').pipe(delay(1000)),
    // throw error, handle it and return null
    throwError(() => 'This is an error').pipe(catchError(error => of('')))
  ]);

  // run(stream$);
})();

// don't use indexes
(function forkJoinDemo4() {
  const timerOne = timer(1000, 1000).pipe(take(3));
  const timerTwo = timer(2000, 2000).pipe(take(3));
  const timerThree = timer(3000, 3000).pipe(take(3));

  // like Promise.all()
  const stream$ = forkJoin([timerOne, timerTwo, timerThree]);

  // incorrect
  // stream$.subscribe({
  //   next(result) {
  //     // don't use indexes
  //     addItem(result[0] + result[1] + result[2]);
  //   },
  //   complete() {
  //     addItem('Complete!');
  //   }
  // });

  // correct
  // stream$.subscribe({
  //   // use destructuring
  //   next([valFromStream1, valFromStram2, valFromStrem3]) {
  //     addItem(valFromStream1 + valFromStram2 + valFromStrem3);
  //   },
  //   complete() {
  //     addItem('Complete!');
  //   }
  // });
})();

// multiple requests in parallel
(function forkJoinDemo5() {
  const userIds = [1, 2, 3];
  const multipleRequests = userIds.map(id =>
    ajax<any>(`https://jsonplaceholder.typicode.com/users/${id}`)
  );

  const stream$ = forkJoin(multipleRequests).pipe(
    // [{response: {}, ...}, ...] => [name, name, ... ] 
    map(response => response.map(res => res.response.name))
  );

  // run(stream$);
})();

export function runner() {};
