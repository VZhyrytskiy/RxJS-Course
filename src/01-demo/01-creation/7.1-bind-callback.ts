// bindCallback(
//   callbackFunc: (args_0: any, args_1: (...res: any) => void) => void, 
//   resultSelector?: ((...args: any[]) => any) | ShedulerLike,
//   sheduler?: ShedulerLike
// ): (...args: any[]) => Observable<unknown>

import { bindCallback, map, asyncScheduler } from 'rxjs';
import { addItem, run } from './../../03-utils';

(function bindCallbackDemo1() {
  function doSomething(data: string, callback: (arg: Array<string>) => void): void {
   const words = data.split(' ');

   callback(words);
  }

  const boundFunc = bindCallback(doSomething);
  
  const source$ = boundFunc('Some Data');
  // run(source$);
  // addItem('Line after subscribe');
})();

(function bindCallbackDemo2() {
  function doSomething(data: string, callback: (arg: Array<string>, l: number) => void): void {
    const words = data.split(' ');
    
    callback(words, words.length);
  }
  
  const boundFunc = bindCallback(doSomething);
  
  const source$ = boundFunc('Some Data');
  // run(source$);
  // addItem('Line after subscribe');
})();

(function bindCallbackDemo3() {
  function doSomething(data: string, callback: (arg: Array<string>, l: number) => number): void {
   const words = data.split(' ');

   callback(words, words.length);
  }
  
  const boundFunc = bindCallback(doSomething, null, asyncScheduler);
  
  const source$ = boundFunc('Some Data');
  // run(source$);
  // addItem('Line after subscribe');
})();


(function bindCallbackDemo4() {
  function doSomething(data: string, callback: (arg: Array<string>, l: number) => void): void {
   const words = data.split(' ');

   callback(words, words.length);
  }
  
  const resultSelector = (value: any[]) => value[0];
  const boundFunc = bindCallback(doSomething, resultSelector);
  
  // const source$ = boundFunc('Some Data');
  // run(source$);
})();

export function runner() {}