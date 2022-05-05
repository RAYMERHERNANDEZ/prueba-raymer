import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { UserService } from 'src/app/core/services/user.service';


@Component({
  selector: 'app-dialog-create',
  templateUrl: './dialog-create.component.html',
  styleUrls: ['./dialog-create.component.css']
})
export class DialogCreateComponent implements OnInit {

  contactForm = new FormGroup({
    dni: new FormControl(),
    name: new FormControl(),
    email: new FormControl()
  })

  constructor(
    public dialogRef: MatDialogRef<DialogCreateComponent>,
    private userservice: UserService,
  ) {
  }

  ngOnInit(): void {
    console.log('test');
  }

  closeDialog() {
    this.dialogRef.close({ event: 'Cancel' });
  }

  onSubmit() {
    console.log(this.contactForm.value);
    this.userservice.createUser(this.contactForm.value).subscribe(data => {
      console.log(data);
      this.dialogRef.close();
    });
  }
  
}
