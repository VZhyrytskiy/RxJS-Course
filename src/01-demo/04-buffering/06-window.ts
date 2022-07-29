// window(windowBounderiesSignal: Observable<any>): Observable<T[]>

import { interval, fromEvent } from 'rxjs';
import {
  window,
  switchMap,
  take,
  tap,
  toArray,
  concatAll
} from 'rxjs/operators';
import { addItem, run } from './../../03-utils';

// emit the window after click
(function windowDemo() {
  const source$ = interval(1000);
  const windowBoundariesSignal$ = fromEvent(document, 'click');

  const stream$ = source$.pipe(
    // tap(i => console.log(i)),
    window(windowBoundariesSignal$), // <-- inner observable
    tap(() => console.log('window')),
    switchMap(b => b.pipe(toArray())), // <-- transform observable to array
    // concatAll(),                    // <-- flatten observable-of-observable
    take(10) // <-- just to limit the life of the source Observable
  );

  // run(stream$);
})();

export function runner() {};