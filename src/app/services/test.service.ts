import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class TestService {

  constructor(private http: HttpClient) { }

  getTestText(): Observable<string> {
    return this.http.get<string>('https://baconipsum.com/api/?type=meat-and-filler&paras=1');
  }

}