import { run } from './../03-utils';
import { catchError, mergeMap, concatMap, delay, exhaustMap, switchMap, take } from 'rxjs/operators';
import { fromEvent, range, interval, of, from, Observable, NEVER, concat,  } from 'rxjs';
import { fromFetch } from 'rxjs/fetch';

// Task 1. concatMap()
// RU: Реализуйте функцию, которая создает Observable, который выдает числа в диапазоне от 1 до 10 
// через случайное количество времени в диапазоне от 1с до 5с
// Используйте функцию randomDelay(), of(), concatMap(), delay()
// Проведите эксперимент заменяя метод concatMap на mergeMap, switchMap, exhaustMap
// EN: Implement a function that creates an Observable that returns numbers between 1 and 10
// after a random amount of time in the range from 1s to 5s
// Use the function randomDelay(), of(), concatMap(), delay()
// Experiment by replacing the concatMap method with mergeMap, switchMap, exhaustMap
(function task1(): void {
    function randomDelay(min: number, max: number) {
        const pause = Math.floor( Math.random() * ( max - min ) ) + min;
        console.log(pause);
        return pause;
    }

    // const stream$ = 

    // run(stream$);
})();

// Task 2. mergeMap()
// RU: Испольуя функцию emulateHttpCall и массив идентификаторов ids
// организуйте получение объектов в параллель.
// EN: Using the emulateHttpCall function and an array of ids
// organize getting objects in parallel.
(function task2(): void {
    function emulateHttpCall(id: number): Observable<any> {
        switch (id) {
          case 1:
            return of({ id: 1, name: 'Anna' }).pipe(delay(4000)); // <-- emulation of http call, which returns Observable after 4s
          case 2:
            return of({ id: 2, name: 'Boris' }).pipe(delay(3000)); // <-- pause 3s
          case 3:
            return of({ id: 3, name: 'Clara' }).pipe(delay(2000)); // <-- pause 2s
        }
    }

    const ids = [1, 3, 2, 2, 3, 3, 1, 2, 3];

    // const stream$ = 
    
    // run(stream$);
})();


// Task 3. switchMap()
// RU: Создайте внешний поток, используя fromFetch('https://api.github.com/users?per_page=5')
// Создайте для результата внешнего потока внутренний поток response.json(), используя switchMap()
// Дополнительно фильтруйте элементы внешнего потока по условию response.ok === true
// EN: Create an outer stream using fromFetch('https://api.github.com/users?per_page=5')
// Create an inner stream response.json() for the result of the outer stream using switchMap()
// Additionally filter the elements of the outer stream by condition response.ok === true
(function task3(): void {
    // const stream$ = 

    // run(stream$);
})();

// Task 4. switchMap() Author: Dzmitry Skurat
// RU: Создайте поток по вводу количества записей на странице в текстовое поле.
// для запроса ajax(`https://api.github.com/users?per_page=${perPage}`)
// Чтобы не спамить сервер поставте задержку в 1000мс через debounceTime().
// С помощью distinctUntilChanged() исключите отправку двух повторных запросов на сервер.
// Выведите массив логинов.
// Операторы, которые могут понадобиться: switchMap(), debounceTime(), map().
// EN: Create a stream for entering number of records per page in a text field.
// for ajax request(`https://api.github.com/users?per_page=${perPage}`)
// In order not to spam the server, set a delay of 1000ms using debounceTime().
// Use distinctUntilChanged() to avoid sending two similar requests to the server.
// Output an array of logins.
// Operators that may be needed: switchMap(), debounceTime(), map().
(function task4(): void {
    // const stream$ = 

    // run(stream$);
})();

// Task 5. exhaustMap()
// RU: Создайте внешний поток из событий click по кнопке runBtn.
// Во время первого клика по кнопке создайте внутренний поток, используя interval(1000).
// Элементы внутреннего потока должны попасть в выходной поток. 
// Игнорируйте все последующие клики на кнопке.
// EN: Create an outer stream from click events on the button runBtn.
// During the first button click, create an inner stream using interval(1000).
// Elements of the inner stream must go to the output stream.
// Ignore all subsequent button clicks.
(function task5() {
    // const clicks$ = 
    // const stream$ = 

    // run(stream$);
})();

export function runner() {}