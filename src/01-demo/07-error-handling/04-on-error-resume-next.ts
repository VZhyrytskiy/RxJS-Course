// onErrorResumeNext<T, A extends readonly unknown[]>(
//   ...sources: any[] | [any[]]
// ): OperatorFunction<T, T | A[number]>

import { of, throwError, catchError, map, onErrorResumeNext } from 'rxjs';
import { addItem, run } from './../../03-utils';

// There is an error in the stream
(function onErroResumeNextDemo1() { 
  const source$ = of(1, 2, 3).pipe(
    map(x => {
      if (x === 2) {
        throw new Error("error - but we'll never see it");
      }
      return x;
    }),
  );
  const backup1$ = of(11, 12, 13);
  const backup2$ = of(21, 22, 23);

  const stream$ =  onErrorResumeNext(source$, backup1$, backup2$)
  
  // run(stream$);
})();

// The is no errors in the stream
(function onErroResumeNextDemo2() {
  const source$ = of(1, 2, 3);
  const backup1$ = of(11, 12, 13);
  const backup2$ = of(21, 22, 23);

  const stream$ = onErrorResumeNext(source$, backup1$, backup2$);

  // run(stream$);
})();


// There are two errors: in the first and in the second stream
(function onErroResumeNextDemo3() {
  const source$ = of(1, 2, 3).pipe(
    map(x => {
      if (x === 2) {
        throw new Error("error - but we'll never see it");
      }
      return x;
    }),
  );

  const backup1$ = of(11, 12, 13).pipe(map(x => {
    if (x === 13) {
      throw new Error("error - but we'll never see it");
    }
    return x;
  }));
  
  const backup2$ = of(21, 22, 23);

  
  
  const stream$ = onErrorResumeNext(source$, backup1$, backup2$)

  // run(stream$);
})();

(function onErroResumeNextDemo4() { 
  const source$ = of(1, 2, 3).pipe(
    map(x => {
      if (x === 2) {
        throw new Error("error - but we'll never see it");
      }
      return x;
    }),
    // additional logic in case of error
    catchError(err => {
      addItem(err);
      return throwError(() => new Error(`This is an error!`))
    })
  );
  const backup1$ = of(11, 12, 13);
  const backup2$ = of(21, 22, 23);


  const stream$ = onErrorResumeNext(source$, backup1$, backup2$)

  // run(stream$);
})();

export function runner() {};
