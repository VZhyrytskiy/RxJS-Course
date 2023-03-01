// bufferToggle<T, O>(
//   openSignal: ObservableOrPromise<O>, 
//   closeSignal: (value: O) => ObservableOrPromise<any>
// ): OperatorFunction<T, T[]>

import { interval, fromEvent, bufferToggle, take, tap, timer, map } from 'rxjs';
import { addItem, run } from './../../03-utils';


(function bufferToggleDemo1() {
  const source$ = timer(0, 100);

  //  each buffer closes 300 ms after opening
  const openSignal$ = timer(0, 100);
  const closeSignal$ = () => timer(300, 100);

  const stream$ = source$.pipe(
    tap(i => addItem(i, {color: '#CCC'})),
    bufferToggle(openSignal$, closeSignal$),
    take(3) // <-- just to limit the life of the source Observable
  );

  // run(stream$);
})();

// Toggle buffer on and off on pointer down/up
(function bufferToggleDemo2() {
  const source$ = fromEvent(document, 'pointermove').pipe(
    map((event: PointerEvent) => ({clientX: event.clientX, clientY: event.clientY}))
  );

  const stream$ = source$.pipe(
    bufferToggle(
      fromEvent(document, 'pointerdown'),   // <-- open buffer
      _ => fromEvent(document, 'pointerup') // <-- close buffer
    )
  );

  // run(stream$);
})();

export function runner() {};