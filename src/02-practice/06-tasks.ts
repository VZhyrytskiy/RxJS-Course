import { delay, switchMap, take, map, tap, takeLast, first, startWith, ignoreElements, endWith, scan, withLatestFrom, fromEvent, interval, of, concat, combineLatest, zip, merge, race, EMPTY, timer, forkJoin,  } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { addItem, run } from './../03-utils';

// Task 1. concat()
// RU: Пусть есть два потока of(1, 2, 3) и of(4, 5, 6);
// Необходимо объединить эти два потока и получить 1, 2, 3, 4, 5, 6 
// только в том случае, если элемент первого потока четный, 
// иначе получить только элементы первого потока
// Используйте: take, switchMap
// EN: Let there are two streams of(1, 2, 3) and of(4, 5, 6);
// We need to merge these two streams and get 1, 2, 3, 4, 5, 6
// only if the element of the first stream is even,
// otherwise get only the elements of the first stream
// Use: take, switchMap
(function task1(): void {
    const first$ = of(1, 2, 3);
    const second$ = of(4, 5, 6);
    // const stream$ = 

    // run(stream$);
})();

// Task 2 merge()
// RU: Создайте три потока, которые выдают числа: первый - 1,2,3, второй - 4,5,6, третий - 7,8,9
// через случайное время в диапазоне от 2с до 5с. Используйте функцию randomDelay и оператор delay
// Объедините эти потоки используя merge() и получите три элемента потока, которые придут последними
// Используйте: takeLast
// EN: Create three streams that emit numbers: the first - 1,2,3, the second - 4,5,6, the third - 7,8,9
// after a random time in the range from 2s to 5s. Use the randomDelay function and the delay operator
// Merge these streams using merge() and get the last three elements of the stream
// Use: takeLast
(function task2(): void {
    function randomDelay(min: number, max: number) {
        const pause = Math.floor( Math.random() * ( max - min ) ) + min;
        console.log(pause);
        return pause;
    }

//    const stream$ = 
    
    // run(stream$);
})();


// Task 3. merge()
// RU: Создайте первый поток, который выдает каждую секунду числа от 1 до 5.
// Создайте второй поток, который выдает каждую секунду числа 100, 103, 106, 109, 112
// Создайте результирующий поток, объединив эти два потока, но второй поток
// должен начать выдавать значения только после того, как появится первое число в первом потоке
// Используйте: map, first, switchMap, take
// EN: Create the first stream that emits numbers from 1 to 5 every second.
// Create a second stream that emits the numbers 100, 103, 106, 109, 112 every second
// Create the resulting stream by combining these two streams, but the second stream
// should start emitting values only after the first number appears in the first stream
// Use: map, first, switchMap, take
(function task3(): void {
    // const stream$ = 

    // run(stream$);
})();

// Task 4. race()
// RU: Создать поток, который возвращает данные запроса ajax('http://jsonplaceholder.typicode.com/users')
// через 5с. 
// Создать поток, который возвращает поток события клик по кнопке. 
// Преобразовать этот поток к одному элементу - строке 'Request is canceled' 
// Объедините эти потоки используя race.
// Используейте: delay, map, take
// EN: Create a stream that returns request data ajax('http://jsonplaceholder.typicode.com/users')
// after 5s.
// Create a stream that emits a button click event.
// Convert this stream to one element - the string 'Request is canceled'
// Merge these stream using race.
// Use: delay, map, take
(function task4() {
    // const stream$ = 

    // run(stream$);
})();

// Task 5. startWith()
// RU: Создайте поток, который выдает объекты события клик по кнопке. Каждый клик должен перезапускать поток,
// который выдает числа с периодом в 1с, используя timer.
// Добавьте startWith чтобы запустить выдачу чисел до первого клика на кнопке.
// Используйте: switchMap, fromEvent
// EN: Create a stream that emits button click event objects. Each click should restart the stream,
// which produces numbers with a period of 1s using timer.
// Add startWith to start outputting numbers before the first click on the button appears.
// Use: switchMap, fromEvent
(function task5() {
    // const stream$ = 

    // run(stream$);
})();


