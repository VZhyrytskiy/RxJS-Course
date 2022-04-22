// windowCount(
//   windowSize: number, 
//   startWindowEvery: number = 0
// ): Observable<T[]>

import { timer } from 'rxjs';
import { windowCount, take, tap, switchMap, toArray } from 'rxjs/operators';
import { addItem, run } from './../../03-utils';

// emit the window of 2 values or when complete
(function windowCountDemo1() {
  const source$ = timer(0, 1000);
  const windowSize = 2; // <-- size of window

  const stream$ = source$.pipe(
    tap(i => console.log(i)),
    windowCount(windowSize),
    switchMap(w => w.pipe(toArray())),
    take(3) // <-- just to limit the life of the source Observable
  );

  // run(stream$);
})();

// emit the window of 2 values
// start a new window when a new value emmitted
// multiple windows can coexist
(function windowCountDemo2() {
  const source$ = timer(0, 1000);
  const windowSize = 2; // <-- size of window
  const startWindowEvery = 3; // <-- start new window on each element

  const stream$ = source$.pipe(
    tap(i => console.log(i)),
    windowCount(windowSize, startWindowEvery),
    switchMap(w => w.pipe(toArray())),
    take(5) // <-- just to limit the life of the source Observable
  );

  // run(stream$);
})();

export function runner() {};