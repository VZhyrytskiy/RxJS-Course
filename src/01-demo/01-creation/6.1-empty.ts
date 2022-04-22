// const EMPTY: Observable<never>

import { EMPTY, startWith } from 'rxjs';
import { addItem, run } from './../../03-utils';

(function emptyDemo() {
  // const stream$ = EMPTY;
  // or
  // const stream$ = EMPTY.pipe(startWith(0));

  // run(stream$); // emit value and complete
})();

export function runner() {}