// from<T>(input: ObservableInput<T>, scheduler?: SchedulerLike): Observable<T>

import { from, asyncScheduler, scheduled, take } from 'rxjs';
import { addItem, run } from './../../03-utils';

// From Array
(function fromDemo1() {
  const array: Array<number> = [1, 2, 3, 4, 5, 6];
  const stream$ = from(array);

  // run(stream$);
  // addItem('Next line of code');
})();

// From Promise
(function fromDemo2() {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(5);
      // reject('Error');
    }, 3000)
  });
  const stream$ = from(promise);

  // run(stream$);
})();

// From iterable object - string
(function fromDemo3() {
  const stream$ = from('Hello World!');

  // run(stream$);
})();

// From infinite iterable object - generator
(function fromDemo4() {
  function* generateDoubles(seed: number) {
    let i = seed;
    while (true) {
      yield i;
      i = 2 * i; // double it
    }
  }

  const iterator = generateDoubles(3);

  const stream$ = from(iterator).pipe(take(5));

  //  run(stream$);
})();

// From Map
(function fromDemo5() {
  const map = new Map([[1, 'Hi'], [2, 'Bye']]);

  const streamNew$ = scheduled(from(map), asyncScheduler); 

  // run(streamNew$);
  // addItem('Next line of code');
})();

export function runner() {}
