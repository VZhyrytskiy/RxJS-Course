// fromEvent<T>(
//   target: FromEventTarget<T>, 
//   eventName: string, 
//   options?: EventListenerOptions | ((...args: any[]) => T), 
//   resultSelector?: (...args: any[]) =>  T
// ): Observable<T>

// target:
// DOM EventTarget - an object with addEventListener and removeEventListener methods.
// Node.js EventEmitter - An object with addListener and removeListener methods.
// JQuery-style event target - An object with on and off methods
// DOM NodeList - List of DOM Nodes, returned for example by document.querySelectorAll or Node.childNodes.
// HTMLCollection.

// interface EventListenerOptions {
//   capture?: boolean;
//   passive?: boolean;
//   once?: boolean;
// }


import { fromEvent, map } from 'rxjs';
import { addItem, run } from './../../03-utils';

// fromEvent
(function fromEventDemo1() {
  const target = document.body;
  const eventName = 'mousemove';
  const stream$ = fromEvent(target, eventName);

  // run(stream$, {outputMethod: 'console'});
})();

// fromEvent + resultSelector
(function fromEventDemo2() {
  const target = document;
  const eventName = 'click';
  const resultSelector = (event: MouseEvent) => event.clientX; // transform original event object to value of clientX property
  const stream$ = fromEvent(target, eventName, resultSelector);
  // or
  // const stream$ = fromEvent(target, eventName).pipe(map(resultSelector));
  
  // run(stream$, { outputMethod: 'console'});
})();

// fromEvent + options object
(function fromEventDemo3() {
  const target1 = document;
  const target2 = document.body;
  const eventName = 'click';
  
  const resultSelector = (event: MouseEvent) => event.clientX; // X

  const stream$1 = fromEvent(target1, eventName, { capture: true }, resultSelector); 
  const stream$2 = fromEvent(target2, eventName).pipe(map((event: MouseEvent) => event.clientY));

  // run(stream$1);
  // run(stream$2);
})();

export function runner() {}
