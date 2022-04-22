import { Observable, Subscription } from 'rxjs';
import { addItem } from './add-item';

export interface RunOptions {
  next?: string;
  error?: string;
  complete?: string;
  outputMethod?: 'console' | 'list'; // display in console or on the page
}

export function run(
  o: Observable<any>,
  options: RunOptions = {}
): Subscription {
  const defaultRunOptions: RunOptions = {
    next: 'Next: ',
    error: 'Error: ',
    complete: 'Complete!',
    outputMethod: 'list'
  };

  const settings = { ...defaultRunOptions, ...options };

  const observer = {
    next: (value: any) => {
      let outputValue: any = value;
      if (typeof value === 'object') {
        outputValue = JSON.stringify(value);
      }

      if (settings.outputMethod === 'console') {
        console.log(settings.next, value);
      } else if (settings.outputMethod === 'list') {
        addItem(`${settings.next} ${outputValue}`);
      }
    },
    error: error => {
      if (settings.outputMethod === 'console') {
        console.log(`${settings.error}${error}`);
      } else if (settings.outputMethod === 'list') {
        addItem(`${settings.error}${error}`);
      }
    },
    complete: () => {
      if (settings.outputMethod === 'console') {
        console.log(`${settings.complete}`);
      } else if (settings.outputMethod === 'list') {
        addItem(`${settings.complete}`);
      }
    }
  };

  return o.subscribe(observer);

  // or 3 callbacks: DEPRECATED!!!
  // return o.subscribe(
  //   value => console.log(settings.next, value),
  //   error => console.log(`${settings.error}${error}`),
  //   () => console.log(`${settings.complete}`)
  // );

  // or 1 callback
  // return o.subscribe(
  //   value => console.log(settings.next, value)
  // );
}
