import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApplicationService {

  constructor(private http: HttpClient) { }

  approvedCredit(data: any) {
    return this.http.post<any>('http://localhost:8080/applications', data);
  }

  approvedCreditList() {
    return this.http.get('http://localhost:8080/applications');
  }
}
