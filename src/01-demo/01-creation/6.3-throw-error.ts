// throwError(
//   errorFactory: any,
//   scheduler?: SchedulerLike
// ): Observable<never>

import { throwError } from 'rxjs';
import { addItem, run } from './../../03-utils';

(function throwErrorDemo() {
  const stream$ = throwError(() => new Error(`This is an error!`));

  // run(stream$);
})();

export function runner() {}