// generate<T, S>(
//    options: GenerateOptions<T, S>
// ): Observable<T>

import { generate, asyncScheduler, scheduled } from 'rxjs';
import { addItem, run } from './../../03-utils';

(function generateDemo1() {
  const initialState = 1;
  const condition = (value: number) => value <= 10;
  const iterate = (value: number) => value + 1;

  const options = { initialState, condition, iterate };
  const source$ = generate(options);
  
  // run(source$);
})();

(function generateDemo2() {
  const initialState = 1;
  const condition = (value: number) => value <= 10;
  const iterate = (value: number) => value + 1;
  const resultSelector = (value: number) => value * value;
  const options = { initialState, condition, iterate, resultSelector };
  const source$ = generate(options);
  
  // run(source$);
})();

(function generateDemo4() {
  const handleProcess = {
    initialState: 1,
    condition: (value: number) => value <= 10,
    iterate: (value: number) => value + 1,
    resultSelector: (value: number) => value * value,
   };
  const stream$ = scheduled(generate(handleProcess), asyncScheduler);
  
  // run(stream$);
  // setTimeout(addItem, 0, 'Some Data 1')
  // addItem('Some Data 2');
})();

export function runner() {}