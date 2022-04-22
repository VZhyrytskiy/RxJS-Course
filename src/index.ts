console.log(`Hi, Rxjs`);

import { ajax, bindCallback, bindNodeCallback, constructor, defer, empty, from, fromEvent, fromEventPattern, fromFetch, generate, interval, never, of, range, throwError, timer } from './01-demo/01-creation'
import { first, last, elementAt, min, max, find, findIndex, single, ignoreElements } from './01-demo/02-filtering-to-one-result';
import { audit, auditTime, debounce, debounceTime, distinct, distinctUntilChanged, distinctUntilKeyChanged, filter, sample, sampleTime, skip, skipLast, skipUntil, skipWhile, take, takeLast, takeUntil, takeWhile, throttle, throttleTime } from './01-demo/03-filtering-to-multiple-results';
import { buffer, bufferCount, bufferTime, bufferToggle, bufferWhen, pairwise, window, windowCount, windowTime, windowToggle, windowWhen } from './01-demo/04-buffering';
import { concatMap, exhaustMap, mergeMap, switchMap } from './01-demo/05-project-value-into-output-observable';
import { concat, endWith, merge, race, startWith } from './01-demo/06.1-combining-observables';
import { combineLatest, combineLatestWith, forkJoin, withLatestFrom, zip, zipWith } from './01-demo/06.2-combining-values';
import { catchError, onErrorResumeNext, retry, throwIfEmpty, timeout } from './01-demo/07-error-handling';
import { task1, task2, task3, task4, task5, task6, task7 } from './02-practice';

// ***********************************************
// *                        01-Observable Creation
// ***********************************************
constructor(); of(); from(); fromEvent(); fromEventPattern(); fromFetch(); ajax(); interval(); timer(); range(); generate(); empty(); never(); throwError(); bindCallback(); bindNodeCallback(); defer();

// ***********************************************
// *                    02-Filtering to One Result
// ***********************************************
first(); last(); elementAt(); min(); max(); find(); findIndex(); single(); ignoreElements();

// ***********************************************
// *              03-Filtering to Multiple Results
// ***********************************************
audit(); auditTime(); debounce(); debounceTime(); distinct(); distinctUntilChanged(); distinctUntilKeyChanged(); filter(); sample(); sampleTime(); skip(); skipLast(); skipUntil(); skipWhile(); take(); takeLast(); takeUntil(); takeWhile(); throttle(); throttleTime();

// ***********************************************
// *                    04-Buffering and Windowing
// ***********************************************
buffer(); bufferCount(); bufferTime(); bufferToggle(); bufferWhen(); pairwise(); window(); windowCount(); windowTime(); windowToggle(); windowWhen(); bufferCount(); bufferTime(); bufferToggle(); bufferWhen(); pairwise(); window(); windowCount(); windowTime(); windowToggle(); windowWhen();

// ***********************************************
// *       05-Project Value Into Output Observable
// ***********************************************
concatMap(); exhaustMap(); mergeMap(); switchMap();

// ***********************************************
// *                    06.1-Combining Observables
// ***********************************************
concat(); endWith(); merge(); race(); startWith();

// ***********************************************
// *                         06.2-Combining Values
// ***********************************************
combineLatest(); combineLatestWith(); forkJoin(); withLatestFrom(); zip(); zipWith();

// ***********************************************
// *                             07-Error Handling
// ***********************************************
catchError(); onErrorResumeNext(); retry(); throwIfEmpty(); timeout();

// ***********************************************
// *                                      Practice
// ***********************************************
task1(); task2(); task3(); task4(); task5(); task6(); task7();