// Task 6. endWith()
// RU: Создайте поток событий клик по кнопке. После третьего клика необходимо добавить 
// в поток 'Finish after 3 clicks' и завершить поток. 
// При этом не нужно выводить в поток события клика. 
// Используйте: take, ignoreElements
// EN: Create a stream that emits button click event objects. After the third click, add
// string 'Finish after 3 clicks' to the stream and complete the stream.
// In this case, it is not necessary to output click events to the stream.
// Use: take, ignoreElements
(function task6() {
    // const stream$ = 

    // run(stream$);
})();

// Task7. zip(), combinaLatest(), withLatestFrom(), forkJoin()
// 1. 
// RU: Создайте поток nextColor$ событий click по кнопке btnNextColor, используя fromEvent. 
// При каждом клике поток должен выдавать значение из массива colors. 
// После выдачи всех элементов из массива colors поток должен завершиться.
// Создайте поток nextText$ событий click по кнопке btnNextText. При каждом клике поток должен выдавать
// значение из массива text. После выдачи всех элементов из массива text поток должен завершиться.
// Используйте: scan, map, take. 
// Запустите потоки, используя функцию run. 
// Для первого потока задайте конфиг объект для функции {next: 'Next color: '}
// Для второго потока задайте конфиг объект для функции {next: 'Next text: '}
// Покликайте на кнопки и понаблюдайте за значениями. 
// EN: Create a nextColor$ stream of click events on the btnNextColor button using fromEvent.
// On each click, the stream should emit the value from the colors array.
// After all the elements from the colors array have been emited, the stream should complete.
// Create a nextText$ stream of click events on the btnNextText button. On each click, the stream should emit
// value from text array. After all the elements in the text array have been emited, the stream should complete.
// Use: scan, map, take.
// Start streams using the run function.
// For the first stream, set the config object for the function {next: 'Next color: '}
// For the second stream, set the config object for the function {next: 'Next text: '}
// Click on the buttons and watch the values.

// 2.
// RU: Используйте zip и объедините элементы потоков. 
// Выводите с помощью оператора tap и функции addItem текст текущим цветом
// Подпишитесь на поток, используя subscribe без параметров.
// Понаблюдайте за результатом.
// EN: Use zip and combine stream elements.
// Use the tap operator and the addItem function to display the text in the current color
// Subscribe to the stream using subscribe with no parameters.
// Watch the result.

// 3.
// RU: Используйте combineLatest и объедините элементы потоков. 
// Выводите с помощью оператора tap и функции addItem текст текущим цветом
// Подпишитесь на поток, используя subscribe без параметров.
// Понаблюдайте за результатом.
// EN: Use combineLatest and combine stream elements.
// Use the tap operator and the addItem function to display the text in the current color
// Subscribe to the stream using subscribe with no parameters.
// Watch the result.

// 4.
// RU: Используйте withLatestFrom и объедините элементы потоков.
// withLatestFrom используйте как оператор преобразования потока.
// Выводите с помощью оператора tap и функции addItem текст текущим цветом
// Подпишитесь на поток, используя subscribe без параметров.
// Понаблюдайте за результатом.
// EN: Use withLatestFrom and combine stream elements.
// use withLatestFrom as a stream transformation operator.
// Use the tap operator and the addItem function to display the text in the current color
// Subscribe to the stream using subscribe with no parameters.
// Watch the result.

// 5. 
// RU: Используйте forkJoin и объедините элементы потоков.
// Выводите с помощью оператора tap и функции addItem текст текущим цветом
// Подпишитесь на поток, используя subscribe без параметров.
// Понаблюдайте за результатом. Сделайте первый поток бесконечным. Понаблюдайте за результатом. 
// EN: Use forkJoin and join stream elements.
// Use the tap operator and the addItem function to display the text in the current color
// Subscribe to the stream using subscribe with no parameters.
// Watch the result. Make the first thread infinite. Watch the result.

(function task7() {
    const colors = ['brown', 'red', 'maroon', 'olive', 'blue', 'lime'];
    const text = ['I am the best', 'I know RxJS', 'I love TypeScript', 'JavaScript Guru', 'Angular Lover'];
})();

export function runner() {}