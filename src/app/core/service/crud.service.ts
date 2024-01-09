import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
url= 'http://localhost:5000/'
  constructor(private http: HttpClient) { }


  postUser(data: any): Observable<any>{
return this.http.post(this.url + 'users/post', data)
  }
}
