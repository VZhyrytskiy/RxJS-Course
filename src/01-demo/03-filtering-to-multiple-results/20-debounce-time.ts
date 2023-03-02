// debounceTime<T>(
//      dueTime: number, 
//      scheduler: SchedulerLike = asyncScheduler
// ): MonoTypeOperatorFunction<T>

import { fromEvent, debounceTime, map, tap, take } from 'rxjs';
import { addItem, run } from './../../03-utils';

(function debounceTimeDemo() {
  const source$ = fromEvent(document, 'pointermove').pipe(
    map(event => ({
      clientX: event['clientX'],
      clientY: event['clientY']
    }))
  );

  const stream$ = source$.pipe(
    tap(val => addItem(`value from source: ${JSON.stringify(val)}`, { color: '#ccc'})),
    debounceTime(1000), // <-- period of silence in source observable
    take(5)
  );
  // run(stream$);
})();

export function runner() {};