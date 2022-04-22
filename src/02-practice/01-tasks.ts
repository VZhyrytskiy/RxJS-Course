import { Observable, of, from,  map, take, tap, switchMap, filter, reduce, catchError, delay, concatMap, withLatestFrom, fromEvent, generate, pairs, EMPTY, concat, timer, zip, range, bindCallback, bindNodeCallback, fromEventPattern, interval, NEVER, throwError, defer } from "rxjs";
import { fromFetch } from "rxjs/fetch";
import { ajax } from "rxjs/ajax";
import { addItem, run } from './../03-utils';

// Task 1. of()
// RU:
// Реализуйте тело функции, которая принимает переменное количество параметров 
// и создает Observable, который выдает значения ее аргументов
// EN: 
// Implement the body of a function that takes a variable number of parameters
// and creates an Observable that emits the values of its arguments
(function task1(...rest: any[]): void {
    // const stream$ = 

    // run(stream$);
})(1, 'string', true, {});

// Task 2 from()
// RU: 
// Реализуйте тело функции, которая принимает на вход массив и создает Observable,
// который выдает значения этого массива
// EN: 
// Implement the body of a function that takes an array as input and creates an Observable,
// which emits the values of this array
(function task2(arr: any[]): void {
    // const stream$ = 
    
    // run(stream$);
})([1, 'string', true, {}]);


// Task 3. from()
// RU: 
// Реализуйте тело функции, которая создает Observable, который выдает случайные числа в дианазоне от min до max
// используя генератор. Верните 10 чисел, используя take()
// EN:
// Implement the body of a function that creates an Observable that emits
// random numbers in range from min to max using a generator. 
// Return 10 numbers using take()
(function task3() {
    function* generator(min, max){
        while (true) {
          yield Math.floor( Math.random() * ( max - min ) ) + min;
        }
      }
      
    // const stream$ = 
    
    // run(stream$);
})();

// Task 4. from(Object.entries(obj))
// RU:
// Реализуйте функцию, которая создает Observable.
// Пусть есть поток objAddressStream, который выдает объект и второй поток fieldsStream, который содержит перечень ключей объекта
// Необходимо модифицировать первый поток так, чтобы он выдавал объект только с данными ключей из 
// второго потока. 
// Используйте switchMap(), reduce(), filter(), withLatestFrom()
// EN:
// Implement the function that creates the Observable.
// Let there be a stream objAddressStream that emits an object and a second stream fieldsStream that contains a list of object keys
// It is necessary to modify the first stream so that it emits an object only with the key data from
// second stream.
// Use operators: switchMap(), reduce(), filter(), withLatestFrom()
(function task4() {
    const objAddressStream = of({
        country: 'Ukraine',
        city: 'Kyiv',
        index: '02130',
        street: 'Volodymyra Velikogo',
        build: 100,
        flat: 23
    });

    const  fieldsStream = from(['country', 'street', 'flat']);

    // const stream$ = 
    
    // run(stream$); 
})();

// Task 5. fromEvent()
// RU: 
// Реализуйте тело функции, которая принимает 
// id кнопки и создает Observable, который выдает значения времени клика по кнопке
// EN:
// Implement the body of a function that takes id of the button and 
// creates an Observable that emits the values of the click time on the button
(function task5(buttonId: string): void {
    // const stream$ = 
    
    // run(stream$);
})('runBtn');

// Task 6. fromEventPattern()
// RU:
// Реализуйте функцию, которая создаст Observable, который выдает значения,
// передаваемые вызову методу emit();
// EN:
// Implement a function that will create an Observable that emits values
// passed to the call of the emit() method;
(function task6() {
    class С1 {
        private listeners: Function[] = [];

        registerListener(listener: Function) {
            this.listeners.push(listener);
        }

        emit(value: any) {
            this.listeners.forEach(listener => listener(value));
        }
    }

    const foo = new С1();

    // const stream$ = 

    // run(stream$);

    foo.emit(1);
    foo.emit(2);
    foo.emit(3);
})();



