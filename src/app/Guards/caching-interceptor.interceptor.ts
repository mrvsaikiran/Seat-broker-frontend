import { HttpInterceptorFn, HttpResponse } from '@angular/common/http';
import { Observable, of, startWith, tap } from 'rxjs';

export const cachingInterceptorInterceptor: HttpInterceptorFn = (req, next) => {
  const cache = new Map<string, any>();
  if (req.method != 'GET') {
    return next(req);
  }
  const cachedResponse = cache.get(req.urlWithParams);
  if (cachedResponse) {
    return of(cachedResponse);
  }

  return next(req).pipe(
    tap((event) => {
      if (event instanceof HttpResponse) {
        cache.set(req.urlWithParams, event);
      }
    })
  );
};
