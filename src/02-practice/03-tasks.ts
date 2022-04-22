import { addItem, run } from './../03-utils';
import { from, fromEvent, fromEventPattern, generate, interval, of, range, timer, first, last, elementAt, min, max, find, findIndex, single, filter, sample, tap, sampleTime, map, audit, auditTime, throttle, throttleTime, debounce, debounceTime, skip, skipLast, skipUntil, skipWhile, take, takeLast, takeUntil, startWith, takeWhile, distinct, reduce, distinctUntilChanged, distinctUntilKeyChanged, switchMap, withLatestFrom } from 'rxjs';
import { ajax } from 'rxjs/ajax';

// Task 1. skip()
// RU: Создайте поток из массива чисел от 1 до 10, используя range()
// Получите элементы потока начиная с 3.
// EN: Create a stream from an array of numbers from 1 to 10 using range()
// Get stream elements starting at 3.
(function task1(): void {
    // const stream$ = 

    // run(stream$);
})();

// Task 2. skipLast()
// RU: Создайте поток из массива [1, 2, {}], используя from()
// Получите элементы потока без последнего элемента
// EN: Create a stream from the array [1, 2, {}] using from()
// Get the elements of the stream without the last element
(function task2(): void {
    // const stream$ = 
    
    // run(stream$);
})();


// Task 3. skipUntil()
// RU: Создайте поток чисел, который выдает их каждую 1с, используя interval().
// Выведите эти числа серым цветом, использыя tap(), addItem(value, {color: '#ccc'})
// Создайте поток собития клик по кнопке runBtn
// Игнорируйте элементы первого потока до клика на кнопке
// EN: Create a stream of numbers that produces them every 1s using interval().
// Print these numbers in gray using tap(), addItem(value, {color: '#ccc'})
// Create a stream of button runBtn click events
// Ignore the elements of the first stream until the button is clicked
(function task3(): void {
    // const stream$ = 

    // run(stream$);
})();

// Task 4. skipWhile()
// RU: Создайте поток чисел, который выдает их каждую 500мс, используя timer().
// Выведите эти числа серым цветом, использыя tap(), addItem(value, {color: '#ccc'})
// Игнорируйте элементы потока, пока они меньше 10, 
// получите 5 элементов и завершите поток, используя take()
// EN: Create a stream of numbers that emits them every 500ms using timer().
// Print these numbers in gray using tap(), addItem(value, {color: '#ccc'})
// Ignore the elements of the stream as long as they are less than 10, 
// get 5 elements and complete the stream using take()
(function task4() {
    // const stream$ = 

    // run(stream$);
})();


// Task 5. take()
// RU: Создайте поток собития клик по кнопке runBtn, используя fromEvent()
// Получите метку времени трех кликов, используя map() и завершите поток. 
// EN: Create a stream of button runBtn click events using fromEvent()
// Get the timestamp of the three clicks using map() and complete the stream.
(function task5() {
    // const stream$ = 

    // run(stream$);
})();

// Task 6. takeLast()
// RU: Создайте поток из слов 'Ignore', 'Ignore', 'Hello', 'World!', используя of().
// Модифицируйте поток так, чтобы получить последние два слова в потоке.
// Соберите из них предложение, используя reduce()
// EN: Create a stream from the words 'Ignore', 'Ignore', 'Hello', 'World!' using of().
// Modify the stream to get the last two words in the stream.
// Collect them into a sentence using reduce()
(function task6() {
    // const stream$ = 

    // run(stream$);
})();

// Task7. takeUntil()
// RU: Создайте поток, который будет выполнять запрос каждую 1с в течении 5с, используя timer()
// и ajax(`https://api.github.com/users?per_page=5`); 
// Время остановки должно формироваться с помощью потока, созданого с помощью timer()
// Добавьте в поток ответ запроса, используя map(). 
// Используйте оператор switchMap()
// EN: Create a stream that will execute a request every 1s for 5s using timer()
// and ajax(`https://api.github.com/users?per_page=5`); 
// The stop time must be formed using the stream, created with timer()
// Add the request response to the stream using map().
// Use the switchMap() operator
(function task7() {
    // const stream$ = 

    // run(stream$);
})();

