import { BankService } from './../../core/services/bank.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bank',
  templateUrl: './bank.component.html',
  styleUrls: ['./bank.component.css']
})
export class BankComponent implements OnInit {

  constructor(
    public bankService: BankService
  ) { }

  ngOnInit(): void {
    console.log('bank');

  }


}
