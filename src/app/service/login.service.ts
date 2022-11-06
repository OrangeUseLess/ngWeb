import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  serviceUrl: string = 'http://localhost';

  constructor(
    private http: HttpClient
  ) { }

  // login
  loginPost = <T>(param: T): Observable<Object> => {
    //  http他内部封装了 本身就是一个observerbe
    //  这里面可以处理请求格式和参数就行了
    return this.http.post(`${this.serviceUrl}/login`, param);
  } 
}