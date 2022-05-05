import { Component, OnInit, ViewChild } from '@angular/core';
import { NGXLogger } from 'ngx-logger';
import { AuthenticationService } from 'src/app/core/services/auth.service';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { ApplicationService } from 'src/app/core/services/application.service';

export interface CreditInterface {
  id: number;
  user: number;
  amount: string;
  state: number;
}

@Component({
  selector: 'app-dashboard-home',
  templateUrl: './dashboard-home.component.html',
  styleUrls: ['./dashboard-home.component.css']
})

export class DashboardHomeComponent implements OnInit {
  currentUser: any;
  displayedColumns: string[] = ['user', 'amount', 'state'];
  dataSource = new MatTableDataSource();

  private credits: CreditInterface [];

  @ViewChild(MatSort, { static: true })
  sort: MatSort = new MatSort;

  @ViewChild(MatTable, { static: true }) table: MatTable<any> | undefined;
  constructor(
    public dialog: MatDialog, 
    private logger: NGXLogger,
    private authService: AuthenticationService,
    private applicationservice: ApplicationService,
    ){ }

  ngOnInit() {
    this.currentUser = this.authService.getCurrentUser();
    this.logger.log('Dashboard loaded');
    this.loadApprovedList();
  }

  loadApprovedList() {
    this.applicationservice.approvedCreditList().subscribe(( data: any) => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.sort = this.sort;
    });
  }

}
