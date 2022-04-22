// fromFetch<T>(
//     input: string | Request, 
//     initWithSelector?: RequestInit & { selector?: (response: Response) => ObservableInput<T>; } = {}
// ): Observable<Response | T>

import { of, switchMap, catchError } from 'rxjs';
import { fromFetch } from 'rxjs/fetch';
import { addItem, run } from './../../03-utils';
 
(function fromFetchDemo() {
    const stream$ = fromFetch('https://api.github.com/users?per_page=5')
        .pipe(
            switchMap(response => {
                if (response.ok) {
                    // OK return data
                    return response.json();
                } else {
                    // Server is returning a status requiring the client to try something else.
                    return of({ error: true, message: `Error ${response.status}` });
                }
            }),
            catchError(err => {
                // Network or other error, handle appropriately
                console.error(err);
                return of({ error: true, message: err.message })
            })
        );

    // const sub = run(stream$);
    // sub.unsubscribe(); // uncomment and see network tab in the browser
})();

export function runner() {}