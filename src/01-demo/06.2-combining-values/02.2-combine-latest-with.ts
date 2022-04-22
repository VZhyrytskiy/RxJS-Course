// combineLatestWith<T, A extends readonly unknown[]>(
//     ...otherSources: any[]
// ): OperatorFunction<T, Cons<T, A>>

import { timer, combineLatestWith, take } from 'rxjs';
import { addItem, run } from './../../03-utils';

(function combineLatestWithDemo1() {
  // timerOne emits first value at 1s, then once every 4s
  const timerOne = timer(1000, 4000).pipe(take(3));

  // timerTwo emits first value at 2s, then once every 4s
  const timerTwo = timer(2000, 4000).pipe(take(3));

  // timerThree emits first value at 3s, then once every 4s
  const timerThree = timer(3000, 4000).pipe(take(3));

  // when one timer emits, emit the latest values from each timer as an array
  // BUT only after each stream emit a value
  // use default projection function () => [a, b, c]
  const stream$ = timerOne.pipe(combineLatestWith([timerTwo, timerThree]));

  // run(stream$);
})();

export function runner() {};


