import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, timer } from 'rxjs';
import { retry, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PollService {

  private apiUrl = 'http://localhost:8888/poll';

  constructor(private http: HttpClient) { }

  poll(url: string): Observable<any> {
    return timer(1, 30000).pipe(
      switchMap(() => this.http.post(this.apiUrl, url)),
      retry()
    );
  }
}