// Task 8.1. takeWhile()
// RU: Создайте поток случайных чисел в диапазоне от 0 до 1, используя Math.random, генератор, from()
// Добавьте в поток в качестве стартового значения 0.11, используя startWith() 
// Получайте из потока числа пока они находятся в диапазоне от 0 до 0.7.
// Добавьте в поток также значение, которое нарушило условие.
// EN: Create a stream of random numbers between 0 and 1 using Math.random, generator, from()
// Add 0.11 as a start value to the stream using startWith()
// Get the numbers from the stream as long as they are in the range from 0 to 0.7.
// Add to the stream also the value that broke the condition.
(function task81() {
    //   const stream$ = 
    
    // run(stream$);
})();

// Task 8.2. takeWhile() (Artyom Buiko)
// RU: Создайте поток ввода текста из поля ввода до тех пор, пока не будет нажата клавиша Enter.
// Затем выведете набранную строку.
// Используйте map, reduce
// EN: Create a stream from the text of the input field until the Enter key is pressed.
// Then output the entered string.
// Use map, reduce
(function task82() {
    // const stream$ = 
    
    // run(stream$);
})();

// Task 9. distinct()
// RU: Создайте поток из массива чисел с дублями, используя from().
// Модифицируйте поток так, чтобы в массиве остались уникальные элементы
// Используйте reduce()
// EN: Create a stream from an array of numbers with duplicates using from().
// Modify the stream so that unique elements remain in the array
// Use reduce()
(function task9() {
    // const stream$ = 
    
    // run(stream$);
})();

// Task 10. distinctUntilChanged()
// RU: Создайте функцию, которая создает Observable, который будет выдавать в поток значения, 
// хранящихся в свойстве words класса С, используя generate()
// Модифицируйте поток - уберите повторы в подряд идущих группах, соберите предложение,
// используя reduce()
// EN: Create a function that creates an Observable that will emit values into the stream,
// stored in class C's words property using generate()
// Modify the stream - remove duplicates in consecutive groups, collect the sentence,
// using reduce()
(function task10() {
    class C<T> {
        private words: T[] = [];

        get size(): number {
            return this.words.length;
        }

        add(elem: T) {
            this.words.push(elem);
            return this;
        }

        get(index: number): T {
            return this.words[index];
        }
    }

    const obj = new C<string>()
                    .add('На')
                    .add('дворе')
                    .add('дворе')
                    .add('трава,')
                    .add('на')
                    .add('траве')
                    .add('траве')
                    .add('дрова.');


    // const stream$ = 
    
    // run(stream$);
})();


// Task 11. distinctUntilKeyChanged()
// RU: Пусть есть массив объектов. Создайте поток, в котором будут только три объекта, 
// за исключением, второго объекта { name: 'Joe' }.
// Используйте from()
// EN: Let there is an array of objects. Create a stream that will have only three objects, 
// except for the second object { name: 'Joe' }.
// Use from()
(function task11() {
    const ar = [
            { name: 'Brian' },
            { name: 'Joe' },
            { name: 'Joe' },
            { name: 'Sue' }
        ];

    // const stream$ = 
    
    // run(stream$);
})();


// Task 12. filter()
// RU: Пусть есть поток objAddressStream, который выдает объект и второй поток skipFieldsStream, который содержит перечень ключей объекта
// Необходимо модифицировать поток так, чтобы он выдавал объект без ключей из второго потока. 
// Используйте switchMap, pairs, withLatestFrom, reduce
// EN: Let there is a stream objAddressStream that produces an object 
// and a second stream skipFieldsStream that contains a list of the object's keys
// It is necessary to modify the stream so that it emits an object without keys 
// from the second stream.
// Use switchMap, pairs, withLatestFrom, reduce
(function task12() {
    const objAddressStream = of({
        country: 'Ukraine',
        city: 'Kyiv',
        index: '02130',
        street: 'Volodymyra Velikogo',
        build: 100,
        flat: 23
    });

    const skipFieldsStream$ = from(['build', 'flat']);
    
    
    // const stream$ = 
    
    // run(stream$, {outputMethod: 'console'});
})();



// Task 13. sample()
// RU: Создайте поток, который выдает числа каждую секунду, используя interval(). Выведите эти числа серым цветом,
// использыя tap(), addItem(value, {color: '#ccc'})
// Создайте поток событий 'click' на кнопке, используя fromEventPattern()
// Получите последний элемент из первого потока во время клика по кнопке
// EN: Create a stream that emits numbers every second using interval(). Print these numbers in gray,
// using tap(), addItem(value, {color: '#ccc'})
// Create a stream of 'click' events on the button using fromEventPattern()
// Get the last element from the first stream at button click
(function task13() {
    // const stream$ = 
    
    // run(stream$);
})();

