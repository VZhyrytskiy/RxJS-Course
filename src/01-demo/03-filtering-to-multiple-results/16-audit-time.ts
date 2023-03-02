// auditTime<T>(
//      duration: number, 
//      scheduler: SchedulerLike = asyncSheduler
// ): MonoTypeOperatorFunction<T>

import { fromEvent, take, tap, auditTime, map } from 'rxjs';
import { addItem, run } from './../../03-utils';

(function auditTimeDemo() {
  const source$ = fromEvent(document, 'pointermove').pipe(
    map(event => ({
      clientX: event['clientX'],
      clientY: event['clientY']
    }))
  );

  const stream$ = source$.pipe(
    auditTime(1000), // ignore mousemove event during 1000ms
    take(5)
  );
  // run(stream$);
})();

export function runner() {};