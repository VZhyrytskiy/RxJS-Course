// zipWith<T, A extends readonly unknown[]>(
//    ...otherInputs: any[]
// ): OperatorFunction<T, Cons<T, A>>

import { timer, fromEvent, zip, zipWith, range, interval, throwError, NEVER, take, map } from 'rxjs';
import { addItem, run } from './../../03-utils';


(function zipWithDemo1() {
  const timerOne = timer(1000, 4000).pipe(take(3));
  const timerTwo = timer(2000, 4000).pipe(take(3));
  const timerThree = timer(3000, 4000).pipe(take(3));

  // requires all three elements
  const stream$ = timerOne.pipe(
    zipWith(timerTwo, timerThree),
    // map them to objects
    map(([timerOne, timerTwo, timerThree]) => ({timerOne, timerTwo, timerThree})));

  // run(stream$);
})();

// Error
(function zipWithDemo2() {
  const timerOne = timer(1000, 4000).pipe(take(3));
  const timerTwo = timer(2000, 4000).pipe(take(3));
  const timerThree = throwError(() => 'Error in the input Observable');

  // never ends and never outputs the value
  // const timerThree = NEVER;


  // requires all three elements
  const stream$ = timerOne.pipe(zipWith(timerTwo, timerThree));

  // run(stream$);
})();

// get X/Y coordinates of drag start/finish (mouse down/up)
(function zipWithDemo3() {
  const documentEvent = eventName =>
    fromEvent(document, eventName).pipe(
      map((e: MouseEvent) => ({ x: e.clientX, y: e.clientY }))
    );

  const stream$ = documentEvent('mousedown').pipe(
    zipWith(documentEvent('mouseup'))
  );

  // run(stream$);
})();

// a stream that produces a range of values with an interval.
(function zipWithDemo4() {
  const start = 3;
  const count = 5;
  const period = 1500;

  const source$ = range(start, count);
  const period$ = interval(period);

  const stream$ = source$.pipe(zipWith(period$), map(([val1, ignoredValue]) => val1));

  // run(stream$);
})();

export function runner() {};
