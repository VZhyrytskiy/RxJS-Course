// throttle<T>(
//      durationSelector: (value: T) => ObservableInput<any>, 
//      config: ThrottleConfig = defaultThrottleConfig //  Defaults to { leading: true, trailing: false }.
// ): MonoTypeOperatorFunction<T>

import { timer, interval, throttle, take, tap, map, ThrottleConfig } from 'rxjs';
import { addItem, run } from './../../03-utils';

(function throttleDemo1() {
  const source$ = timer(0, 100);

  const stream$ = source$.pipe(
    tap(valueFromSource => addItem(`source: ${valueFromSource}`, { color: '#ccc'})),
    throttle(() => {
      return interval(1000); // interval is a const = 1c
    }),
    take(10)
  );
  // run(stream$);
})();

(function throttleDemo2() {
  const source$ = timer(0, 100);

  const stream$ = source$.pipe(
    throttle(valueFromSource => {
      addItem(`throttle: value from source: ${valueFromSource}, delay ${valueFromSource * 100}`, { color: '#ccc'});
      return interval(valueFromSource * 100); // interval depends on value from source
    }),
    take(5)
  );
  // run(stream$);
})();

(function throttleDemo3() {
  const source$ = timer(0, 100).pipe(map(x => x + 1));

  const throttleConfig: ThrottleConfig = {leading: true, trailing: false};
  const stream$ = source$.pipe(
    tap(valueFromSource => addItem(`source: ${valueFromSource}`, { color: '#ccc'})),
    throttle(() => {
      return interval(1000); // interval is a const = 1c
    }, throttleConfig),
    take(10)
  );
  // run(stream$);
})();

export function runner() {};