// Task 7. fromFetch()
// RU:
// Реализуйте функцию, которая создает Observable, который выдает имена пользователей. 
// Используйте операторы: fromFetch('http://jsonplaceholder.typicode.com/users'), filter(), switchMap(), map()
// EN:
// Implement a function that creates an Observable that emits usernames.
// Use operators: fromFetch('http://jsonplaceholder.typicode.com/users'), filter(), switchMap(), map()
(function task7() {
    // const stream$ = 

    // run(stream$);
})();

// Task 8. ajax() // Author: Artem Onopriienko
// RU: 
// Получить пользователей, сформировать объекты { name: ..., email: ...} и отсортировать их по массиву из 2 полей
// const fields$ = from(['name', 'email']);
// Используйте операторы: ajax('http://jsonplaceholder.typicode.com/users'), switchMap(), map(), withLatestFrom()
// EN:
// Get the users and generate objects {name: ..., email: ...} and sort them by an array of 2 fields
// const fields$ = from(['name', 'email']);
// Use operators: ajax('http://jsonplaceholder.typicode.com/users'), switchMap(), map(), withLatestFrom()
(function task8() {
    // const stream$ =

    // run(stream$);
})();

// Task 9. interval()
// RU:
// Реализуйте функцию, которая создает Observable, который запрашивает и выдает имена пользователей каждые 5с 
// Используйте операторы: ajax('http://jsonplaceholder.typicode.com/users'), switchMap(), map()
// EN: 
// Implement a function that creates an Observable that requests and returns usernames every 5s
// Use operators: ajax ('http://jsonplaceholder.typicode.com/users'), switchMap(), map()
(function task9() {
    // const stream$ = 

    // run(stream$);
})();

// Task 10. from(), timer(), zip()
// RU:
// Реализуйте функцию, которая создает Observable, который выдает элементы массива каждые 2с 
// Создайте поток на основе массива items, используя from()
// Создайте поток, который будет выдавать значение каждые 2с, используя timer()
// Объедините эти потоки, используя zip
// EN:
// Implement a function that creates an Observable that emits array elements every 2s
// Create a stream based on the items array using from()
// Create a stream that will emit a value every 2s using timer()
// Combine these streams using zip
(function task10() {
    const items = [1, 2, 3, 4, 5];
    // const stream$ = 
    
    // run(stream$);
})();

// Task 11. range()
// RU:
// Реализуйте функцию, которая создает Observable, который выдает числа в диапазоне от 1 до 10 
// через случайное количество времени в диапазоне от 1с до 5с
// Используйте функции и операторы randomDelay(), of(), concatMap(), delay()
// EN: 
// Implement a function that creates an Observable that emits numbers from 1 to 10
// after a random amount of time in the range from 1s to 5s
// Use the function and operators: randomDelay(), of(), concatMap(), delay()
(function task11() {
    function randomDelay(min: number, max: number) {
        const pause = Math.floor( Math.random() * ( max - min ) ) + min;
        console.log(pause);
        return pause;
    }

    // const stream$ = 

    // run(stream$);
})();

// Task 12. generate()
// RU:
// Реализуйте функцию, которая создает Observable, который будет выдавать в поток значения, 
// хранящихся в свойстве sequence экземпляра класса С
// EN:
// Implement a function that creates an Observable that emits the values
// stored in the sequence property of instance of the C class
(function task12() {
    class C<T> {
        private sequence: T[] = [];

        get size(): number {
            return this.sequence.length;
        }

        add(elem: T) {
            this.sequence.push(elem);
            return this;
        }

        get(index: number): T {
            return this.sequence[index];
        }
    }

    const sequence = new C<number>().add(1).add(10).add(1000).add(10000);

    // const stream$ = 

    // run(stream$);
})();


