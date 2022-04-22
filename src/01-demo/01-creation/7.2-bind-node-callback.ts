// bindNodeCallback(
//   callbackFunc: (args_0: any, args_1: (err: any, ...res: any) => void) => void, 
//   resultSelector: ((...args: any[]) => any) | ShedulerLike,
//   sheduler?: ShedulerLike
// ): (...args: any[]) => Observable<any>

import { bindNodeCallback, asyncScheduler, map } from 'rxjs';
import { addItem, run } from './../../03-utils';

(function bindNodeCallbackDemo1() {
  function doSomething(data: string, callback: (err: Error, arg: Array<string>) => void) {
   const words = data.split(' ');

   callback(null, words);
  }

  const boundFunc = bindNodeCallback(doSomething);
  
  const source$ = boundFunc('Some Data');
  // run(source$);
  // addItem('Line after subscribe');
})();

(function bindNodeCallbackDemo2() {
  function doSomething(data: string, callback: (err: Error, arg: Array<string>, l: number) => void) {
    const words = data.split(' ');
    
    callback(null, words, words.length);
  }
  
  const boundFunc = bindNodeCallback(doSomething);
  
  const source$ = boundFunc('Some Data');
  // run(source$);
  // addItem('Line after subscribe');
})();

(function bindNodeCallbackDemo3() {
  function doSomething(data: string, callback: (err: Error, arg: Array<string>, l: number) => number) {
   const words = data.split(' ');

   const err = new Error("Error");
   callback(err, null, null);
  }
  
  const boundFunc = bindNodeCallback(doSomething, null, asyncScheduler);
  
  const source$ = boundFunc('Some Data');
  // run(source$);
  // addItem('Line after subscribe');
})();


(function bindNodeCallbackDemo4() {
  function doSomething(data: string, callback: (err: Error, arg: Array<string>, l: number) => void) {
   const words = data.split(' ');

   callback(null, words, words.length);
  }
  
  const resultSelector = (value: any[]) => value[0]
  const boundFunc = bindNodeCallback(doSomething, resultSelector);
  
  // const source$ = boundFunc('Some Data');
  // run(source$);
})();

export function runner() {}