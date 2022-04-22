// withLatestFrom(
//  otherObservables: ...Observable[]
// ): Observable
import { timer, Observable, of, take, map, withLatestFrom } from 'rxjs';
import { addItem, run } from './../../03-utils';

(function withLatestFromDemo1() {
  const source1$ = timer(0, 1000).pipe(take(3));
  const source2$ = timer(0, 1000); //timer(0, 10000), timer(10000, 1000), of(1, 2, 3);

  const stream$ = source1$.pipe(
    withLatestFrom(source2$),
    map(([val1, val2]) => {
      return `First source: ${val1}, Second source: ${val2}`;
    })
  );

  // run(stream$);
})();

// Add new item to an array
(function withLatestFromDemo2() {
  interface Book {
    title: string;
    author: string;
  }

  // observable of books
  const books$: Observable<Array<Book>> = of([
    { title: 'Build Reactive Websites with RxJS', author: 'Randall Koutnik' },
    { title: 'RxJS in Action', author: 'Paul P. Daniels, Luis Atencio' }
  ]);

  // observable of book
  const addBook$: Observable<Book> = of({
    title: 'Mastering Reactive JavaScript',
    author: 'Oren Farhi'
  });

  // add new book to array
  const stream$ = books$.pipe(
    withLatestFrom(addBook$),
    map(([books, addBook]) => [...books, addBook])
  );

  // run(stream$);
})();

// replace id with name
(function withLatestFromDemo3() {
  interface Book {
    title: string;
    author: string;
    shelfID: number;
  }

  interface Shelf {
    id: number;
    name: string;
  }

  // observable of books
  const books$: Observable<Array<Book>> = of([
    {
      title: 'Build Reactive Websites with RxJS',
      author: 'Randall Koutnik',
      shelfID: 1
    },
    {
      title: 'RxJS in Action',
      author: 'Paul P. Daniels, Luis Atencio',
      shelfID: 2
    }
  ]);

  // observable of shelves
  const shelves$ = of<Shelf[]>([
    { id: 1, name: 'Shelf-1' },
    { id: 2, name: 'Shelf-2' }
  ]);

  // observable of books with shelf name
  const bookWithShelf$ = books$.pipe(
    withLatestFrom(shelves$),
    map(([books, shelves]) => {
      return books.map(book => {
        return {
          ...book,
          shelfName: shelves.find(shelf => shelf.id === book.shelfID).name
        };
      });
    })
  );

  // run(bookWithShelf$);
})();

export function runner() {};
