import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { NGXLogger } from 'ngx-logger';
import { Title } from '@angular/platform-browser';
import { NotificationService } from 'src/app/core/services/notification.service';
import { DialogCreateComponent } from './components/dialog-create/dialog-create.component';
import { MatDialog } from '@angular/material/dialog';
import { UserService } from 'src/app/core/services/user.service';

export interface UserInterface {
  id: number;
  dni: number;
  name: string;
  email: number;
}

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})

export class CustomerListComponent implements OnInit {
  displayedColumns: string[] = ['dni', 'name', 'email'];
  dataSource = new MatTableDataSource();

  private users: UserInterface [];

  @ViewChild(MatSort, { static: true })
  sort: MatSort = new MatSort;

  @ViewChild(MatTable, { static: true }) table: MatTable<any> | undefined;
  constructor(
    public dialog: MatDialog, 
    private userservice: UserService
    ){ }

  ngOnInit() {
    console.log('user');
    this.loadUserList();
  }

  addRowData(row_obj: any) {
    console.log(row_obj);
  }

  loadUserList() {
    this.userservice.listUser().subscribe(( data: any) => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.sort = this.sort;
      console.log(data);
    });
  }

  openDialog(action: any, obj: any) {
    obj.action = action;
    const dialogRef = this.dialog.open(DialogCreateComponent, {
      width: '400px',
      height: '370px',
      data: obj
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    });
  }
}
