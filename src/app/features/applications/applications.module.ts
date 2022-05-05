import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApplicationsRoutingModule } from './application-list/applications-routing.module';
import { ApplicationsComponent } from './applications.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    ApplicationsRoutingModule,
    SharedModule
  ],
  declarations: [
    ApplicationsComponent
  ],
  entryComponents: [
  ]
})
export class ApplicationsModule { }
