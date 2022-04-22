// buffer<T>(closeSignal: Observable<any>): OperatorFunction<T, T[]>

import { interval, fromEvent, buffer, take, tap } from 'rxjs';
import { addItem, run } from './../../03-utils';

(function bufferDemo() {
  const source$ = interval(1000);
  const closeSignal$ = fromEvent(document, 'click');

  // emit the buffer after click
  const stream$ = source$.pipe(
    tap(i => addItem(i, { color: '#CCC'})),
    buffer(closeSignal$), // <-- inner observable
    take(3) // <-- just to limit the life of the source Observable
  );

  // run(stream$);
})();

export function runner() {};