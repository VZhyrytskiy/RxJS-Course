import { Observable, Observer } from 'rxjs';

(function observableConstructorDemo() {
  // This is only definition of the stream
  const stream$: Observable<any> = new Observable((observer: Observer<any>) => {
    console.log('Custom observable, created using constructor');

    observer.next('value 1');
    observer.next('value 2');
    observer.complete();
  });

  const observer: Observer<any> = {
    next(value: any) {
      console.log(`Next:`, value);
    },
    error(err) {
      console.log(`Error: ${err}`);
    },
    complete() {
      console.log(`Complete!`);
    }
  };

  // 1-st subscriber run the stream
  // const sub = stream$.subscribe(observer);
})();

export function runner() {}
