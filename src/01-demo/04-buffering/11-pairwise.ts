// pairwise(): Observable<Array<T>>

import { timer } from 'rxjs';
import { take, pairwise } from 'rxjs/operators';
import { addItem, run } from './../../03-utils';

(function pairwiseDemo() {
  const source$ = timer(0, 1000);

  // Emit the previous and current values as an array.
  const stream$ = source$.pipe(
    pairwise(), // <-- bufferCount(bufferSize=2, startBufferEvery=1)
    take(3)
  );

  // run(stream$);
})();

export function runner() {};