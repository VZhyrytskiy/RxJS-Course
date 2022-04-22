// throwIfEmpty<T>(
//   errorFactory: () => any = defaultErrorFactory
// ): MonoTypeOperatorFunction<T>

import { of, fromEvent, timer, throwIfEmpty, takeUntil } from 'rxjs';
import { addItem, run } from './../../03-utils';

// Default Error
(function throwIfEmptyDemo1() {
  const source$ = of();

  const stream$ = source$.pipe(throwIfEmpty());

    // run(stream$);
})();

// Custom Error
(function throwIfEmptyDemo2() {
  const runBtn = document.getElementById('runBtn');
  const source$ = fromEvent(runBtn, 'click');

  const stream$ = source$.pipe(
    takeUntil(timer(2000)),
    throwIfEmpty(() => new Error('the button was not clicked within 2 second'))
  );

    // run(stream$, { outputMethod: 'console'});
})();

export function runner() {};
