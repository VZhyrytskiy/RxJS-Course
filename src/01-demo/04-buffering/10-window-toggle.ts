// windowToggle(
//   openSignal: Observable<o>, 
//   closeSignal: function(openValue: o): Observable<any>
// ): Observable<T[]>


import { interval } from 'rxjs';
import { windowToggle, take, tap, toArray, switchMap } from 'rxjs/operators';
import { addItem, run } from './../../03-utils';

(function windowToggleDemo() {
  const source$ = interval(100);

  //  each window closes 300 ms after opening
  const openSignal$ = interval(400).pipe(tap(() => console.log('open')));
  const closeSignal$ = () =>
    interval(300).pipe(tap(() => console.log('close')));

  const stream$ = source$.pipe(
    tap(x => console.log(x)),
    windowToggle(openSignal$, closeSignal$),
    take(3), // <-- just to limit the life of the source Observable
    switchMap(w => w.pipe(toArray()))
  );

  // run(stream$);
})();

export function runner() {};