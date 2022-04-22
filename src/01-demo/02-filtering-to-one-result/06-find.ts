// find<T>(
//     predicate: (value: T, index: number, source: Observable<T>) => boolean, 
//     thisArg?: any
// ): OperatorFunction<T, T | undefined>

import { from, of, find, map } from 'rxjs';
import { addItem, run } from './../../03-utils';

// find searches for the first item in the source Observable
// that matches the specified condition
(function findDemo1() {
  const source$ = of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
  const stream$ = source$.pipe(find(x => x > 4 && x % 2 === 0));

  // run(stream$); // 6
})();

// emit undefined if nothing matches the condition
(function findDemo2() {
  const source$ = of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
  const stream$ = source$.pipe(find(x => x > 40));

  // run(stream$); // undefined
})();

// find + object (Maksym Koval1)
// There is an observable of users who want to register for Vitaly's webinar,
// however, the number of places is limited. Only 1 senior level person can enter the webinar.
// View all requests and after the first senior developer meets -
// close registration for the webinar (observable) and display its name
(function findDemo3() {
  const searchTitle = 'Senior';
  const candidates$ = from([
      {
          title: 'Junior',
          name: 'Andrii',
      },
      {
          title: 'Junior',
          name: 'Anna',
      },
      {
          title: 'Senior',
          name: 'Gorge',
      },
      {
          title: 'Middle',
          name: 'Greg',
      },
  ]);
    
    
  const stream$ = candidates$.pipe(
      find(({ title }) => title === searchTitle),
      map(o => o.name)
  );
    
  // run(stream$);
})();

export function runner() {}