// race<T>(
//  ...observables: any[]
// ): Observable<T>

import { timer, race, take, map} from 'rxjs';
import { addItem, run } from './../../03-utils';

(function raceDemo() {
  let dueTime = 100;
  const period = 100;
  const source1$ = timer(dueTime, period).pipe(
    map(() => 'First'),
    take(3)
  );

  dueTime = 0;
  const source2$ = timer(dueTime, period).pipe(
    map(() => 'Second'),
    take(3)
  );

  // subscribes to the observable that was the first to start emitting.
  const stream$ = race(source1$, source2$);

  // run(stream$);
})();

export function runner() {};
