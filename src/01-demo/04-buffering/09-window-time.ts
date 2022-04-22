// windowTime(
//   windowTimeSpan: number, 
//   windowCreatonInterval: number, 
//   maxWindowSize: number, 
//   scheduler: Scheduler
// ): Observable<T[]>

import { timer } from 'rxjs';
import {
  concatAll,
  windowTime,
  tap,
  take,
  switchMap,
  toArray
} from 'rxjs/operators';
import { addItem, run } from './../../03-utils';

// create a new window every 2 seconds
// and emit it after 2 seconds
(function windowTimeDemo1() {
  // //emit immediately then every 1s
  const source$ = timer(0, 1000);
  const windowTimeSpan = 2000; // <-- emit every ...

  const stream$ = source$.pipe(
    take(9), // <-- just to limit the life of the source Observable
    windowTime(windowTimeSpan),
    tap(() => console.log('New Window!')),
    switchMap(w => w.pipe(toArray()))
    // concatAll()
  );

  // run(stream$);
})();

// create a new window every 1 seconds
// and emit it after 2 seconds
(function windowTimeDemo2() {
  const source$ = timer(0, 100);
  const windowTimeSpan = 2000; // <-- emit every ...
  const windowCreationInterval = 1000; // <-- new window every...
  const maxWindowSize = 2; // <-- max window size

  const stream$ = source$.pipe(
    take(9), // <-- just to limit the life of the source Observable
    windowTime(windowTimeSpan, windowCreationInterval, maxWindowSize),
    tap(() => console.log('New Window!')),
    switchMap(w => w.pipe(toArray()))
  );

  // run(stream$);
})();

export function runner() {};