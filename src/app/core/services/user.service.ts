import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  createUser(data: any) {
    return this.http.post<any>('http://localhost:8080/users', data);
  }

  listUser() {
    return this.http.get('http://localhost:8080/users');
  }

}
