// bufferWhen<T>(closeSignalFunction: () => ObservableInput<any>): OperatorFunction<T, T[]>

import { interval, bufferWhen, take, tap, timer } from 'rxjs';
import { addItem, run } from './../../03-utils';

(function bufferWhenDemo() {
  let x = 0;
  const source$ = timer(0, 500);

  const closeSignal$ = () => {
    return x < 5 ? interval(1500) : interval(1000);
  };

  const stream$ = source$.pipe(
    take(16), // <-- just to limit the life of the source Observable
    tap(i => addItem(i, { color: '#CCC'})),
    tap(i => x = i),
    bufferWhen(closeSignal$)
  );

  // run(stream$);
})();

export function runner() {};
