// defer<R extends ObservableInput<any>>(
//   observableFactory: () => R
// ): Observable<ObservableValueOf<R>>

import { of, defer } from 'rxjs';
import { addItem, run } from './../../03-utils';

(function deferDemo() {
  const source1$ = of( `${new Date().toString()} ${Math.random()}`);
  const source2$ = defer(() => of( `${new Date().toString()} ${Math.random()}`));
  
  // run(source1$);
  // run(source2$);

  // setTimeout(() => {
  //   run(source2$);
  // }, 5000);
})();

export function runner() {}