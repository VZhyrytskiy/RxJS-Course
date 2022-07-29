import { EMPTY, from, fromEvent, interval, NEVER, of, range, timer } from "rxjs";
import { buffer, bufferCount, bufferTime, bufferToggle, bufferWhen, window, concatMap, delay, filter, map, pluck, scan, take, tap, windowWhen, switchMap, toArray, windowCount, mergeMap, windowTime, windowToggle, pairwise } from "rxjs/operators";
import { addItem, run } from "../03-utils";

// Task 1. buffer()
// RU: Создать поток, который будет выдавать целые значения каждую секунду.
// Буферизировать значения потока, используя второй поток interval(3000). 
// Выдавать значения с накоплением.
// Результат:
// [0, 1, 2]
// [0, 1, 2, 3, 4, 5]
// [0, 1, 2, 3, 4, 5, 6 ,7, 8]
// ...
// Используйте операторы: timer, interval, scan
// EN: Create a stream that will emit integer values every second.
// Buffer stream values using second stream interval(3000).
// Return accumulated values.
// Result:
// [0, 1, 2]
// [0, 1, 2, 3, 4, 5]
// [0, 1, 2, 3, 4, 5, 6,7, 8]
// ...
// Use operators: timer, interval, scan 
(function Task1() {
    // const stream$ = .

    // run(stream$);
})();


// Task 2. bufferWhen
// RU: Создайте поток из 100 случайных чисел от 1 до 10. Добавьте задержку после каждого числа 500мс.
// Группируйте числа в массив по клику на кнопку Run
// EN: Create a stream of 100 random numbers from 1 to 10. Add a 500ms delay after each number.
// Group numbers into an array on click of the Run button
(function Task2() {
    function *getRandom(min: number, max: number) {
        while (true) {
            yield Math.floor(Math.random() * (max - min + 1)) + min;
        }
    }
    // const stream$ = 

    // run(stream$);
})();

// Task 3. bufferCount()
// RU: Создайте поток чисел от 1 до 1000. Буферизируйте по 10 значений и выдавайте каждую группу
// через 5с.
// Используйте операторы: delay, concatMap
// EN: Create a stream of numbers from 1 to 1000. Buffer 10 values and output each group
// after 5s.
// Use operators: delay, concatMap
(function Task3() {
    const source$ = range(1, 1000);

    // const stream$ = 

    // run(stream$);
})();


// Task 4. bufferTime
// RU: Создайте поток событий клик по документу. Группируйте клики по временному диапазону в 2с
// Для каждой группы верните максимальное значение координаты Х
// EN: Create a stream of document click events. Group clicks by 2s time range
// For each group, return the maximum value of the X coordinate
(function Task4() {
    // const clicks$ = 

    // run(stream$);
})();

// Task 5. bufferToggle
// RU: Создайте поток из букв вводимых в поле ввода с идентификатором text-field.
// Буферизируйте значения, используя timer(0, 5000) и timer(5000, 5000)
// EN: Create a stream of letters entered in the input field with the identifier text-field.
// Buffer values using timer(0, 5000) and timer(5000, 5000)
(function Task5() {
    // const source$ = 

    // run(stream$);
})();

// Task 6. window
// RU: Перепишите первое задание с использованием оператора window
// EN: Rewrite the first task using the window operator
(function Task6() {
    // const stream$ = 

    // run(stream$);
})();

// Task 7. windowWhen
// RU: Перепишите второе задание с использованием оператора windowWhen
// EN: Rewrite the second task using the windowWhen operator
(function Task7() {
    function *getRandom(min: number, max: number) {
        while (true) {
            yield Math.floor(Math.random() * (max - min + 1)) + min;
        }
    }
    // const stream$ = 

    // run(stream$);
})();

// Task 8. windowCount
// RU: Перепишите третье задание с использованием оператора windowCount
// EN: Rewrite the third task using the windowCount operator
(function Task8() {
    // const source$ = 

    // run(stream$);
})();

// Task 9. windowTime
// RU: Перепишите четвертое задание с использованием оператора windowTime
// EN: Rewrite the fourth task using the windowTime operator
(function Task9() {
    // const clicks$ = 

    // run(stream$);
})();

// Task 10. windowToggle
// RU: Перепишите пятое задание с использованием оператора windowToggle
// EN: Rewrite the fifth task using the windowToggle operator
(function Task10() {
    // const source$ =

    // run(stream$);
})();

// Task 11. pairwise
// RU: Создайте поток кликов по документу. Буферизируйте по 2 элемента
// Подсчитайте расстояние между координатами кликов 
// EN: Create a stream of document click events. Buffer by 2 elements
// Calculate the distance between click coordinates
(function Task11() {
    // const clicks$ =

    // run(stream$);
})();

export function runner() {}