import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Poller } from '../Poller';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class PollerService {

  private apiUrl = 'http://localhost:8888/pollers';

  constructor(private http: HttpClient) { }

  addPoller(poller: Poller): Observable<Poller> {
    return this.http.post<Poller>(this.apiUrl, poller, httpOptions);
  }

  getPollers(): Observable<Poller[]> {
    return this.http.get<Poller[]>(this.apiUrl);
  }
}