// Task 14. sampleTime()
// RU: Создайте поток, который выдает числа каждую секунду, используя interval(). Выводите эти числа серым цветом,
// использыя tap(), addItem(value, {color: '#ccc'})
// Модифицируйте данный поток так, чтобы он выдавал последнее число, которое было в потоке 
// с периодом 3000мс
// EN: Create a stream that emits numbers every second using interval(). Print these numbers in gray,
// using tap(), addItem(value, {color: '#ccc'})
// Modify this stream so that it emits the last number that was in the stream
// with a period of 3000ms
(function task14() {
    // const stream$ = 
    
    // run(stream$);
})();


// Task 15. audit()
// RU: Создайте поток, который выдает числа каждые 500мс, используя interval(). 
// Выводите эти числа серым цветом, использыя tap(), addItem(value, {color: '#ccc'})
// Создайте функцию, которая принимает число и возращает поток, который выдает числа каждую 
// 1с, используя interval().
// Модифицируйте первый поток так, чтобы он выдавал значение только спустя время, заданое во 
// втором потоке.
// EN: Create a stream that emits numbers every 500ms using interval().
// Print these numbers in gray using tap(), addItem(value, {color: '#ccc'})
// Create a function that takes a number and returns a stream that emits numbers every
// 1s using interval().
// Modify the first stream so that it emits a value only after the time specified in
// second stream.
(function task15() {
    // const stream$ = 
    
    // run(stream$);
})();


// Task 16. auditTime()
// RU: Создайте поток, который выдает числа каждую 1с, используя interval(). 
// Выводите эти числа серым цветом, использыя tap(), addItem(value, {color: '#ccc'})
// Модифицируйте первый поток так, чтобы он выдавал числи только спустя каждые 3с
// EN: Create a stream that emits numbers every 1s using interval().
// Print these numbers in gray using tap(), addItem(value, {color: '#ccc'})
// Modify the first stream so that it only emits numbers every 3s
(function task16() {
    // const stream$ = 
    
    // run(stream$);
})();


// Task 17. throttle()
// RU: Создайте поток, который выдает числа каждую 1с, используя interval(). 
// Выводите эти числа серым цветом, использыя tap(), addItem(value, {color: '#ccc'})
// Модифицируйте первый поток так, чтобы он выдавал число, затем выдавал числа с периодом в число * 1000 мс.
// EN: Create a stream that emits numbers every 1s using interval().
// Print these numbers in gray using tap(), addItem(value, {color: '#ccc'})
// Modify the first stream so that it emits a number, then emits numbers with a period of number * 1000 ms.
(function task17() {
    // const stream$ = 
    
    // run(stream$);
})();


// Task 18. throttleTime()
// RU: Создайте поток объектов события mousemove.  Модифицируйте этот поток так, чтобы он выдал первое значение,
// а потом выдавал значение через каждый 2с
// EN: Create a stream of mousemove events. Modify this stream so that it returns the first value,
// and then gave a value every 2s
(function task18() {
    // const stream$ = 
    
    // run(stream$, { outputMethod: 'console'});
})();

// Task 19. debounce()
// RU: Создайте поток объектов события mousemove. Модифицируйте этот поток так, чтобы он выдал значение после того,
// как в потоке не будет появляться объект в течении времени заданого с помощью второго потока, например 500мс.
// EN: Create a stream of mousemove events. Modify this stream so that it emits the value after
// the object will not appear in the stream during the time specified with the the second stream, 
// for example 500ms.
(function task19() {
    // const stream$ = 
    
    // run(stream$, { outputMethod: 'console'});
})();

// Task 20. debounceTime()
// RU: Создайте поток значений поля ввода с id='text-field' для события keyup, используя fromEvent()  
// Модифицируйте этот поток так, чтобы он выдавал значение поля ввода после того,
// как в потоке не будет появляться новое значение в течении 500мс.
// EN: Create a stream of input field values with id='text-field' for the keyup event using fromEvent()
// Modify this stream so that it emits the value of the input field after
// a new value will not appear in the stream for 500ms.
(function task20() {
    // const stream$ = 
    
    // run(stream$);
})();

export function runner() {}