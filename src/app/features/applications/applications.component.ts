import { ApplicationService } from './../../core/services/application.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserService } from 'src/app/core/services/user.service';
import { BankService } from 'src/app/core/services/bank.service';
import { NotificationService } from 'src/app/core/services/notification.service';

interface User {
  id: number;
  name: string;
  state: string;
}

@Component({
  selector: 'app-applications',
  templateUrl: './application-list/applications.component.html',
  styleUrls: ['./application-list/applications.component.css']
})
export class ApplicationsComponent implements OnInit {

  users: User[];

  applicationForm = new FormGroup({
    user: new FormControl(),
    amount: new FormControl(),
    state: new FormControl()
  })

  constructor(
    private userservice: UserService,
    private applicationservice: ApplicationService,
    private notificationService: NotificationService,
    public bankService: BankService
  ) { }

  ngOnInit(): void {
    console.log('application')
    this.userservice.listUser().subscribe( (data: any) => {
      this.users = data;
    });
  }

  clear() {
    this.applicationForm.reset();
  }

  onSubmit() {
    let calification = Math.random();
    if(calification >= 0.5 ) {
      this.applicationForm.controls['state'].setValue('Approved');
      this.applicationservice.approvedCredit(this.applicationForm.value).subscribe(data => {
        this.bankService.updateAmount(data.amount)
      });
      setTimeout(() => {
        this.notificationService.openSnackBar('approved credit');
      });
    } else {
      setTimeout(() => {
        this.notificationService.openSnackBar('unapproved credit');
      });
    }
    this.applicationForm.reset();
  }


}
