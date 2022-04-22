// range(
//   start: number = 0, 
//   count?: number, 
//   sheduler?: ShedulerLike
// ): Observable<number>

import { range, asyncScheduler, scheduled } from 'rxjs';
import { addItem, run } from './../../03-utils';

// finite sync stream of one default start value = 0
(function rangeDemo1() {
  const start = 1;  // default value is 0

  const stream$ = range(start);

  // run(stream$); 
})();

// finite sync stream of 10 integers starting from 21
(function rangeDemo2() {
  const start = 21;
  const count = 10; // default value is undefined = infinite stream

  const stream$ = range(start, count);

  // run(stream$);
  // addItem(200); // 200 appears after complete
})();

// finite async stream of 10 integers starting from 100
(function rangeDemo3() {
  const start = 100;
  const count = 10; 
  const scheduler = asyncScheduler;

  const stream$ = scheduled(range(start, count), scheduler);
  // run(stream$);
  // addItem(200); // 200 appears first
})();

export function runner() {}