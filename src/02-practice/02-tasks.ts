import { addItem, run } from './../03-utils';
import { from, fromEvent, of, first, last, elementAt, min, max, find, findIndex, single, map, tap, catchError, EMPTY, ignoreElements, merge, throwError, mergeWith } from 'rxjs';
import { ajax } from 'rxjs/ajax';

// Task 1. first()
// RU: Создайте поток объектов с двумя свойствами: action и priority
// Получите первый объект из потока с высоким приоритетом
// EN: Create an observable of objects with two properties: action and priority
// Get the first object from the observable with the high priority
(function task1(): void {
    // const stream$ = 

    // run(stream$);
})();

// Task 2. last()
// RU: Создайте поток слов из предложения 'Мягкое слово кости не ломит'. 
// Получите последнее слово, которое содержит 6 символов
// EN: Create an observable of words from the sentence 'A soft word does not break bones'. 
// Get the last word that contains 6 characters
(function task2(): void {
    // const stream$ = 
    
    // run(stream$);
})();


// Task 3. elementAt()
// RU: Создайте поток событий клик по документу. Получите второй объект события клик.
// EN: Create an observable of document click event. Get the second click event object.
(function task3(): void {
    // const stream$ = 
    
    // run(stream$, { outputMethod: "console"});
})();

// Task 4. min() (Vitalii Puzakov)
// RU: Создайте поток слов из предложения 'Мягкое слово кости не ломит'. 
// Найдите минимальную длину слова в предложении.
// EN: Create an observable of words from the sentence 'A soft word does not break bones'. 
// Find the minimum length of a word in a sentence.
(function task4() {
    // const source$ = 

    // run(stream$);
})();


// Task 5. max() (Ankit Katheriya)
// RU: Пусть у нас есть список проектов с датой начала и названием
// Мы хотим получить имя самого последнего запущенного проекта 
// EN: Let's we have a list of projects with started date and name 
// We want to get the name of the most recent(latest) started project
(function task5() {
    const source$ = from([{
        dateStart: "2020-04-13T00:00:00",
        ProjectId: "1",
        ProjectName: "First",
      },
      {
        dateStart: "2020-07-05T00:00:00",
        ProjectId: "2",
        ProjectName: "Second",
      },
      {
        dateStart: "2020-06-04T00:00:00",
        ProjectId: "3",
        ProjectName: "Third",
      }]);

    // const stream$ = 

    // run(stream$);
})();

// Task 6. find() (Andrii Olepir)
// RU: Создайте поток, используя ajax(`https://jsonplaceholder.typicode.com/users`)
// Получите первого пользователя, email которого, заканчивается на 'biz'  
// EN: Create an observable using ajax(`https://jsonplaceholder.typicode.com/users`)
// Get the first user whose email ends with 'biz'
(function task6() {
    // const stream$ = 

    // run(stream$);
})();

// Task7. findIndex()
// RU: Создайте поток объектов с двумя свойствами: id, name.
// Получите номер объекта в потоке, у которого длина name больше 10 символов  
// EN: Create an observable of object with two properties: id, name.
// Get the number of the object in the stream whose name is longer than 10 characters
(function task7() {
    // const stream$ = 

    // run(stream$);
})();

// Task 8. single()
// RU: Создайте поток объектов с двумя свойствами: title, priority так, чтобы некоторые объекты
// имели одинаковые значения title
// Получите объект у которого title = 'Learn RxJS', если он единственный в потоке
// EN: Create an observable of objects with two properties: title, priority so that some objects
// have the same title values
// Get the object with title = 'Learn RxJS' if it's the only one object in the stream
(function task8() {
    // const stream$ = 
    
    // run(stream$);
})();

// Task 9. ignoreElements() (Uladzimir Miadzinski)
// RU: Создайте три потока, которые представляют результат выполнения запросов на три адреса
// https://app.com/logout, https://mail.app.com/logout, https://research.app.com/logout
// используя ajax().
// Предположим, пользователь разлогинивается на первом адресе. Необходимо запустить процесс разлогинивания
// пользователя на поддоменах и вывести на страницу результат работы.
// Если пользователь успешно разлогинился на всех адресах, вывести сообщение 
// 'Пользователь успешно разлогинен на всех поддоменах', если нет, то вывести сообшение
// 'Не удалось разлогинить пользователя на всех поддоменах'
// Использовать: ajax, of, mergeWith, tap, catchError, EMPTY
// Замените функцию ajax на of и понаблюдейте за результатом
// EN: Create three streams that represent the result of executing requests for three urls
// https://app.com/logout, https://mail.app.com/logout, https://research.app.com/logout
// using ajax().
// Let assume the user log out on the first domain. You need to start the logout process
// on subdomains and display the result of the process on the page.
// If the user successfully logged out on all urls, display a message
// 'User successfully logged out on all subdomains', if not, display a message
// 'Failed to logout user on all subdomains'
// Use: ajax, of, mergeWith, tap, catchError, EMPTY
// Replace the ajax function with of and watch the result
(function task9() {
    // const stream$ = 

    // run(stream$);
})();

export function runner() {}