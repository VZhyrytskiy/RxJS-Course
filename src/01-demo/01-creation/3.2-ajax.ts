// ajax(input: string | AjaxConfig): Observable

import { ajax } from 'rxjs/ajax';
import { of, map, catchError } from 'rxjs';
import { addItem, run } from './../../03-utils';

(function ajaxDemo1() {
    const source$ = ajax(`https://api.github.com/users?per_page=5`);

    const stream$ = source$.pipe(
        catchError(error => {
            console.log('error: ', error);
            return of(error);
        })
    );

    // run(stream$);
})();

(function ajaxDemo2() {

    const stream$ = ajax(`https://api.github.com/404`).pipe(
        catchError(error => {
            console.log('error: ', error);
            return of(error);
        })
    );

    // run(stream$);
})();

export function runner() {}