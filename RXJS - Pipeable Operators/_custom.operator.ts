import { Observable } from 'rxjs';

{{#each operatorNames}}
const {{camelCase this}} = () => <T>(source: Observable<T>) =>
    new Observable<T>(observer => {
    return source.subscribe({
        next(x) {
        observer.next(x);
        },
        error(err) {
        observer.error(err);
        },
        complete() {
        observer.complete();
        }
    })
    });

{{/each}}