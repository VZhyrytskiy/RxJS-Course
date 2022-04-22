// concatMap<T, O extends ObservableInput<any>>(
//   project: (value: T, index: number) => O, 
// ): OperatorFunction<T, ObservedValueOf<O>>

import { of, Observable, concatMap, delay } from 'rxjs';
import { addItem, run } from './../../03-utils';

// antipattern
(function concatMapDemo1() {
  const ids$ = of(1, 2, 3); // <-- ids of objects - Outer Observable

  ids$.subscribe(id => {
    const innerObservable$ = emulateHttpCall(id); // <-- Inner Observable

    // antipattern: subscribe inside subscribe
    // run(innerObservable$);
  });
})();

// we take a value from the Outer Observable
// and for each value we create an Inner Observable
// then we want to concatanate all those dirived observables together
// in the right order
// Use Case: Nested streams in sequence
(function concatMapDemo2() {
  const ids$ = of(1, 2, 3); // <-- ids of objects

  const stream$ = ids$.pipe(concatMap(id => emulateHttpCall(id)));

  // run(stream$);
})();

// helper function which emulates http call
function emulateHttpCall(id: number): Observable<any> {
  switch (id) {
    case 1:
      return of({ id: 1, name: 'Anna' }).pipe(delay(4000)); // <-- emulation of http call, which returns Observable after 4s
    case 2:
      return of({ id: 2, name: 'Boris' }).pipe(delay(3000)); // <-- pause 3s
    case 3:
      return of({ id: 3, name: 'Clara' }).pipe(delay(2000)); // <-- pause 2s
  }
}

export function runner() {};

