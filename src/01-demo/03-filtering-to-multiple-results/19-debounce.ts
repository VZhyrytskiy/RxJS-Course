// debounce<T>(
//      durationSelector: (value: T) => ObservableInput<any> 
// ): MonoTypeOperatorFunction<T>

import { fromEvent, interval, timer, debounce, map, tap, take } from 'rxjs';
import { addItem, run } from './../../03-utils';

(function debounceDemo() {
  const source$ = fromEvent(document, 'mousemove').pipe(map(event => ({
    clientX: event['clientX'],
    clientY: event['clientY']
  })));

  const stream$ = source$.pipe(
    tap(val => addItem(`value from source: ${JSON.stringify(val)}`, { color: '#ccc'})),
    debounce(val_from_source => {
      addItem(
        `value used to calculate next Observable: ${JSON.stringify(val_from_source)}`, {color: '#ccc'}
      );
      return interval(1000); // <-- period of silence in source observable
    }),
    take(5)
  );
  // run(stream$);
})();

export function runner() {};