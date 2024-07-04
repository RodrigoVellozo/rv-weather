import { HttpInterceptorFn } from '@angular/common/http';

export const homeInterceptor: HttpInterceptorFn = (req, next) => {
  const newReq = req.clone({
    setHeaders: {
      'Content-Type': 'application/json',
    },
  });
  return next(newReq);
};
