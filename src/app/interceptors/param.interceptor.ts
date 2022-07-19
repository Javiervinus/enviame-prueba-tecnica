import { Injectable } from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor,
    HttpParams,
} from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable()
export class ParamInterceptor implements HttpInterceptor {
    constructor() { }

    intercept(req: HttpRequest<any>, next: HttpHandler) {

        let params = new HttpParams()
        params = params.append("ts", 1)
        params = params.append("apikey", environment.apiKey)
        params = params.append("hash", environment.hashKey)

        const paramReq = req.clone({
            params: params
        });
        return next.handle(paramReq);
    }
}
