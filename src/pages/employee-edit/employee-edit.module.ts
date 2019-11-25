import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EmployeeEditPage } from './employee-edit';

@NgModule({
  declarations: [
    EmployeeEditPage,
  ],
  imports: [
    IonicPageModule.forChild(EmployeeEditPage),
  ],
})
export class EmployeeEditPageModule {}
