import { Injectable } from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpInterceptor,
} from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable()
export class ParamInterceptor implements HttpInterceptor {
    constructor() { }

    intercept(req: HttpRequest<any>, next: HttpHandler) {


        const paramReq = req.clone({
            params: req.params.appendAll(
                {
                    "ts": 1,
                    "apikey": environment.apiKey,
                    "hash": environment.hashKey
                })
        });
        return next.handle(paramReq);
    }
}
