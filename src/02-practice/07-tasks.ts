import { EMPTY, from, of, throwError, timer, catchError, concatMap, delay, retry, retryWhen, take, tap, timeout, onErrorResumeNext, filter, throwIfEmpty, concatWith, map, interval } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { addItem, run } from './../03-utils';

// Task 1. catchError
// RU: Создайте поток, используя https://jsonplaceholder.typicode.com/usersError.
// В случае ошибки обработайте ее и сгенерите поток с помощью throwError. Обработайте ошибку 
// и верните пустой поток
// Используйте: ajax, map, catchError, throwError, EMPTY
// EN: Create a stream using https://jsonplaceholder.typicode.com/usersError.
// If an error occurs, handle it and return a stream with throwError. Handle the Error
// and return an empty stream
// Use: ajax, map, catchError, throwError, EMPTY
(function Task1 () {
    // const stream$ = 

    // run(stream$);
})();

// Task 2. retry
// RU: Создайте поток, используя https://jsonplaceholder.typicode.com/postsError.
// В случае ошибки организуйте дополнительные две попытки получить данные.
// Если данные не будут получены, обработайте ошибку и верните пустой поток
// Используйте: ajax, map, catchError
// EN: Create a stream using https://jsonplaceholder.typicode.com/postsError.
// If an error occurs, organize an additional two attempts to get the data.
// If no data is received, handle the error and return an empty stream
// Use: ajax, map, catchError
(function Task2 () {
    // const stream$ = 

    // run(stream$);
})();


// Task 3. retry
// RU: Создайте поток, используя https://jsonplaceholder.typicode.com/postsError.
// В случае ошибки организуйте 5 повторных запросов с задержкой по времени в 1с, 2с, 3с, ...
// Если результат не будет получен, обработайте ошибку и верните пустой поток
// Используйте: ajax, map, interval, catchError, EMPTY
// EN: Create a stream using https://jsonplaceholder.typicode.com/postsError.
// If an error occurs, organize 5 repeated requests with a time delay of 1s, 2s, 3s, ...
// If no result is received, handle the error and return an empty stream
// Use: ajax, map, interval, catchError, EMPTY
(function Task3 () {
    // const request$ = 

    // const stream$ = 

    // run(stream$);
})();

// Task 4. timeout
// RU: Создайте поток пользователей, используя https://jsonplaceholder.typicode.com/users.
// Если данные не будут получены в течении 200мс, сгенерите ошибку.
// Обработайте ошибку и верните пустой поток.
// Используйте: ajax, map, catchError, EMPTY
// EN: Create a stream of users using https://jsonplaceholder.typicode.com/users.
// If no data is received within 200ms, throw an error.
// Handle the error and return an empty stream.
// Use: ajax, map, catchError, EMPTY
(function Task4 () {
    // const stream$ = 

    // run(stream$);
})();


// Task 5. timeout
// RU: Создайте поток пользователей, используя https://jsonplaceholder.typicode.com/users.
// Если данные не будут получены в течении 100мс, верните альтернативный поток
// Используйте: ajax, map
// EN: Create a stream of users using https://jsonplaceholder.typicode.com/users.
// If no data is received within 100ms, return an alternate stream
// Use: ajax, map
(function Task5 () {
    // const stream$ = 

    // run(stream$);
})();

// Task 6. onErrorResumeNext
// RU: Создайте 4 потока используя следующий список адрессов:
// https://jsonplaceholder.typicode.com/users
// https://jsonplaceholder.typicode.com/postsError
// https://jsonplaceholder.typicode.com/posts
// и строчку 'USERS'
// Объедините все результаты в один поток. Обратите внимание на то, что второй поток 
// возвращает ошибку.
// EN: Create 4 streams using the following list of addresses:
// https://jsonplaceholder.typicode.com/users
// https://jsonplaceholder.typicode.com/postsError
// https://jsonplaceholder.typicode.com/posts
// and the string 'USERS'
// Merge all results into one stream. Note that the second thread returns an error.

(function Task6 () {
    // const stream$ = 

    // run(stream$);

   
})();

// Task 7. throwIfEmpty
// RU: Создайте поток пользователей, используя https://jsonplaceholder.typicode.com/users.
// Отфильтруйте поток и оставьте в потоке пользоателя с id = 88. Если такого пользователя не окажется
// в потоке, сгенерируйте ошибку 'Stream is not contain object with id = 88'
// Используйте: ajax, map, concatMap, filter, throwIfEmpty
// EN: Create a stream of users using https://jsonplaceholder.typicode.com/users.
// Filter the stream and leave the user with id = 88 in the stream. If there is no such user
// in a stream, throw the error 'Stream is not contain object with id = 88'
// Use: ajax, map, concatMap, filter, throwIfEmpty
(function Task7 () {
    // const stream$ = 

    // run(stream$);
})();

export function runner() {}
