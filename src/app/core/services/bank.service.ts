import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BankService {

  public amount: number = environment.amountBank;

  constructor(private http: HttpClient) { }

  updateAmount(amount: number) {
    this.amount-= amount;
  }

}
