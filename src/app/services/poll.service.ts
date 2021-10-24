import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PollService {

  private apiUrl = 'http://localhost:8888/poll';

  constructor(private http: HttpClient) { }

  poll(url: string): Observable<any> {
    return this.http.get(this.apiUrl + '/' + url);
  }
}
