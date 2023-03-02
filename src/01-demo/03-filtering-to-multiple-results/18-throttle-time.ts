// throttleTime<T>(
//      duration: number, 
//      scheduler: SchedulerLike = asyncSheduler, 
//      config: ThrottleConfig = defaultThrottleConfig
// ): MonoTypeOperatorFunction<T>

// { leading: true, trailing: false }

// source:               --0----1----2----3----4----5----6----7----8-- 
// throttle interval:    --[~~~~~~~~~~~~~~~~~]-[~~~~~~~~~~~~~~~~~]-[~~ 
// output:               --0-------------------4-------------------8--


// { leading: false, trailing: true }

// source:               --0----1----2----3----4----5----6----7----8-- 
// throttle interval:    --[~~~~~~~~~~~~~~~~~]-[~~~~~~~~~~~~~~~~~]-[~~ 
// output:               --------------------3-------------------7----


// { leading: true, trailing: true }

// source:               --0----1----2----3----4----5----6----7----8-- 
// throttle interval:    --[~~~~~~~~~~~~~~~~~]-[~~~~~~~~~~~~~~~~~]-[~~  
// output:               --0-----------------3-4-----------------7-8--


// { leading: false, trailing: false }

// source:               --0----1----2----3----4----5----6----7----8--
// throttle interval:    --[~~~~~~~~~~~~~~~~~]-[~~~~~~~~~~~~~~~~~]-[~~
// output:               ---------------------------------------------

import { fromEvent, timer, asyncScheduler, take, tap, map, throttleTime } from 'rxjs';
import { addItem, run } from './../../03-utils';

(function throttleTimeDemo1() {
  const source$ = fromEvent(document, 'pointermove').pipe(
    map(event => ({
      clientX: event['clientX'],
      clientY: event['clientY']
    }))
  );

  const stream$ = source$.pipe(
    tap(val => addItem(`value from source:, ${JSON.stringify(val)}`, { color: '#ccc'})),
    throttleTime(1000), // <-- emits first value, then the last value of each time frame
    take(5)
  );
  // run(stream$);
})();

(function throttleTimeDemo2() {
  const source$ = timer(0, 100).pipe(map(x => x + 1));

  const stream$ = source$.pipe(
    tap(valueFromSource => addItem(`source: ${valueFromSource}`, { color: '#ccc'})),
    throttleTime(1000, asyncScheduler, {leading: true, trailing: false}),
    take(10)
  );
  // run(stream$);
})();

export function runner() {};