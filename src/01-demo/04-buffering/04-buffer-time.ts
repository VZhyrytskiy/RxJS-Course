// bufferTime<T>(
//   bufferTimeSpan: number, 
//   bufferCreationInterval: number, 
//   maxBufferSize: number, 
//   scheduler: Scheduler
// ): OperatorFunction<T, T[]>

import { timer, bufferTime, take, filter, scan, tap } from 'rxjs';
import { addItem, run } from './../../03-utils';

// Buffer for 2 seconds
// create a new buffer every 2 seconds
// and emit it after 2 seconds
(function bufferTimeDemo1() {
  const source$ = timer(0, 1000);
  const bufferTimeSpan = 2000; // <-- emit every 2s...

  const stream$ = source$.pipe(
    tap(i => addItem(i, {color: '#CCC'})),
    bufferTime(bufferTimeSpan),
    take(7) // <-- just to limit the life of the source Observable
  );

  // run(stream$);
})();

// Multiple active buffers
// create a new buffer every 2 seconds
// and emit it after 4 seconds
(function bufferTimeDemo2() {
  const source$ = timer(0, 1000);
  const bufferTimeSpan = 4000;          // <-- emit every ...
  const bufferCreationInterval = 2000;  // <-- new buffer every...
  const maxBufferSize = 3;              // <-- max buffer size

  const stream$ = source$.pipe(
    tap(i => addItem(i, {color: '#CCC'})),
    bufferTime(bufferTimeSpan, bufferCreationInterval, maxBufferSize),
    take(7) // <-- just to limit the life of the source Observable
  );

  // run(stream$);
})();

(function bufferTimeDemo3() {
  const source$ = timer(0, 500);
  const bufferTimeSpan = 2000; // <-- emit every 2s...

  const stream$ = source$.pipe(
    tap(i => addItem(i, {color: '#CCC'})),  // <-- display each value
    bufferTime(bufferTimeSpan),             // <-- collects values
    filter(items => items.length > 0),
    scan((acc, items) => { // <-- create new array
      return [...acc, ...items];
    }, []),
    take(7) // <-- just to limit the life of the source Observable
  );

  // run(stream$);
})();

export function runner() {};