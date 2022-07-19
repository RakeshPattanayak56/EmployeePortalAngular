import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { POPUP } from './pop-up.model';

@Injectable({
  providedIn: 'root'
})
export class PopUpService {
  url = 'https://localhost:7097/api';

  constructor(private httpclient: HttpClient) { }
  update(popup: POPUP): Observable<POPUP> {
    debugger
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.httpclient.post<POPUP>(this.url + '',popup, httpOptions);
  }
}
