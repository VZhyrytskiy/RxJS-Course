// windowWhen(closeSignal: function(): Observable<any>): Observable<T[]>


import { interval } from 'rxjs';
import {
  concatAll,
  windowWhen,
  take,
  tap,
  switchMap,
  toArray
} from 'rxjs/operators';
import { addItem, run } from './../../03-utils';

(function windowWhenDemo() {
  let x = 0;
  const source$ = interval(500);

  // close window every 1s for the first 5 items and every .5s for the rest
  const closeSignal$ = () => {
    const result = x < 5 ? interval(1000) : interval(500);
    return result.pipe(tap(() => console.log('Close Window!')));
  };

  const stream$ = source$.pipe(
    tap(i => console.log(i)),
    take(10), // <-- just to limit the life of the source Observable
    windowWhen(closeSignal$),
    tap(() => console.log('New Window!')),
    // concatAll() // <-- flatten Observable-of-Observable
    switchMap(w => w.pipe(toArray())) // <-- transform Observeble-to-Array
  );

  // run(stream$);
})();

export function runner() {}