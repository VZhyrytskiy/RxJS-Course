// elementAt<T>(
//     index: number, 
//     defaultValue?: T
// ): MonoTypeOperatorFunction<T>

import { of, fromEvent, elementAt } from 'rxjs';
import { addItem, run } from './../../03-utils';

// index exists, emit value and complete
(function elementAtDemo1() {
  const source$ = of(5, 4, 7, 2, 8);
  const stream$ = source$.pipe(elementAt(2));

  // run(stream$);
})();

// index doesn't exist emit error
(function elementAtDemo2() {
  const source$ = of(5, 4, 7, 2, 8);
  const stream$ = source$.pipe(elementAt(10));

  // run(stream$);
})();

// index is negative - unhandled exception
(function elementAtDemo3() {
  const source$ = of(5, 4, 7, 2, 8);
  // const stream$ = source$.pipe(elementAt(-10));

  // run(stream$);
})();

// index doesn't exist, use default value and complete
(function elementAtDemo4() {
  const source$ = of(5, 4, 7, 2, 8);
  const stream$ = source$.pipe(elementAt(10, 100));

  // run(stream$);
})();

// emit 2-nd click on runBtn button and complete
(function elementAtDemo4() {
  const clicks$ = fromEvent(document.getElementById('runBtn'), 'click');
  const stream$ = clicks$.pipe(elementAt(1));

  // run(stream$, { outputMethod: 'console'});
})();

export function runner() {}