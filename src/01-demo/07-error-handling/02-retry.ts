// retry<T>(
//   configOrCount: number | RetryConfig = Infinity
// ): MonoTypeOperatorFunction<T>

// export interface RetryConfig {
//   count?: number;
//   delay?: number | ((error: any, retryCount: number) => ObservableInput<any>)
//   resetOnSuccess?: boolean;
// }

import { throwError, interval, of, concatMap, retry, take } from 'rxjs';
import { addItem, run } from './../../03-utils';

(function retryDemo1() {
  const stream$ = interval(1000).pipe(
    concatMap(val => {
      if (val > 3) {
        return throwError(() => 'Error >3!');
      }
      return of(val);
    }),
    // restarts stream two times
    retry(2)
  );

  // run(stream$);
})();

(function retryDemo2() {
  const stream$ = of(1, 2, 3, 4, 5).pipe(
    // take(5),
    concatMap(val => {
      if (Math.random() > 0.5) {
        addItem(`Elem: ${val}, Error: Math.random > 0.5`);
        return throwError(() => 'Error');
        
      }
      return of(val);
    }),
    // restarts stream two times
    // When set to `true` every successful emission will reset the error count
    // random allows you sometimes to see more than 3 re-subscription
    retry({ count: 1, resetOnSuccess: true })
  );

  // run(stream$);
})();

(function retryDemo3() {
  const stream$ = of(1, 2, 3, 4, 5).pipe(
    // take(5),
    concatMap(val => {
      if (Math.random() > 0.5) {
        addItem(`Elem: ${val}, Error: Math.random > 0.5. Retry`);
        return throwError(() => 'Error');
        
      }
      return of(val);
    }),
    // restarts stream two times
    // When set to `true` every successful emission will reset the error count
    // random allows you sometimes to see more than 3 re-subscription
    retry({ count: 1, delay: 3000 })
  );

  // run(stream$);
})();

export function runner() {};