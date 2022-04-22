// bufferCount<T>(
//   bufferSize: number, 
//   startBufferEvery: number = null
// ): OperatorFunction<T, T[]>

import { fromEvent, bufferCount, map, take, tap, timer } from 'rxjs';
import { addItem, run } from './../../03-utils';

// emit the buffer of 2 values or when complete
(function bufferCountDemo1() {
  const source$ = timer(0, 1000);
  const bufferSize = 2; // <-- size of buffer

  const stream$ = source$.pipe(
    take(10), // <-- just to limit the life of the source Observable
    tap(i => addItem(i, {color: '#CCC'})),
    bufferCount(bufferSize)
  );

  // run(stream$);
})();

// Overlapping or sparse buffers
// emit the buffer of 2 values
// start a new buffer when a new value emmitted
// multiple buffers can coexist
(function bufferCountDemo2() {
  const source$ = timer(0, 1000);
  const bufferSize = 2;       // <-- size of buffer
  const startBufferEvery = 1; // or 3 // <-- start new buffer on each element

  const stream$ = source$.pipe(
    take(10), // <-- just to limit the life of the source Observable
    tap(i => addItem(i, {color: '#CCC'})),
    bufferCount(bufferSize, startBufferEvery),
  );

  // run(stream$);
})();

// Keyboard presses
(function bufferCountDemo3() {
  const stream$ = fromEvent(document.querySelector('#text-field'), 'keydown').pipe(
    map((e: KeyboardEvent) => e.key),
    bufferCount(5),
    map(arr => arr.join(''))
  );

  // run(stream$);
})();

export function runner() {};