// Task 13. EMPTY
// RU: 
// Реализуйте функцию, которая создает Observable.
// Оъявите пустой поток, который завершится через 2с, используйте оператор delay
// Создайте поток, который будет выдавать значения массива items, через каждые 2с.
// Используейте EMPTY, delay(), from(), concatMap(), concat()
// EN:
// Implement the function that creates the Observable.
// Declare an empty stream that will finish in 2s, use the delay operator
// Create a stream that will return the values of the items array every 2s.
// Use EMPTY, delay(), from(), concatMap(), concat()
(function task13() {
    const items = [1, 2, 3, 4, 5];

    // const stream$ = 

    // run(stream$);
})();


// Task 14. NEVER
// RU:
// Реализуйте функцию, которая создает бесконечный Observable из массива значений
// Используейте NEVER, concat, from
// EN: 
// Implement a function that creates an infinite Observable from an array of values
// Use NEVER, concat(), from()
(function task14() {
    const items = [1, 2, 3, 4, 5];

    // const stream$ = 

    // run(stream$);
})();

// Task 15. throwError()
// RU:
// Реализуйте функцию, которая создаст Observable, который завершится с ошибкой, если в массиве встретится число 3.
// Используейте from, switchMap, of, throwError
// EN:
// Implement a function that will create an Observable that will emit error notification if the number 3 is encountered in the array.
// Use from(), switchMap(), of(), throwError()
(function task15() {
    const items = [1, 2, 3, 4, 5];

    // const stream$ = 

    // run(stream$);
})();

// Task 16. bindCallback()
// RU: 
// Пусть есть некоторая функция doAsyncJob, которая выполняет асинхронную операцию и вызывает колбек, 
// когда эта операция завершается.
// Используя bindCallback, создайте функцию reactiveDoAsyncJob, вызовов которой создаст поток с передаваемым ей значением.
// EN:
// Let's have some doAsyncJob function that performs an asynchronous operation and calls a callback,
// when this operation completes.
// Using bindCallback, create a reactiveDoAsyncJob function that will be called and creates the stream 
// with the value passed to it.
(function task16() {
    function doAsyncJob(data: any, callback: (data: any) => void) {
        // imitation of some request 
        setTimeout(() => {
            callback(data)
        }, 3000);
    }

    

    // const stream$ = reactiveDoAsyncJob({ name: 'Anna' });

    // run(stream$);
})();

// Task 17. bindNodeCallback()
// RU:
// Пусть есть некоторая функция doAsyncJob, которая выполняет асинхронную операцию и вызывает колбек в "формате ноды", 
// когда эта операция завершается.
// Используя bindNodeCallback, создайте функцию reactiveDoAsyncJob, вызовов которой создаст поток,
// который завершится ошибкой.
// EN: 
// Let's have some function doAsyncJob that performs an asynchronous operation and calls a callback in the "node style",
// when this operation completes.
// Using bindNodeCallback, create a reactiveDoAsyncJob function that creates the stream which emits an error notification.
(function task17() {
    function doAsyncJob(data: any, callback: (error: any, data: any) => void) {
        // imitation of some request 
        setTimeout(() => {
            callback('Error', data)
        }, 3000);
    }


    // const stream$ = reactiveDoAsyncJob({ name: 'Anna' });

    // run(stream$);
})();

// Task 18. defer()
// RU: 
// Пусть есть некоторая функция getUsers(), которая возвращает коллекцию пользователей с помощью fetch()
// Создать Observable, в котром запуск функции getUsers() произойдет в момент подписки на поток
// Используйте defer, switchMap
// EN:
// Let's have some getUsers() function that returns a collection of users using fetch()
// Create an Observable, in which the getUsers() function will be called at the time of subscribing to the stream
// Use defer(), switchMap()
(function task18() {
    function getUsers(): Promise<any> {
        addItem("fetching data");
        return fetch(`http://jsonplaceholder.typicode.com/users`);
    }

    // getUsers().then(data => data.json()).then(addItem);


    // const stream$ = 

    // addItem("I don't want that request now");
    // run(stream$);
})();


export function runner() {}