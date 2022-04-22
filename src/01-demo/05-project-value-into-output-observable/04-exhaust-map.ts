// exhaustMap<T, O extends ObservableInput<any>>(
//   project: (value: T, index: number) => O, 
// ): OperatorFunction<T, ObservedValueOf<O>>
import { fromEvent, interval, exhaustMap, take } from 'rxjs';
import { addItem, run } from './../../03-utils';

// Use Case: Ignore source stream until nested stream emits
(function exhaustMapDemo() {
  const runBtn = document.getElementById('runBtn');

  const clicks$ = fromEvent(runBtn, 'click');
  const stream$ = clicks$.pipe(
      exhaustMap(event => interval(2000).pipe(take(5)))
  );

  // run(stream$);
})();

export function runner() {};


