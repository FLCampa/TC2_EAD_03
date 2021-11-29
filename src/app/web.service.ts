import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Message } from './message.model';
import { User } from './user.model';

@Injectable({
  providedIn: 'root',
})
export class WebService {
  baseURL = 'https://tiagoifsp.ddns.net/mensagens/jwt/';

  constructor(private http: HttpClient) {}

  public registerUser(user: User): Observable<any> {
    let body = new HttpParams();
    body = body.set('nome', user.nome);
    body = body.set('login', user.login);
    body = body.set('senha', user.senha);

    return this.http.put(`${this.baseURL}user.php`, body, {
      observe: 'response',
    });
  }

  public login(user: User): Observable<any> {
    let body = new HttpParams();
    body = body.set('login', user.login);
    body = body.set('senha', user.senha);

    return this.http.post(`${this.baseURL}user.php`, body, {
      observe: 'response',
    });
  }

  public registerMessage(message: Message): Observable<any> {
    let body = new HttpParams();
    body = body.set('texto', message.text);

    return this.http.put(`${this.baseURL}msg.php`, body, {
      observe: 'response',
    });
  }

  public getMessages(): Observable<any[]> {
    return this.http.get<Message[]>(`${this.baseURL}msg.php`);
  }
}
