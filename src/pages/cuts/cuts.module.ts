import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CutsPage } from './cuts';

@NgModule({
  declarations: [
    CutsPage,
  ],
  imports: [
    IonicPageModule.forChild(CutsPage),
  ],
})
export class CutsPageModule {}
