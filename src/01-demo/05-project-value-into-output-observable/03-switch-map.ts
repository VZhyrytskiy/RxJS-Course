// switchMap<T, O extends ObservableInput<any>>(
//   project: (value: T, index: number) => O, 
// ): OperatorFunction<T, ObservedValueOf<O>>
import { fromEvent, interval, switchMap } from 'rxjs';
import { addItem, run } from './../../03-utils';

(function switchMapDemo() {
  const clicks$ = fromEvent(document, 'click');
  const stream$ = clicks$.pipe(
    switchMap(event => interval(1000))
  );

  // run(stream$);
})();

export function runner() {};
